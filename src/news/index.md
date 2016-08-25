---
title: News
layout: default
---

## Research Coverage in Media and Press

<ul class="inset">
  <li>
    <a href="http://spectrum.ieee.org/robotics/medical-robots/would-you-trust-a-robot-surgeon-to-operate-on-you"><img src="{{ site.baseurl }}/news/press/ieee-spectrum-logo.jpg" alt="IEEE Spectrum" width="200" height="50" /></a>
  </li>

  <li>
    <a href="http://www.rollingstone.com/culture/features/inside-the-artificial-intelligence-revolution-a-special-report-pt-2-20160309"><img src="{{ site.baseurl }}/news/press/rolling-stone-logo.png" alt="IEEE Spectrum" width="200" height="60" /></a>
  </li>

  <li>
    <a href="https://www.youtube.com/watch?v=_DA8mf4Aj8A&feature=youtu.be"><img src="{{ site.baseurl }}/news/press/cnet_logo.jpg" alt="IEEE Spectrum" width="200" height="60" /></a>
  </li>

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
