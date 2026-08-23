---
layout: page
title: Blog
description: "Technical articles on cybersecurity, AI security, Red Teaming, Windows, networking and DevSecOps."
permalink: /blog/
---

<div class="post-list">
{% for post in site.posts %}
  <article class="list-card">
    <div>
      <div class="post-category">{{ post.categories | first | default: "Security" }}</div>
      <h2><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h2>
      <p>{{ post.description | default: post.excerpt | strip_html | truncate: 180 }}</p>
      <div class="post-meta">
        <span>{{ post.date | date: "%b %d, %Y" }}</span><span>•</span><span>{{ post.read_time | default: "8 min" }} read</span>
      </div>
    </div>
    <a class="arrow-link" href="{{ post.url | relative_url }}">→</a>
  </article>
{% endfor %}
</div>
