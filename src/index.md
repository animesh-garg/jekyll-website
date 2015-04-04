---
layout: default
title: Home
script: home.js
pagination: true
---
{% include short_bio.md %}

---

### Recent [Research]({{ site.baseurl }}/research/)
{% include recent_projects.md %}

* [**Customized Treatment methods for HDR Brachytherapy**]({{ site.baseurl}}/research/Brachytherapy.html)  

<div align="center">
<img src="{{ site.baseurl}}/research/images/panel-Labelled-v3.png" alt="custom workflow" style="width: 480px" align="middle" />
</div>

* [**Learning from Expert Demonstrations for Surgical Robotics**]({{ site.baseurl}}/research/Robotics.html)  

<div align="center">
<img src="{{ site.baseurl}}/research/images/tasks-dvrk.jpg" alt="dvrk-lbo" style="width: 480px" align="middle" />
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

---

### Recent [News]({{ site.baseurl }}/news/)
<ul class="inset">
{% for post in site.categories.news limit:3 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>

---

### Recent [Blog]({{ site.baseurl }}/articles/)
<ul class="inset">
{% for post in site.categories.articles limit:2 %}
  <li>
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.date | date_to_string }}</strong></a>: {{ post.title | markdownify }}
  </li>
{% endfor %}
</ul>



<!--
<div class="footer">
&copy; Last updated on: {{ site.time | date_to_string }}
</div>

<div id="footer">
<br>
Template by <a href="http://sergeykarayev.com/">Sergey Karayev</a> | Adapted by Animesh Garg
</div>
-->
