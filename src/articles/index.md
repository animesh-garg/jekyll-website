---
layout: default
title: Articles
---
These articles are my personal views and are meant for me to record my research.

{% for post in site.categories.articles %}
{{ post.date | date_to_string }}: [{{ post.title }}]({{ site.baseurl }}/{{ post.url }})  
  {{ post.excerpt }}
{% endfor %}
