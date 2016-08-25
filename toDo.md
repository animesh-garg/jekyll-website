To DO for jekyll-website
==============
- [ ] Fix the move to stanford

- [ ]  Add Class Projects along with reports in reserach section
- [ ]  Add List of courses. Possibly under resume. It would be one big static file rather than posts. 
- [ ]  Update the Misc page with links and better layout. 
Links: http://mark.reid.name/blog/kith.html
- [ ]  update the HOWTO video using micsrosoft office mix
- [ ]  use jekyll-scholar for bib, and abstract listing on pubs page
- [ ] Automate pub list numbering
/* publications styling for continued numbers*/
.publications ol:first-of-type { 
    counter-reset: mycounter; 
}
.publications ol.start li, .publications ol.continue li {
    /*list-style: decimal inside;*/
    list-style: none;
}
.publications ol.start li:before, .publications ol.continue li:before { 
    /*counter-increment: mycounter;*/
    content: counter(mycounter) ". "; 
    counter-increment: mycounter;
}