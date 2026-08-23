---
layout: page
title: Writeups
description: "Red team engagements, CTFs, labs and technical security breakdowns."
permalink: /writeups/
---

<div class="feature-grid">
  <a class="feature-card red" href="#latest-writeups"><div class="feature-image"><img src="{{ '/assets/images/writeup.svg' | relative_url }}" alt="Red team preview" loading="lazy"></div><div class="feature-icon">◎</div><h3>Red Team</h3><p>Adversary simulation, attack paths, tradecraft and detection-aware operations.</p></a>
  <a class="feature-card purple" href="#latest-writeups"><div class="feature-image"><img src="{{ '/assets/images/security.svg' | relative_url }}" alt="CTF preview" loading="lazy"></div><div class="feature-icon">CTF</div><h3>CTF</h3><p>Challenges, exploitation paths and lessons learned.</p></a>
  <a class="feature-card cyan" href="#latest-writeups"><div class="feature-image"><img src="{{ '/assets/images/project.svg' | relative_url }}" alt="Lab preview" loading="lazy"></div><div class="feature-icon">LAB</div><h3>Labs</h3><p>Reproducible security labs for learning and research.</p></a>

</div>

<h2 class="subheading" id="latest-writeups">Latest writeups</h2>
<div class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "Writeup" %}
  <a class="list-card" href="{{ post.url | relative_url }}"><div class="list-thumb"><img src="{{ '/assets/images/writeup.svg' | relative_url }}" alt="Writeup preview" loading="lazy"></div><div class="list-copy"><div class="post-category">Writeup</div><h2>{{ post.title }}</h2><p>{{ post.description }}</p></div><span class="arrow-link" aria-hidden="true">→</span></a>
  {% endif %}
{% endfor %}
</div>
