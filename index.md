---
layout: default
title: Home
description: "Security Research & Engineering"
---

<section class="hero">
  <div class="hero-copy">
    <div class="eyebrow"><span class="status-dot"></span> SECURITY ENGINEER &amp; RESEARCHER</div>
    <h1>Security Research.<br>Real World <span>Impact.</span></h1>
    <p class="hero-text">
      I research, build and break security systems to help organizations
      build a more secure world.
    </p>
    <div class="hero-actions">
      <a class="btn btn-primary" href="{{ '/blog/' | relative_url }}">Read Latest Posts <span>→</span></a>
      <a class="btn btn-secondary" href="{{ '/projects/' | relative_url }}">View My Work <span>↗</span></a>
    </div>
    <div class="social-row">
      <a href="https://github.com/USERNAME" target="_blank" rel="noopener" aria-label="GitHub">GH</a>
      <a href="#" aria-label="LinkedIn">in</a>
      <a href="#" aria-label="X">X</a>
      <a href="mailto:YOUR_EMAIL" aria-label="Email">@</a>
      <a href="{{ '/feed.xml' | relative_url }}" aria-label="RSS">RSS</a>
    </div>
  </div>

  <div class="terminal-card">
    <div class="terminal-top">
      <div class="terminal-dots"><i></i><i></i><i></i></div>
      <span>mreza@dev:~</span>
    </div>
    <div class="terminal-body">
      <p><b>&gt; whoami</b></p>
      <p>Security Engineer | Red Teamer | Researcher</p>
      <p><b>&gt; skills</b></p>
      <p>AI Security&nbsp; • &nbsp;Active Directory&nbsp; • &nbsp;Red Teaming</p>
      <p>Windows Internals&nbsp; • &nbsp;Network Security&nbsp; • &nbsp;DevSecOps</p>
      <p>Detection Engineering&nbsp; • &nbsp;Threat Modeling</p>
      <p><b>&gt; mission</b></p>
      <p>Find the weaknesses so others<br>don’t have to.</p>
      <p class="cursor">&gt; <span>_</span></p>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <div>
      <div class="section-kicker"><span></span> Latest Articles</div>
      <h2>Recent research &amp; technical writing</h2>
    </div>
    <a class="section-link" href="{{ '/blog/' | relative_url }}">View all posts →</a>
  </div>

  <div class="post-grid">
    {% for post in site.posts limit:4 %}
      <article class="post-card">
        <div class="post-category">{{ post.categories | first | default: "Security" }}</div>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.description | default: post.excerpt | strip_html | truncate: 135 }}</p>
        <div class="post-meta">
          <span>{{ post.date | date: "%b %d, %Y" }}</span>
          <span>•</span>
          <span>{{ post.read_time | default: "8 min" }} read</span>
          <a href="{{ post.url | relative_url }}">→</a>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section section-tight">
  <div class="feature-grid">
    <a class="feature-card cyan" href="{{ '/research/' | relative_url }}">
      <div class="feature-icon">◫</div>
      <h3>Research</h3>
      <p>In-depth security research on modern attack surfaces and defensive technologies.</p>
      <span>Explore →</span>
    </a>
    <a class="feature-card red" href="{{ '/writeups/' | relative_url }}">
      <div class="feature-icon">◎</div>
      <h3>Writeups</h3>
      <p>Red team engagements, CTFs, labs, and technical security breakdowns.</p>
      <span>Explore →</span>
    </a>
    <a class="feature-card green" href="{{ '/projects/' | relative_url }}">
      <div class="feature-icon">&lt;/&gt;</div>
      <h3>Projects</h3>
      <p>Open-source security tools, automation, labs, and experimental projects.</p>
      <span>Explore →</span>
    </a>
    <a class="feature-card purple" href="{{ '/resources/' | relative_url }}">
      <div class="feature-icon">▤</div>
      <h3>Resources</h3>
      <p>Books, roadmaps, cheatsheets, tools, and useful security references.</p>
      <span>Explore →</span>
    </a>
  </div>
</section>
