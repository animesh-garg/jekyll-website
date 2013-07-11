---
title: Research
div_class: projects
layout: default
---

#### Recently completed and in-progress projects.

##### For a list of papers, go to [Publications]({{ site.baseurl }}/work/pubs/) page.
---

{% include recent_projects.md %}

---

<ul class="inset">
{% for post in site.categories.projects %}
  <li> <p>{{ post.content }}</p>
       <br> <a href="{{ site.baseurl }}/{{ post.url }}"><strong>Read More...</strong></a> 
  </li>  <br>
{% endfor %}
</ul>


{% include peoples_urls.md %}

