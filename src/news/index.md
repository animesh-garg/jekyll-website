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


<br> 

## Research Coverage in Media and Press

<ul class="inset">
  <li>
  	<a href="http://www.nytimes.com/2014/10/23/science/new-research-center-aims-to-develop-second-generation-of-surgical-robots.html"><img src="{{ site.baseurl }}/news/press/nyt-logo.png" alt="New York Times" width="200" height="35" /></a>
  </li>

  <li>
  	<a href="http://www.medgadget.com/2014/10/berkeleys-autonomous-surgical-robotic-system.html"><img src="{{ site.baseurl }}/news/press/Medgadget_logo.png" alt="Med Gadget" width="200" height="40" /></a>	
  </li>

  <li>
  	<a href="http://www.3dprinterworld.com/article/using-3d-printing-improve-radiation-therapy"><img src="{{ site.baseurl }}/news/press/3dpw.png" alt="3D Printing World" width="200" height="60" /></a>
  </li>

  <li>
  	<a href="http://phys.org/news/2012-12-big-nsf-grant-funds-robots.html"><img src="{{ site.baseurl }}/news/press/physorg_logo.png" alt="Phys.Org" width="200" height="50" /></a>
  </li>

</ul>


<div class="footer">
&copy; Last updated on: {{ site.time | date_to_string }}
</div>
