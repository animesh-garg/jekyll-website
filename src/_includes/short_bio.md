{% capture stuff %}

### Welcome!  
I am a Ph.D. student in [Operations Research][ieor] and MS student in [Computer Science][cs] at [University of California, Berkeley][ucb]. I am member of the [Automation Lab][autolab] advised by [Ken Goldberg][kg]. I also work closely with [Pieter Abbeel][pa], [Alper Atamturk][alper] and [UCSF](ucsf) Radiation Oncology.  
Complete list of [collaborators]({{ site.baseurl }}/people/).

*Research Interests*: Optimization (Mixed Integer, Non linear), Machine Learning and AI in Robotics & Healthcare Applications.  
I envision enabling ease of robot operation by laymen to an extent where the *user manual* becomes unnecessary. I study integration of algorithms with hardware design for applications in medical robotics and healthcare. I aim to develop models for human-machine collaboration, skill-augmentation, semi-supervised autonomy and healthcare decision support. My work employs and contributes to techniques in non-convex discrete optimization and representation learning. 

{% include peoples_urls.md %}
{% endcapture %}

<div class="projects">
{{ stuff | markdownify }}
</div>
