---
title: Research
div_class: projects
layout: default
---

<br>
## Generalizable Imitation

My research vision is to enable robotic systems that: learn hierarchical control tasks by watching humans, seamlessly interact and collaborate with humans, and learn to improve performance and acquire new skills through self-practice. And my approach to 
to these challenges develops algorithmic methods to enable efficient robot learning for long-term sequential tasks through [**Generalizable Imitation**]().

I bring together expertise from areas of optimization & control, machine learning and mechanical design. My work contributes to techniques in *deep reinforcement learning*, *video representation learning*, and *robust control* for robotics applications in medicine and manufacturing.

My work can broadly be divided into three topics as follows: 
- [Generalization in Robotics Tasks]({{ site.baseurl }}/research/#generalization-in-robotics-tasks)  
- [Skill Learning in Surgical Robotics]({{ site.baseurl }}/research/#skill-learning-in-surgical-subtasks)  
- [Personalization in Radiation Therapy]({{ site.baseurl }}/research/#radiation-therapy-for-cancer-planning-and-delivery)

<!-- My research spans \textbf{Operations Research}, \textbf{Computer Science} and \textbf{Design}, combining theory with experiments.
 The goal of my work is analysis of decision and design problems in human-machine collaboration and skill-augmentation, with a focus on healthcare.
I study integration of algorithms with hardware design for applications in medical robotics and healthcare.   -->

<!-- Specifically, I have studied algorithmically grounded solutions for integration of autonomy in internal radiotherapy for cancer and subtask automation in Robot-assisted minimally invasive surgery (RMIS).  -->

---

###### Generalization in Robotics Tasks

A skill should be reusable across tasks and objects to avoid constant relearning.
It is not enough to learn a door-opening skill for one particular door, and then have to re-learn that
skill for a new door, or even to open a fridge. Consequently, generalization across task families is an
essential aspect of effective robot learning.

![NTP]({{ 'ntp-icra18.jpg' | prepend: '/research/images/' | prepend: site.baseurl }})
:   **[Neural Task Programming](https://stanfordvl.github.io/ntp/)**  
    We present a method that learns to generalize across hierarchical tasks with a single example. It bridges the idea of few-shot learning from demonstration and neural program induction.  
    \[[**ICRA18**](https://stanfordvl.github.io/ntp/)\] \[[**Video**](https://www.youtube.com/watch?v=THq7I7C5rkk&feature=youtu.be)\] \[[ArXiv 1710.01813](https://arxiv.org/abs/1710.01813)\]

![Adapt]({{ 'adapt-isrr17.png' | prepend: '/research/images/' | prepend: site.baseurl  }})
:   **[Adaptive Policy Transfer for Stochastic Dynamical Systems](https://arxiv.org/abs/1707.04674)**  
    We introduce the AdaPT algorithm that achieves provably safe and robust, dynamically-feasible zero-shot transfer of RL-policies to new domains with dynamics error. ADAPT combines the strengths of offline policy learning in a black-box source simulator with online tube-based MPC to attenuate bounded model mismatch between the source and target dynamics.  
    \[[**ISRR17**](https://parasol.tamu.edu/isrr/isrr2017/)\] \[[arXiv 1707.04674](https://arxiv.org/abs/1707.04674)\]   

![ARPL]({{ 'arpl-iros17.png' | prepend: '/research/images/' | prepend: site.baseurl }})
:  **[Robust Policy Learning and Transfer]()**  
    We investigate direct sim2real policy transfer for deformable pattern cutting. We also develop a method to leverage adversarial perturbations in policy gradient method for robustness to environment perturbations at test time.  
    \[**[ICRA17]({{ site.baseurl }}/files/cutting-icra17.pdf)**\] \[[**Cutting-Video**](https://www.youtube.com/watch?v=l6gQg2VbGcc)\]   \[**[IROS17]({{ site.baseurl }}/files/arpl_mzg_iros17.pdf)**\] \[[**ARPL-Video**](https://www.youtube.com/watch?v=yZ-gSsbbzh0)\]

![WSGAN]({{ 'wsgan-iccv17-v2.png' | prepend: '/research/images/' | prepend: site.baseurl }})
:   **[3D Reconstruction from Images]()**  
    We present two different methods of shape reconstruction from images: one uses weakly supervised generative models and the other uses a deformation field prediction. The deformation method has also been used for grasp transfer in novel objects.   
    \[[**3DV 17:arXiv**](https://arxiv.org/abs/1705.10904)\] \[[**DeformNet**](https://deformnet-site.github.io/DeformNet-website/), [**WACV18:arXiv**](https://arxiv.org/abs/1708.04672)\] \[[**CoRL17:Grasping**](https://deformnet-site.github.io/DeformNet-website/files/corl.pdf)\]  

<!-- 
![Deformnet]({{ 'deformnet-animation-plane.gif' | prepend: '/research/images/' | prepend: site.baseurl }})
:   **[DeformNet: Free-Form Deformation Network for 3D Shape Reconstruction from a Single Image](https://arxiv.org/abs/1708.04672)**  
    Andrey Kuryenkov\*, Jingwei Ji\*, **Animesh Garg**, Viraj Mehta, JunYoung Gwak, Chris Choy, Silvio Savarese (\* equal contribution).  
    *IEEE Winter Conf. on Applications of Computer Vision (WACV) 2018*  
    \[[ArXiv 1708.04672](https://arxiv.org/abs/1708.04672)\] \[[Project Webpage](https://deformnet-site.github.io/DeformNet-website/)\]  
    An application to grasp transfer appeared at [CoRL 2017](https://deformnet-site.github.io/DeformNet-website/files/corl.pdf)
 -->

---

###### Skill Learning in Surgical Subtasks

Robot Assisted Minimally Invasive Surgery (RMIS) was used in manual teleoperation mode in over *570,000* procedures worldwide in 2014 with *3000* Da Vinci systems. However, RMIS procedures are tedious and depend highly on surgeon skill. Autonomy of surgical subtasks has the potential to assist surgeons, reduce fatigue, and enhance manual telesurgery. Moreover, the growing corpus of surgical data can enable *data-driven learning for automation*. I research learning from expert demonstrations in surgery with unique challenges such as specular workspace, constrained dexterity, and highly noisy datasets.

<!-- Currently, robot-assisted minimally invasive surgery (RMIS) devices are controlled by surgeons in a local tele-operation mode. Procedures often last multiple hours and highly depend on surgeon skill. Autonomy of surgical subtasks has the potential to assist surgeons, reduce fatigue, and facilitate supervised autonomy for tele-surgery.  We consider learning task representations as **milestones** from demonstrations and use multimodal sensory input for classification of success criterion. The goal of this work is semi-supervised learning of *necessary* conditions of success, eventually allowing demonstrations to be **Actor Agnostic**. -->


<!-- #### Sub-Task Learning -->

![swirl-ijrr]({{ 'swirl-ijrr17.png' | prepend: '/research/images/' | prepend: site.baseurl  }})
:   **[Sequential Windowed Inverse Reinforcement Learning]({{ site.baseurl }}/files/swirl-isrr16.pdf)**  
    This work extends the idea of task structure learning to policy learning. This work evaluates policy learning on both simulated and physical benchmark tasks.  
    \[[**WAFR 2016**]({{ site.baseurl }}/files/swirl-isrr16.pdf)\] \[[**IJRR 2018**](http://goldberg.berkeley.edu/pubs/krishnan-ijrr-submission-final.pdf)\]
    \[[**Talk Video**](https://www.youtube.com/watch?v=r0RzS2DWb8M&index=4&list=PLYTiwx6hV33siv3qb--lW1Sw5BEMgGtR1)\]       

<!-- 
[![TSC-DL]({{ site.baseurl }}/research/images/tsc-teaser.png)](http://berkeleyautomation.github.io/tsc-dl/files/mgk-icra16-tscdl.pdf)
: **[TSC-DL: Segmentation with Deep Learning](http://berkeleyautomation.github.io/tsc-dl/)**  
 A new unsupervised algorithm that leverages video & kinematic data for task-level segmentation using pretrained CNNs to identify spatio-temporal task segmentation.  
\[[**ICRA 2016**](http://berkeleyautomation.github.io/tsc-dl/files/mgk-icra16-tscdl.pdf)\] \[[**Tutorial-Video**](https://www.youtube.com/watch?v=L561cJhs7DLE)\]  -->

![TSC]({{ 'tsc-isrr15.png' | prepend: '/research/images/' | prepend: site.baseurl  }})
:   **[Transition State Clustering]({{ site.baseurl }}/files/garg-tsc-ijrr17.pdf)**  
We proposed an unsupervised algorithm for recovering task structure from demonstration data and autonomously perform semantic segmentation. It works with both kinematics and video data using pre-trained CNNs.   
\[[**ISRR 2015**]({{ site.baseurl }}/files/ISRR2015_Krishnan-Garg_TSC.pdf)\]  \[[**IJRR 2017** ]({{ site.baseurl }}/files/garg-tsc-ijrr17.pdf)\] \[[**ICRA 2016**](http://berkeleyautomation.github.io/tsc-dl/files/mgk-icra16-tscdl.pdf)\] \[[**Tutorial-Video**](https://www.youtube.com/watch?v=L561cJhs7DLE)\] 

![GPAS]({{ 'gpas-case16.png' | prepend: '/research/images/' | prepend: site.baseurl }})
:   **[Tumor Localization using Automated Palpation](http://berkeleyautomation.github.io/gpas/files/garg-case16-gpas.pdf)**  
    We propose a Gaussian Process based Adaptive Sampling method that improves sample complexity level set discovery in tumor localization.  
    \[[**CASE16**](http://berkeleyautomation.github.io/gpas/files/garg-case16-gpas.pdf)\] \[[**Project Page**](http://berkeleyautomation.github.io/gpas/)\]  


<!-- #### Sub-Task Automation -->

[![surgical-suturing]({{ site.baseurl }}/research/images/NeedleStitchingFaded2-01.jpg)](http://berkeleyautomation.github.io/amts/)
: **[Autonomous Multi-Throw Suturing](http://berkeleyautomation.github.io/amts/)**  
We present an optimization framework and a novel mechanical needle guide design to perform supervised automation of multi-throw suturing.  
\[[**ICRA16**](http://berkeleyautomation.github.io/amts/)\] \[[**Suturing-Video**](https://www.youtube.com/watch?v=z1ehShXFToc)\] 

[![surgical-tools]({{ site.baseurl }}/research/images/surgical-tools.jpg)](http://berkeleyautomation.github.io/surgical-tools/)
: **[Autonomous Tumor Localization & Resection](http://berkeleyautomation.github.io/surgical-tools/)**  
We present two designs for surgical automation: a low-cost end-effector mount and a fluid injection system.  We automate a 4-step tumor resection procedure to locate and debride a subcutaneous tumor.  
\[[**CASE16**](http://berkeleyautomation.github.io/surgical-tools/)\] \[[**Video**](https://www.youtube.com/watch?v=YiPq9t0tR3U)\] **<font color="red">Best Video Award</font>** 

[![Palpation Probe]({{ site.baseurl }}/research/images/ProbeSkinDVRK-01.jpg)]({{ site.baseurl }}/files/mckinley-disposable-2015.pdf)
: **[Disposable Sensors for Minimally Invasive Surgery]({{ site.baseurl }}/files/mckinley-disposable-2015.pdf)**  
We proposed a Disposable Haptic Palpation Probe for Locating Subcutaneous Blood Vessels in Robot-Assisted Minimally Invasive Surgery.  
\[[**CASE15**]({{ site.baseurl }}/files/mckinley-disposable-2015.pdf)\] **<font color="red">Best Poster/Demo Award.</font>**

[![DVRK]({{ site.baseurl }}/research/images/tasks-dvrk-v2.jpg)](http://www.youtube.com/watch?v=beVWB6NtAaA)
: **[Learning by Observation for Surgical Subtasks]({{ site.baseurl }}/files/murali-LBO-2015.pdf)**  
We proposed a Learning by Observation algorithm for surgical subtasks demosttrated with multilateral Cutting of 3D Viscoelastic and 2D Orthotropic Tissue Phantoms.  
\[[**ICRA15**]({{ site.baseurl }}/files/murali-LBO-2015.pdf)\] \[[**Video**](http://www.youtube.com/watch?v=beVWB6NtAaA)\] \[[**Short Talk**](https://youtu.be/Eye92IXOkxE)\]  
**<font color="red">Best Medical Robotics Paper Award Finalist</font>**  

---

###### Radiation Therapy for Cancer: Planning and Delivery

High Dose Rate Brachytherapy (HDR-BT) is an internal radiation therapy and is used for over *500,000* cancer patients annually in the US. It is prevalent for treatment in many body sites such as mouth, breast and prostate. It involves radioactive sources placed temporarily proximal to or within tumors. 
Current methods for intracavitary and interstitial HDR-BT use generic templates which result in inadequate dose coverage and healthy organ puncture, respectively.  
We present novel patient specific **3D-printed implants** and **needle guides** for respective modes; we also evaluate **robot-assisted needle implants** for interstitial HDR-BT. 
<!-- Further, we pose the treatment planning for problem as a discrete conic optimization to achieve optimality guarantees.  -->

[![3dImplants]({{ site.baseurl }}/research/images/research-anatomy-implant.png)](https://youtu.be/sLnrddnAGks?list=PLOyuQaVrp4qqNdUbezfWvP8qtmKDuYzLS)
: **[3D Printed Implants for Intracavitary Brachytherapy]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)**  
We propose a new approach that builds on progress in 3D printing and steerable needle motion planning to create customized implants containing customized curvature-constrained internal channels that fit securely, minimize air gaps, and precisely guide radioactive sources through printed channels.  
\[[**CASE13**]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)\] \[[**Short Talk**](https://youtu.be/sLnrddnAGks?list=PLOyuQaVrp4qqNdUbezfWvP8qtmKDuYzLS)\] \[[**Slides**](http://www.eecs.berkeley.edu/XRG/BEARS/2014/presentations/garg.pptx)\]

[![material-Evaluation]({{ site.baseurl }}/research/images/matEval-jacmp.png)]({{ site.baseurl }}/files/JACMP-published-version.pdf)
: **[Material Evaluation of 3D Printed GYN Implants]({{ site.baseurl }}/files/JACMP-published-version.pdf)**  
The study evaluates the radiation attenuation properties of PC-ISO, a commercially available, biocompatible, sterilizable 3D printing material, and its suitability for customized, single-use gynecologic (GYN) brachytherapy applicators that have the potential for accurate guiding of seeds through linear and curved internal channels.  
\[[**JACMP14**]({{ site.baseurl }}/files/JACMP-published-version.pdf)\]

[![Acubot-Brachy]({{ site.baseurl }}/research/images/research-AcubotPlusImplant.png)](https://youtu.be/Kk_wHiu8nGg)
: **[Robot-Guided Needle Insertion for HDR-BT]({{ site.baseurl }}/files/garg-brachy-tase-2013.pdf)**  
We leverage human-centered automation to reduce side effects from HDR-BT in prostate cancer by efficiently delivering radiation to the prostate while minimizing trauma to sensitive structures such as the penile bulb. We modify the [Acubot-RND](http://urobotics.urology.jhu.edu/projects/RND/) system to guide needles into desired skew-line arrangements algorithmically calculated with needle planning and inverse dose planning algorithms.  
\[[**CASE12**]({{ site.baseurl }}/files/garg-brachy-case-2012.pdf)\] \[[**T-ASE13**]({{ site.baseurl }}/files/garg-brachy-tase-2013.pdf)\] \[[**Video**](https://youtu.be/Kk_wHiu8nGg)\] \[[**CASE-Talk**](https://youtu.be/TGEIRpbuS_I)\]  
**<font color="red">Best Application Paper Award.</font>**

[![reachability]({{ site.baseurl }}/research/images/anatomyExample-noAxesLabel.png)]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)
: **[Reachability Analysis for Needle Planning in HDR-BT]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)**  
We propose a new approach that builds on recent results in 3D printing and steerable needle motion planning to create customized implants containing customized curvature-constrained internal channels that fit securely, minimize air gaps, and precisely
guide radioactive sources through printed channels.  
\[[**CASE14**]({{ site.baseurl }}/files/garg-3dpImplant-case-2013.pdf)\]

<!--![externalImplants]({{ site.baseurl }}/research/images/comingSoon.jpg) -->
![externalImplants]({{ site.baseurl }}/research/images/3DP-ExternalTemplate-1-small.jpg)
: **3D Printed Guides for Prostate Brachytherapy**  
We propose the use of patient specific custom needle guides for needle configuration implant in Prostate HDR-BT. This work builds upon the robot-guided needle implants, and attempts to evaluate a low-cost yet effective method for achieving clinical objectives.  
\[[**PDF**-soon!]({{ site.baseurl }}/research/)\] \[[**Brachytherapy14**](http://www.sciencedirect.com/science/article/pii/S1538472114004863)\] 

---

{% include peoples_urls.md %}
<div id="footer">
<b>Copyright notice</b>: This material is presented to ensure timely dissemination of scholarly and technical work. Copyright and all rights therein are retained by authors or by other copyright holders. All persons copying this information are expected to adhere to the terms and constraints invoked by each author's copyright. These works may not be reposted without the explicit permission of the copyright holder.
</div>
