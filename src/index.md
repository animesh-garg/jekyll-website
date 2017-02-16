---
layout: default
title: Home
pagination: true
---

{% include short_bio.md %}
<span class="hide-on-desktop">
	Contact me:
		<a href="&#109;&#097;&#105;&#108;&#116;&#111;:&#097;&#110;&#105;&#109;&#101;&#115;&#104;&#046;&#103;&#097;&#114;&#103;&#064;&#098;&#101;&#114;&#107;&#101;&#108;&#101;&#121;&#046;&#101;&#100;&#117;"><span style="font-size: 98%">garg@cs<strong>·</strong>stanford<strong>·</strong>edu </span></a>
	<br>
	Find me on:
		<a href="https://github.com/animesh-garg"><i class="fa fa-git fa-lg"></i></a> &nbsp;  <strong> · </strong> &nbsp; 
		<a href="https://twitter.com/animesh_garg"><i class="fa fa-twitter fa-lg"></i></a> &nbsp;  <strong> · </strong> &nbsp; 
		<a href="http://www.linkedin.com/in/animeshgarg"><i class="fa fa-linkedin fa-lg"></i></a> &nbsp; <strong> · </strong> &nbsp; 
		<a href="https://www.facebook.com/garganimesh"><i class="fa fa-facebook-square fa-lg"></i></a>      
</span>

--- 

### Recent [**News**]({{ site.baseurl }}/news/)
<ul class="inset">
{% for post in site.categories.news limit:4 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>

---  

### Recent [**Research**]({{ site.baseurl }}/research/)  
{% include recent_projects.md %}  
---  

### Coverage in [**Media/Press**]({{ site.baseurl }}/news/#research-coverage-in-media-and-press)
{% include press_coverage.md %}  
---

### Recent [**Blog**]({{ site.baseurl }}/articles/)
<ul class="inset">
{% for post in site.categories.articles limit:2 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>
<!--
* [**Customized Treatment methods for HDR Brachytherapy**]({{ site.baseurl}}/research/Brachytherapy.html)  

<div align="center">
<img src="{{ site.baseurl}}/research/images/panel-Labelled-v3.png" alt="custom workflow" style="width: 80%" align="middle" />
</div>

* [**Learning from Expert Demonstrations for Surgical Robotics**]({{ site.baseurl}}/research/Robotics.html)  

<div align="center">
<img src="{{ site.baseurl}}/research/images/circleProcess.jpg" alt="dvrk-lbo" style="width: 80%" align="middle" />
</div>  
<!--
<ul class="inset">
{% for post in site.categories.research limit:3  %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.title | markdownify }}</strong></a> <br>
{{ post.excerpt | markdownify }}
  </li>
{% endfor %}
</ul>
-->  




<!--
<div class="footer">
&copy; Last updated on: {{ site.time | date_to_string }}
</div>

<div id="footer">
<br>
Template by <a href="http://sergeykarayev.com/">Sergey Karayev</a> | Adapted by Animesh Garg
</div>
-->
