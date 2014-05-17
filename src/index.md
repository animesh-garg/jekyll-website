---
layout: default
title: Home
script: home.js
pagination: true
---
{% include short_bio.md %}

---

### Recent [Research]({{ site.baseurl }}/work/projects/)
{% include recent_projects.md %}

<ul class="inset">
{% for post in site.categories.projects limit:3  %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.title | markdownify }}</strong></a> <br>
{{ post.excerpt | markdownify }}
  </li>
{% endfor %}
</ul>
---

### Recent [Articles]({{ site.baseurl }}/articles/)
<ul class="inset">
{% for post in site.categories.articles limit:2 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>

---

### Recent [News]({{ site.baseurl }}/news/)
<ul class="inset">
{% for post in site.categories.news limit:5 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>


<div class="footer">
&copy; Last updated on: {{ site.time | date_to_string }}
</div>
