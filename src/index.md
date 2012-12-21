---
layout: default
title: Home
script: home.js
---
{% include short_bio.md %}

---

### Recent [projects](/work/projects/)
{% include recent_projects.md %}

---

### Recent [notes](/work/notes/)
<ul class="inset">
{% for post in site.categories.work %}
  <li>
    <a href="{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>

---

### Recent [fun](/fun/)
<ul class="inset">
{% for post in site.categories.fun %}{% include fun_posts.md %}{% endfor %}
</ul>
