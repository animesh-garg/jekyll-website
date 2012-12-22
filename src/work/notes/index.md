---
layout: default
title: Notes
---
A place for me to write up reviews of papers and post thoughts.

{% for post in site.categories.work %}
{{ post.date | date_to_string }}
: [{{ post.title }}]({{ site.baseurl }}/{{ post.url }})  
  {{ post.summary }}
{% endfor %}
