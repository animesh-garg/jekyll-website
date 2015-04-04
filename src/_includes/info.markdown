{% capture stuff %}


# <a href="{{ site.baseurl }}/" id="home">Animesh Garg</a>
<br>
<!--![Animesh with Bay Bridge in background]({{ site.baseurl }}/images/animesh_headshot.png) -->
<!--![Animesh with Bay Bridge in background]({{ site.baseurl }}/images/animesh-gg-sf-nov14-2.jpg)  -->

<img src='{{ site.baseurl }}/images/animesh-feb15.jpg'  onmouseover="this.src='{{ site.baseurl }}/images/animesh-gg-sf-nov14-3.jpg';" onmouseout="this.src='{{ site.baseurl }}/images/animesh-feb15.jpg';" />



Ph.D. Candidate  
[Automation Lab][autolab]  
[Operations Research][ieor]   
[Computer Science][cs]  
[UC, Berkeley][ucb]  


Email me: [<i class="fa fa-envelope fa-lg"></i>](javascript:toggleblock('emailAdd')) 
<i id = "emailAdd"> [animesh**&#xb7;**garg@berkeley**&#xb7;**edu](mailto:animesh.garg@berkeley.edu) </i>
<script xml:space="preserve" language="JavaScript">
			hideblock('emailAdd');
</script>
<!--[<i class="fa fa-envelope fa-lg"></i>](): [animesh**&#xb7;**garg@berkeley**&#xb7;**edu](mailto:animesh.garg@berkeley.edu)-->


Find me on:  
<!--[**Blog**](http://animesh-garg.blogspot.com/)   **&#xb7;** -->
[<i class="fa fa-git fa-lg"></i>](https://github.com/animesh-garg) **&#xb7;** 
[<i class="fa fa-twitter fa-lg"></i>](https://twitter.com/Animesh_Garg) **&#xb7;**
[<i class="fa fa-linkedin fa-lg"></i>](http://www.linkedin.com/in/animeshgarg) **&#xb7;**
[<i class="fa fa-facebook-square fa-lg"></i>](https://www.facebook.com/garganimesh)    

<!--
<a class="twitter-timeline" data-dnt="true" href="https://twitter.com/Animesh_Garg" data-widget-id="536483931428618240">Tweets by @Animesh_Garg</a>
<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
-->
{% include peoples_urls.md %}

{% endcapture %}
{{ stuff | markdownify }}
