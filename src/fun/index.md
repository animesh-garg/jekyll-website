---
title: Fun 
layout: default
---

## Fun

I am fond of [epic music](http://www.pandora.com/station/1161310246024124702) and movies apart from Indian versions of classical and pop music.  

I have also been improving my culinary skills ever since I started graduate school and like to try [cooking](http://www.indianfoodforever.com/) often.  

I will try to update this space with pictures from travel and adventure sports as fequently as possible.  


<ul class="inset">
{% for post in site.categories.fun %}
  <li>
    <a href="{{ site.baseurl }}/{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>


This is a map of the places I have lived and visited. Open in a full window [here](http://mapsengine.google.com/map/embed?mid=zzxS_PMZl3GE.kx_1RoqaBkP4).
<iframe src="http://mapsengine.google.com/map/embed?mid=zzxS_PMZl3GE.kx_1RoqaBkP4" width="640" height="480"></iframe>


<div class="footer">
&copy; Last updated on: {{ site.time | date_to_string }}
</div>
