---
layout: page
title: Blog
description: "Technical articles on cybersecurity, AI security, Red Teaming, Windows, networking and DevSecOps."
permalink: /blog/
hide_hero: true
---

<div class="page-hero">
  <h1>Blog</h1>
  <small>Security Articles & Insights</small>
  <p>Technical articles on cybersecurity, AI security, Red Teaming, Windows, networking and DevSecOps.</p>
</div>

<div class="post-list">
{% for post in site.posts %}
  <a class="list-card blog-list-card" href="{{ post.url | relative_url }}">
    <div class="list-thumb"><img src="{{ '/assets/images/security.svg' | relative_url }}" alt="{{ post.title }} preview" loading="lazy"></div>
    <div class="list-copy">
      <div class="post-category">{{ post.categories | first | default: "Security" }}</div>
      <h2>{{ post.title }}</h2>
      <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
      <div class="post-meta">
        <span>{{ post.date | date: "%b %d, %Y" }}</span><span>•</span><span>{{ post.read_time | default: "8 min" }} read</span>
      </div>
    </div>
  </a>
{% endfor %}
</div>
