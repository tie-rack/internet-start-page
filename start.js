var menu = [
  { title: "News",
    links: [
      { href: "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&textField1=40.7198&textField2=-73.993&e=1",
        text: "weather" },
      { href: "http://getprismatic.com/news/home",
        text: "prismatic" },
      { rss: "http://feeds.slate.com/slate",
        url: "http://www.slate.com/",
        text: "slate" },
      { rss: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
        url: "http://nytimes.com",
        text: "nyt" },
      { rss: "http://rss.slashdot.org/Slashdot/slashdot",
        url: "http://slashdot.org",
        text: "/."},
      { rss: "http://pipedot.org/atom",
        url: "http://pipedot.org/",
        text: "|." },
      { rss: "http://soylentnews.org/index.rss",
        url: "http://soylentnews.org/",
        text: "soylent" },
    ]},
  { title: "Clojure",
    links: [
      { rss: "http://planet.clojure.in/atom.xml",
        url: "http://planet.clojure.in",
        text: "planet clojure" },
      { href: "http://clojure.github.com/clojure/clojure.core-api.html",
        text: "core api" }
    ]},
  { title: "Comics",
    links: [
      { href: "http://xkcd.com",
        text: "xkcd" },
      { href: "http://smbc-comics.com",
        text: "smbc" },
      { href: "http://qwantz.com",
        text: "dinsosaur comics" },
    ]},
  { title: "Social",
    links: [
      { href: "http://www.reddit.com/",
        text: "reddit" },
      { href: "https://twitter.com",
        text: "twitter" },
      { href: "https://www.facebook.com",
        text: "facebook" },
    ]},
  { title: "Comedy",
    links: [
      { rss: "http://feeds.feedburner.com/Splitsider?format=xml",
        url: "http://splitsider.com/",
        text: "splitsider" },
      { rss: "http://www.laughspin.com/feed/",
        url: "http://www.laughspin.com/",
        text: "laughspin" },
      { rss: "http://www.mst3kinfo.com/?feed=atom",
        url: "http://www.mst3kinfo.com/",
        text: "mst3kinfo" },
      { rss: "http://newyork.ucbtrainingcenter.com/courses/open/rss",
        url: "http://newyork.ucbtrainingcenter.com/courses/open",
        text: "ucb classes" },
      { rss: "http://ucbcomedy.tumblr.com/rss",
        url: "http://ucbcomedy.tumblr.com/",
        text: "ucb comedy" }
    ]}
];

// template
$(menu).each(function(_,e) {
  var id = e.title + "-menu";
  var menuItem = $("<li></li>");
  menuItem.addClass("menu-category");
  menuItem.attr("data-menu", id);

  var menuHeader = $("<h1></h1>");
  menuHeader.text(e.title);
  menuItem.append(menuHeader);

  var subMenu = $("<ul></ul>");
  subMenu.attr("id", id);
  subMenu.addClass("menu");

  $(e.links).each(function(_,link) {
    var li = $("<li></li>");
    var a = $("<a></a>");

    if (link.rss) {
      a.attr("data-rss", link.rss);
      a.click(function(_) {
        $("#rss-link").text(link.text);
        $("#rss-link").attr("href", link.url);
        $("#rss-content").text("");
        $("#rss-content").rss(link.rss, {
          limit: 10,
          layoutTemplate: '<div class="feed-container">{entries}</div>',
          entryTemplate: '<div class="rss-entry"><a href="{url}">{title}</a><br/>{bodyPlain}</div>'
        });
      });
    } else {
      a.attr("href", link.href);
    }
    a.text(link.text);

    li.append(a);
    subMenu.append(li);
  });
  menuItem.append(subMenu);

  $(".nav").append(menuItem);
});

$(".menu-category").each(function(_,e) {
  var subMenuId = "#" + $(e).attr("data-menu");
  $(e).hover(function(_) { $(subMenuId).toggle(); });
});
