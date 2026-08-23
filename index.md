---
layout: default
title: Home
description: "Security Research & Engineering"
---

<section class="hero" aria-labelledby="hero-title">
  <div class="hero-copy reveal">
    <div class="eyebrow"><span class="status-dot"></span> SECURITY ENGINEER &amp; RESEARCHER</div>
    <h1 id="hero-title">Security Research.<br>Real World <span>Impact.</span></h1>
    <p class="hero-text">
      I research, build and break security systems to understand how they fail,
      how they can be abused, and how to build stronger defenses.
    </p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/blog/' | relative_url }}">Read Latest Posts <span>→</span></a>
      <a class="btn btn-secondary" href="{{ '/projects/' | relative_url }}">View My Work <span>↗</span></a>
    </div>
    <div class="social-row" aria-label="Social links">
      <a href="https://github.com/mrk-77" target="_blank" rel="noopener noreferrer" aria-label="GitHub">GH</a>
      <a href="{{ '/about/' | relative_url }}" aria-label="About">ME</a>
      <a href="{{ '/feed.xml' | relative_url }}" aria-label="RSS feed">RSS</a>
    </div>
  </div>

  <div class="terminal-card reveal reveal-delay" aria-label="Security engineering profile">
    <div class="terminal-top">
      <div class="terminal-dots" aria-hidden="true"><i></i><i></i><i></i></div>
      <span>mreza@dev:~</span>
    </div>
    <div class="terminal-body">
      <p><b>&gt; whoami</b></p>
      <p>Security Engineer | Red Teamer | Researcher</p>
      <p><b>&gt; focus</b></p>
      <p>AI Security • Active Directory • Red Teaming</p>
      <p>Windows Internals • Network Security • DevSecOps</p>
      <p>Detection Engineering • Threat Modeling</p>
      <p><b>&gt; mission</b></p>
      <p>Find the weaknesses so others<br>don't have to.</p>
      <p class="cursor" aria-hidden="true">&gt; <span>_</span></p>
    </div>
  </div>
</section>

<section class="section" aria-labelledby="latest-title">
  <div class="section-heading">
    <div>
      <div class="section-kicker"><span></span> Latest Articles</div>
      <h2 id="latest-title">Recent research &amp; technical writing</h2>
    </div>
    <a class="section-link" href="{{ '/blog/' | relative_url }}">View all posts →</a>
  </div>

  <div class="post-grid">
    {% for post in site.posts limit:4 %}
      <a class="post-card reveal" href="{{ post.url | relative_url }}">
        <div class="post-thumb"><img src="{{ '/assets/images/security.svg' | relative_url }}" alt="Security article preview" loading="lazy"></div>
        <div class="post-category">{{ post.categories | first | default: "Security" }}</div>
        <h3>{{ post.title }}</h3>
        <p>{{ post.description | default: post.excerpt | strip_html | truncate: 135 }}</p>
        <div class="post-meta">
          <span>{{ post.date | date: "%b %d, %Y" }}</span>
          <span>•</span>
          <span>{{ post.read_time | default: "8 min" }} read</span>
          <span aria-hidden="true">→</span>
        </div>
      </a>
    {% endfor %}
  </div>
</section>

<section class="section section-tight" aria-label="Explore">
  <div class="feature-grid">
    <a class="feature-card cyan reveal" href="{{ '/research/' | relative_url }}">
      <div class="feature-image"><img src="{{ '/assets/images/research.svg' | relative_url }}" alt="Research preview" loading="lazy"></div><div class="feature-icon">AI</div>
      <h3>Research</h3>
      <p>Deep technical work on modern attack surfaces, identity and defensive engineering.</p>
      <span>Explore →</span>
    </a>
    <a class="feature-card red reveal" href="{{ '/writeups/' | relative_url }}">
      <div class="feature-image"><img src="{{ '/assets/images/writeup.svg' | relative_url }}" alt="Writeups preview" loading="lazy"></div><div class="feature-icon">RT</div>
      <h3>Writeups</h3>
      <p>Red team engagements, CTFs, labs and detection-aware security breakdowns.</p>
      <span>Explore →</span>
    </a>
    <a class="feature-card green reveal" href="{{ '/projects/' | relative_url }}">
      <div class="feature-image"><img src="{{ '/assets/images/project.svg' | relative_url }}" alt="Projects preview" loading="lazy"></div><div class="feature-icon">&lt;/&gt;</div>
      <h3>Projects</h3>
      <p>Security tooling, automation, infrastructure labs and experimental engineering.</p>
      <span>Explore →</span>
    </a>
    <a class="feature-card purple reveal" href="{{ '/resources/' | relative_url }}">
      <div class="feature-image"><img src="{{ '/assets/images/resource.svg' | relative_url }}" alt="Resources preview" loading="lazy"></div><div class="feature-icon">REF</div>
      <h3>Resources</h3>
      <p>Frameworks, books, roadmaps, tools and practical security references.</p>
      <span>Explore →</span>
    </a>
  </div>
</section>
