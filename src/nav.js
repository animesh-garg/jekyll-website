//<![CDATA[
$(document).ready(function(){
  // Highlight the navbar link that corresponds to the current page
  // simply by making it not a link
  //var pathname = window.location.pathname;
  var path_url=window.location.href;
  //take the baseurl out of the path.
  var base_url=new RegExp("http://www3.decf.berkeley.edu");
  var pathname=path_url.replace(base_url,"");
  
  if (pathname == "/~agarg/") {
    $("a#home").replaceWith("Animesh Garg");
  }
  else if (pathname.match("/~agarg/work/projects/")) {
    $("a#research").replaceWith("Research");
  }
  else if (pathname.match("/~agarg/work/[0-9]+")) {
    $("a#notes").replaceWith("Notes (<a href=\"/work/notes/\">more</a>)");
  }
  else if (pathname.match("/~agarg/work/notes/")) {
    $("a#notes").replaceWith("Notes");
  }
  else if (pathname.match("/~agarg/vita/")) {
    $("a#vita").replaceWith("Vita");
  }
  else if (pathname.match("/~agarg/fun/[0-9]+")) {
    $("a#fun").replaceWith("Fun (<a href=\"/fun/\">more</a>)");
  }
  else if (pathname.match("/~agarg/fun/")) {
    $("a#fun").replaceWith("Fun");
  }
  else if (pathname.match("/~agarg/links/")) {
    $("a#links").replaceWith("Links");
  }
  else if (pathname.match("/~agarg/colophon/")) {
    $("a#colophon").replaceWith("Colophon");
  }
});
//]]>
