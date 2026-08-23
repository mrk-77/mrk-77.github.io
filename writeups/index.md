---
layout: page
title: Writeups
description: "Red team engagements, CTFs, labs and technical security breakdowns."
permalink: /writeups/
---

<div class="feature-grid">
  <div class="feature-card red"><div class="feature-icon">◎</div><h3>Red Team</h3><p>Adversary simulation, attack paths, tradecraft and detection-aware operations.</p></div>
  <div class="feature-card purple"><div class="feature-icon">CTF</div><h3>CTF</h3><p>Challenges, exploitation paths and lessons learned.</p></div>
  <div class="feature-card cyan"><div class="feature-icon">LAB</div><h3>Labs</h3><p>Reproducible security labs for learning and research.</p></div>
</div>

<h2 class="subheading">Latest writeups</h2>
<div class="post-list">
{% for post in site.posts %}
  {% if post.categories contains "Writeup" %}
  <article class="list-card"><div><div class="post-category">Writeup</div><h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2><p>{{ post.description }}</p></div><a class="arrow-link" href="{{ post.url | relative_url }}">→</a></article>
  {% endif %}
{% endfor %}
</div>
