{% capture stuff %}

### Welcome!  
I am a Ph.D candidate in Robotics and AI at University of California, Berkeley since 2011.  
My home department is [Operations Research][ieor], and I am also pursuing an MS in [Computer Science][cs].   

I am working at the [Berkeley Lab for Automation Science and Engineering][autolab] at UC Berkeley where I am being advised by [Ken Goldberg][kg].  
I also work closely with [Pieter Abbeel][pa] and [Alper Atamturk][alper].
Complete list of [collaborators]({{ site.baseurl }}/people/).

*Research Interests*: Optimization (Mixed Integer, Non linear), Machine Learning, Artificial Intelligence in Robotics & Healthcare Applications. 

Primarily, I work in radiation treatment planning and delivery for cancer. We design optimization algorithms for creating clinically safe radiation dose distributions and devise novel delivery methods leveraging Custom 3D printed implants and medical robotics.

One of my long term goal would be to make robots as easy to program and operate as a car. And, I am working on skill learning with applications to surgical robotics.

{% include peoples_urls.md %}
{% endcapture %}

<div class="projects">
{{ stuff | markdownify }}
</div>
