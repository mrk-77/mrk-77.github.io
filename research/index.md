---
layout: page
title: Research
description: "Deep technical research into modern attack surfaces, defensive engineering and emerging security technologies."
permalink: /research/
---

<div class="page-hero">
  <h1>Research</h1>
  <small>Technical Research & Analysis</small>
  <p>Deep technical research into modern attack surfaces, defensive engineering and emerging security technologies.</p>
</div>

<div class="feature-grid">
  <a class="feature-card cyan" href="#published-research"><div class="feature-image"><img src="{{ '/assets/images/ai.svg' | relative_url }}" alt="AI security research preview" loading="lazy"></div><div class="feature-icon">AI</div><h3>AI Security</h3><p>LLM security, RAG, agent security, prompt injection, MCP and AI threat modeling.</p></a>
  <a class="feature-card red" href="#published-research"><div class="feature-image"><img src="{{ '/assets/images/identity.svg' | relative_url }}" alt="Identity research preview" loading="lazy"></div><div class="feature-icon">AD</div><h3>Identity &amp; AD</h3><p>Active Directory, Kerberos, AD CS, Windows internals and identity attack paths.</p></a>
  <a class="feature-card green" href="#published-research"><div class="feature-image"><img src="{{ '/assets/images/network.svg' | relative_url }}" alt="Network security research preview" loading="lazy"></div><div class="feature-icon">NET</div><h3>Network Security</h3><p>NAC, segmentation, Zero Trust, network architecture and detection engineering.</p></a>
  <a class="feature-card purple" href="#published-research"><div class="feature-image"><img src="{{ '/assets/images/project.svg' | relative_url }}" alt="DevSecOps research preview" loading="lazy"></div><div class="feature-icon">DS</div><h3>DevSecOps</h3><p>Application security, CI/CD security, supply-chain security and security automation.</p></a>

</div>

<h2 class="subheading" id="published-research">Published research</h2>
<div class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "Research" %}
  <a class="list-card" href="{{ post.url | relative_url }}"><div class="list-thumb"><img src="{{ '/assets/images/research.svg' | relative_url }}" alt="Research preview" loading="lazy"></div><div class="list-copy"><div class="post-category">Research</div><h2>{{ post.title }}</h2><p>{{ post.description }}</p></div><span class="arrow-link" aria-hidden="true">→</span></a>
  {% endif %}
{% endfor %}
</div>
