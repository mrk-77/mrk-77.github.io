---
layout: post
title: "Building a Home Lab for Security Research"
description: "Step-by-step guide to creating an isolated home lab for security testing. Covers virtualization, network design, Active Directory setup, and safe experimentation practices."
date: 2025-11-08
categories:
  - Writeup
  - Labs
read_time: "10 min"
---

# Building a Home Lab for Security Research

A well-designed home lab is essential for developing security skills, testing tools, and understanding attack techniques in a safe environment. This writeup covers my approach to building a flexible, isolated lab for security research.

## Lab Requirements

Before diving into implementation, I defined these core requirements:

- **Complete isolation** from production networks
- **Snapshot capability** for quick resets
- **Resource efficiency** to run on consumer hardware
- **Flexibility** to simulate various environments
- **Realistic networking** including routing and segmentation

## Hardware Setup

My lab runs on a single workstation with the following specifications:

| Component | Specification |
|-----------|---------------|
| CPU | AMD Ryzen 9 5950X (16 cores) |
| RAM | 64GB DDR4 |
| Storage | 2TB NVMe SSD |
| Network | Dual 1GbE NICs |

This provides enough resources for 10-15 concurrent VMs while maintaining responsiveness.

## Virtualization Platform

I chose VMware Workstation Pro for several reasons:

- Advanced networking capabilities (virtual switches, NAT, host-only)
- Snapshot management with linked clones
- Good performance on Windows hosts
- Support for nested virtualization

Alternative options include:
- **Proxmox VE** - Excellent for dedicated lab servers
- **VirtualBox** - Free but limited networking features
- **Hyper-V** - Built into Windows, good integration

## Network Architecture

### Physical Network Isolation

```
[Internet] -- [Router] -- [Production Network]
                      |
                  (隔离边界)
                      |
[Lab Host] -- [Virtual Switch] -- [Lab VMs]
```

The lab operates on completely separate IP ranges:

- Production: `192.168.1.0/24`
- Lab Internal: `10.10.0.0/16`
- Lab Management: `10.10.255.0/24`

### Virtual Network Segments

I created three virtual switches:

1. **Lab-Management** - Host-only network for administration
2. **Lab-Internal** - Isolated network for lab VMs
3. **Lab-NAT** - Controlled internet access for updates

## Active Directory Deployment

### Domain Controller Setup

```powershell
# Install AD DS role
Install-WindowsFeature AD-Domain-Services -IncludeManagementTools

# Promote to domain controller
Install-ADDSForest `
    -DomainName "mreza.local" `
    -DomainMode "WinThreshold" `
    -ForestMode "WinThreshold" `
    -DatabasePath "C:\Windows\NTDS" `
    -SysvolPath "C:\Windows\SYSVOL" `
    -LogPath "C:\Windows\Logs"
```

Key configuration decisions:
- Functional level set to Windows Server 2016 for modern features
- Separate SYSVOL and NTDS locations for snapshot efficiency
- DNS integrated with AD for realistic name resolution

### Member Servers and Workstations

Deployed additional systems:

| System | Purpose | OS |
|--------|---------|-----|
| SRV01 | File server, SQL | Server 2019 |
| SRV02 | Web server, IIS | Server 2019 |
| WS01 | User workstation | Windows 11 |
| WS02 | Developer workstation | Windows 11 |
| KALI | Attack platform | Kali Linux |

## Safety Controls

### Network Isolation Verification

Regular checks ensure lab isolation:

```bash
# From Kali, verify no route to production
root@kali:~# ping 192.168.1.1
PING: unreachable

# Verify lab-only routing
root@kali:~# ip route
default via 10.10.255.1 dev eth0
10.10.0.0/16 dev eth0 proto kernel scope link src 10.10.1.50
```

### Snapshot Strategy

Implemented a tiered snapshot approach:

1. **Base snapshots** - Clean OS installations (never deleted)
2. **Configuration snapshots** - After major setup steps
3. **Testing snapshots** - Before each experiment session

Naming convention: `YYYY-MM-DD_Description_State`

Example: `2025-11-08_DC-Promoted_Clean`

## Tooling and Resources

### Pre-installed Tools on Attack VM

```bash
# Reconnaissance
nmap, enum4linux, bloodhound, ldapsearch

# Credential Attacks
impacket-suite, hashcat, john, mimikatz

# Post-Exploitation
powercat, empire, covenant, metasploit

# Reporting
dradis, obsidian, cherrytree
```

### Monitoring Stack

For defensive research, deployed:

- **Security Onion** - IDS and log analysis
- **Velociraptor** - Endpoint detection and response
- **Elastic Stack** - Centralized logging

## Lessons Learned

### What Worked Well

- **Nested virtualization** enabled testing hypervisor escapes
- **Multiple snapshots** saved countless hours during failed experiments
- **Separate management network** simplified troubleshooting
- **Documentation** of lab state prevented confusion after breaks

### Challenges Encountered

- **Resource contention** when running too many VMs simultaneously
- **Time synchronization** issues between host and guests
- **License management** for Windows VMs
- **Backup complexity** with large snapshot chains

### Improvements for Next Iteration

1. Automate deployment with Terraform and Packer
2. Add simulated users with automated activity patterns
3. Implement purple team monitoring infrastructure
4. Create scenario-specific lab templates

## Conclusion

This home lab has been invaluable for developing practical security skills in a risk-free environment. The key to success is balancing realism with manageability—creating an environment that's complex enough to be educational but simple enough to maintain.

Future posts will cover specific attack scenarios tested in this lab, including detailed walkthroughs of common exploitation paths and defensive detection strategies.

---

*Lab files and configuration templates available on request.*
