---
title: Research
div_class: projects
layout: default
---


I am interested problems at the intersection of optimization, machine learning and robotics. The goal of my work is analysis of decision and design problems in human-machine collaboration and skill-augmentation, with a focus on healthcare.
I study integration of algorithms with hardware design for applications in medical robotics and healthcare.  My work employs and contributes to techniques in non-convex discrete optimization and representation learning.  Inference and optimization in healthcare are often hard-to-solve multi-stage stochastic models, and I focus on efficient reformulations and heuristics with guarantees. 

Specifically, I have studied algorithmically grounded solutions for integration of autonomy in internal radiotherapy for cancer and subtask automation in Robot-assisted minimally invasive surgery (RMIS). 

---

###### Learning & Automation in Surgical Subtasks

Currently, robot-assisted minimally invasive surgery (RMIS) devices are controlled by surgeons in a local tele-operation mode. Procedures often last multiple hours and highly depend on surgeon skill. Autonomy of surgical subtasks has the potential to assist surgeons, reduce fatigue, and facilitate supervised autonomy for tele-surgery.  We consider learning task representations as **milestones** from demonstrations and use multimodal sensory input for classification of success criterion. The goal of this work is semi-supervised learning of *necessary* conditions of success, eventually allowing demonstrations to be **Actor Agnostic**.

![Palpation Probe]({{ site.baseurl }}/research/images/ProbeSkinDVRK-01.jpg)
: **Disposable Sensing Probes for Minimally Invasive Surgery**  
We proposed a Disposable Haptic Palpation Probe for Locating Subcutaneous Blood Vessels in Robot-Assisted Minimally Invasive Surgery.  
\[[**PDF**]({{ site.baseurl }}/research/)\] - *under review*
<!--\[[**PDF**]({{ site.baseurl }}/files/mckinley-disposable-2015.pdf)\]-->

![DVRK]({{ site.baseurl }}/research/images/tasks-dvrk.jpg)
: **Learning by Observation for Surgical Subtasks**  
We proposed a [Learning by Observation]({{ site.baseurl }}/files/murali-LBO-2015.pdf) algorithm for surgical subtasks demosttrated with multilateral Cutting of 3D Viscoelastic and 2D Orthotropic Tissue Phantoms.  
\[[**PDF**]({{ site.baseurl }}/files/murali-LBO-2015.pdf)\] \[[**Video**](http://www.youtube.com/watch?v=beVWB6NtAaA)\]

---

###### Radiation Therapy for Cancer: Planning and Delivery

High Dose Rate Brachytherapy (HDR-BT) is an internal radiation therapy and is prevalent for cancer treatment in many body sites such as mouth, breast and prostate. It involves radioactive sources placed temporarily proximal to or within tumors. 
Current methods for intracavitary and interstitial HDR-BT use generic templates which result in inadequate dose coverage and healthy organ puncture, respectively. We present novel patient specific **3D-printed implants** and **needle guides** for respective modes; we also evaluate **robot-assisted needle implants** for interstitial HDR-BT. Further, we pose the treatment planning for problem as a discrete conic optimization to achieve optimality guarantees.

![3dImplants]({{ site.baseurl }}/research/images/research-anatomy-implant.png)
: **3D Printed Implants for Intracavitary Brachytherapy**  
We propose a new approach that builds on recent results in 3D printing and steerable needle motion planning to create customized implants containing customized curvature-constrained internal channels that fit securely, minimize air gaps, and precisely
guide radioactive sources through printed channels.  
\[[**PDF**]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)\]

![material-Evaluation]({{ site.baseurl }}/research/images/matEval-jacmp.png)
: **Material Evaluation for 3D Printed Implants in GYN HDR-BT**  
The purpose of this study was to evaluate the radiation attenuation properties of PC-ISO, a commercially available, biocompatible, sterilizable 3D printing material, and its suitability for customized, single-use gynecologic (GYN) brachytherapy applicators that have the potential for accurate guiding of seeds through linear and curved internal channels.  
\[[**PDF**]({{ site.baseurl }}/files/JACMP-published-version.pdf)\]

![Acubot-Brachy]({{ site.baseurl }}/research/images/research-AcubotPlusImplant.png)
: **Robot-Guided Needle Insertion for HDR Brachytherapy**  
We incorporated human-centered automation to reduce side effects from HDR-BT in prostate cancer. The aim is to efficiently deliver radiation to the prostate while minimizing trauma to sensitive structures such as the penile bulb. We modify the Acubot-RND 7-axis robot to guide needles into desired skew-line geometric arrangements algorithmically calculated with a combination of needle planning and inverse dose planning algotihms.  
\[[**PDF**]({{ site.baseurl }}/files/garg-brachy-case-2012.pdf)\] \[[**Extended Version**]({{ site.baseurl }}/files/garg-brachy-tase-2013.pdf)\] \[[**Video**](https://youtu.be/Kk_wHiu8nGg)\] \[[**Talk**](https://youtu.be/TGEIRpbuS_I)\]

![reachability]({{ site.baseurl }}/research/images/anatomyExample-noAxesLabel.png)
: **Reachability Analysis for Needle Planning in Brachytherapy**  
We propose a new approach that builds on recent results in 3D printing and steerable needle motion planning to create customized implants containing customized curvature-constrained internal channels that fit securely, minimize air gaps, and precisely
guide radioactive sources through printed channels.  
\[[**PDF**]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)\]

<!--![externalImplants]({{ site.baseurl }}/research/images/3DP-ExternalTemplate-1.jpg)-->
![externalImplants]({{ site.baseurl }}/research/images/comingSoon.jpg)
: **3D Printed Guides for Prostate Brachytherapy**  
We propose the use of patient specific custom needle guides for needle configuration implant in Prostate HDR-BT. This work builds upon the robot-guided needle implants, and attempts to evaluate a low-cost yet effective method for achieving clinical objectives.  
\[[**PDF**-soon!]({{ site.baseurl }}/research/)\]  

---

{% include peoples_urls.md %}
<div id="footer">
<b>Copyright notice</b>: This material is presented to ensure timely dissemination of scholarly and technical work. Copyright and all rights therein are retained by authors or by other copyright holders. All persons copying this information are expected to adhere to the terms and constraints invoked by each author's copyright. These works may not be reposted without the explicit permission of the copyright holder.
</div>
<!--{% include recent_projects.md %}
##### For a list of papers, go to [Publications]({{ site.baseurl }}/publications.html) page.  
--- 
-->
<!-- 
<ul class="inset">
{% for post in site.categories.research %}
  <li> 
    <a href="{{ site.baseurl }}{{ post.url }}"><strong>{{ post.title | markdownify }}</strong></a>
    <br>
  	<p>{{ post.excerpt }}</p>
   	<br> <a href="{{ site.baseurl }}{{ post.url }}"><strong>Read More...</strong></a>
  </li>  <br>
{% endfor %}
</ul>
-->
