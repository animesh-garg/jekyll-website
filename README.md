jekyll-website
==============

Personal Website of Animesh Garg.   

How to run:  
1. Open shell and cd to ./src  
2. jekyll serve --watch  
This will fire up a local serverat http://localhost:4000 and you may check if your website works.  
--watch allows you to change files without recompiling  
3. jekyll --base-url "/~animesh.garg"  
to generate a website you want to host at a shared hosting service where you can replace your address.  
(This is only required if baseurl variable in not set in _config.yml)

Also if you use a different base-url then check some files for hard-sets like the nav.js.  
All others should work fine. 

---
Reference Docs:

Comprehensive guide to Jekyll: http://jekyllrb.com/docs/home/  
Liquid Tags Cheatsheet: http://cheat.markdunkley.com/  
Kramdown - http://kramdown.gettalong.org/syntax.html (Preferred)
Markdown Syntax: http://daringfireball.net/projects/markdown/syntax  
Textile Documentation: http://txstyle.org/
Fonts: https://edgewebfonts.adobe.com/index
Check Fonts on a webpage - http://fount.artequalswork.com/  
