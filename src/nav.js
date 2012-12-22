//<![CDATA[
$(document).ready(function(){
  // Highlight the navbar link that corresponds to the current page
  // simply by making it not a link
  var pathname = window.location.pathname;

  if (pathname == "/") {
    $("a#home").replaceWith("Animesh Garg");
  }
  else if (pathname.match("/work/projects/")) {
    $("a#projects").replaceWith("Research");
  }
  else if (pathname.match("work/[0-9]+")) {
    $("a#notes").replaceWith("notes (<a href=\"/work/notes/\">more</a>)");
  }
  else if (pathname.match("/work/notes/")) {
    $("a#notes").replaceWith("Notes");
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
