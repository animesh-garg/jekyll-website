//<![CDATA[
$(document).ready(function(){
  // Highlight the navbar link that corresponds to the current page
  // simply by making it not a link
  var path_url = window.location.pathname;
  //take the baseurl out of the path.
  var base_url = "/~agarg";
  var pathname = path_url.replace(/\/~agarg/g,"");
  
  if (pathname == "/") {
    $("a#home").replaceWith("Animesh Garg");
  }
  else if (pathname.match("/work/projects/")) {
    $("a#research").replaceWith("Research");
  }
  else if (pathname.match("/work/projects/[0-9]+")) {
    $("a#research").replaceWith("Research (<a href=\"/work/projects/\">more</a>)");
  }
  else if (pathname.match("/work/pubs/")) {
    $("a#publications").replaceWith("Publications");
  }
  else if (pathname.match("/articles/")) {
    $("a#articles").replaceWith("Articles");
  }
  else if (pathname.match("/articles/[0-9]+")) {
    $("a#articles").replaceWith("Articles (<a href=\"/articles/\">more</a>)");
  }
  else if (pathname.match("/vita/")) {
    $("a#vita").replaceWith("Vita");
  }
  else if (pathname.match("/fun/[0-9]+")) {
    $("a#fun").replaceWith("Fun (<a href=\"/fun/\">more</a>)");
  }
  else if (pathname.match("/fun/")) {
    $("a#fun").replaceWith("Fun");
  }
  else if (pathname.match("/links/")) {
    $("a#links").replaceWith("Links");
  }
  else if (pathname.match("/colophon/")) {
    $("a#colophon").replaceWith("Colophon");
  }
});
//]]>
