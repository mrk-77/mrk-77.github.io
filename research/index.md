---
layout: page
title: Research
description: "Deep technical research into modern attack surfaces, defensive engineering and emerging security technologies."
permalink: /research/
---

<div class="feature-grid">
  <div class="feature-card cyan"><div class="feature-icon">AI</div><h3>AI Security</h3><p>LLM security, RAG, agent security, prompt injection, MCP and AI threat modeling.</p></div>
  <div class="feature-card red"><div class="feature-icon">AD</div><h3>Identity &amp; AD</h3><p>Active Directory, Kerberos, AD CS, Windows internals and identity attack paths.</p></div>
  <div class="feature-card green"><div class="feature-icon">NET</div><h3>Network Security</h3><p>NAC, segmentation, Zero Trust, network architecture and detection engineering.</p></div>
  <div class="feature-card purple"><div class="feature-icon">DS</div><h3>DevSecOps</h3><p>Application security, CI/CD security, supply-chain security and security automation.</p></div>
</div>

<h2 class="subheading">Published research</h2>
<div class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "Research" %}
  <article class="list-card"><div><div class="post-category">Research</div><h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2><p>{{ post.description }}</p></div><a class="arrow-link" href="{{ post.url | relative_url }}">→</a></article>
  {% endif %}
{% endfor %}
</div>
