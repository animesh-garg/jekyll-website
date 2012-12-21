{% capture stuff %}

#<a href="/" id="home">Animesh Garg</a>

Graduate Student  
[Department of Operations Research][ieor]  
[University of California, Berkeley][ucb]

[Automation Lab][autolab] with [Ken Goldberg][kg] and [Pieter Abbeel][pa].

<p class="no-bottom-margin">Digital facets</p>
* [email](mailto:animesh.garg@berkeley.edu)
* [fb](https://www.facebook.com/garganimesh) &#xb7;
  [twtr](https://twitter.com/Animesh_Garg) &#xb7;
  [lnkd](http://www.linkedin.com/in/animeshgarg)
* [github](https://github.com/animesh-garg)
* [blog](http://animesh-garg.blogspot.com/)

![That is me at Lake Tahoe](/images/me_cover.jpg)  

*Last updated on : {{ site.time | date_to_string }}*
{% include peoples_urls.md %}

{% endcapture %}
{{ stuff | markdownify }}
