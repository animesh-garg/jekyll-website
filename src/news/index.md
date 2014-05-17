---
title: News
layout: default
---

## News

<ul class="inset">
{% for post in site.categories.news %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>



<div class="footer">
&copy; Last updated on: {{ site.time | date_to_string }}
</div>
