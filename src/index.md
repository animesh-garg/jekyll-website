---
layout: default
title: Home
script: home.js
---
{% include short_bio.md %}

---

### Recent [projects]({{ site.baseurl }}/work/projects/)
{% include recent_projects.md %}

---

### Recent [notes]({{ site.baseurl }}/work/notes/)
<ul class="inset">
{% for post in site.categories.work %}
  <li>
    <a href="{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>

---

### Recent [fun]({{ site.baseurl }}/fun/)
<ul class="inset">
{% for post in site.categories.fun %}{% include fun_posts.md %}{% endfor %}
</ul>
