var menu = [
  { title: "News",
    mobileTitle: "📰",
    links: [
      { href: "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&textField1=40.7198&textField2=-73.993&e=1",
        text: "weather" },
      { href: "http://getprismatic.com/",
        text: "prismatic" },
      { rss: "http://feeds.slate.com/slate",
        url: "http://www.slate.com/",
        text: "slate" },
      { rss: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
        url: "http://nytimes.com",
        text: "nyt" },
      { rss: "http://pipedot.org/atom",
        url: "http://pipedot.org/",
        text: "|." },
    ]},
  { title: "Programming",
    mobileTitle: "ƛ",
    links: [
      { rss: "http://planet.clojure.in/atom.xml",
        url: "http://planet.clojure.in",
        text: "planet clojure" },
      { href: "http://clojure.github.com/clojure/clojure.core-api.html",
        text: "clojure.core api" },
      { rss: "http://sachachua.com/blog/category/emacs/feed/",
        url: "http://sachachua.com/blog/category/emacs/",
        text: "sacha chua emacs" }
    ]},
  { title: "Comics",
    mobileTitle: "💭",
    links: [
      { href: "http://xkcd.com",
        text: "xkcd" },
      { href: "http://smbc-comics.com",
        text: "smbc" },
      { href: "http://qwantz.com",
        text: "dinsosaur comics" },
    ]},
  { title: "Social",
    mobileTitle: "👫",
    links: [
      { href: "http://www.reddit.com/",
        text: "reddit" },
      { href: "https://twitter.com",
        text: "twitter" },
      { href: "https://www.facebook.com",
        text: "facebook" },
    ]},
  { title: "Comedy",
    mobileTitle: "😛",
    links: [
      { rss: "http://splitsider.com/feed/atom/",
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
    ]},
  { title: "Spanish",
    mobileTitle: "🇪🇸",
    links: [
      { href: "https://www.duolingo.com",
        text: "duolingo" },
      { href: "http://www.memrise.com/",
        text: "memrise" },
      { href: "http://www.learner.org/series/destinos/index.html",
        text: "destinos"},
      { href: "http://www.wordreference.com/",
        text: "word reference" },
      { href: "http://www.newsinslowspanish.com/latino/",
        text: "news in slow spanish" },
      { href: "http://www.primerahora.com/",
        text: "primera hora" },
      { href: "http://www.eldiariony.com/",
        text: "el diario"},
      { href: "https://es.wikipedia.org/wiki/Wikipedia:Portada",
        text: "wikipedia en español" }
    ]},
  { title: "Firefox",
    mobileTitle: "🔥",
    links: [
      { href: "http://www.reddit.com/r/FirefoxInfo/",
        text: "/r/FirefoxInfo" },
      { href: "https://www.google.com/search?q=firefox#q=firefox&tbm=nws",
        text: "google news search" },
      { rss: "https://blog.mozilla.org/feed/",
        url: "https://blog.mozilla.org/",
        text: "mozilla blog" },
      { rss: "https://hacks.mozilla.org/feed/",
        url: "https://hacks.mozilla.org/",
        text: "mozilla hacks" },
      { rss: "https://blog.mozilla.org/security/feed/",
        url: "https://blog.mozilla.org/security/",
        text: "mozilla security" },
      { rss: "https://quality.mozilla.org/feed/",
        url: "https://quality.mozilla.org/",
        text: "mozilla qa" },
      { rss: "https://blog.mozilla.org/ux/feed/",
        url: "https://blog.mozilla.org/ux/",
        text: "mozilla ux" },
      { rss: "https://blog.mozilla.org/futurereleases/feed/",
        url: "https://blog.mozilla.org/futurereleases/",
        text: "future releases" },
      { rss: "https://blog.mozilla.org/javascript/feed/",
        url: "https://blog.mozilla.org/javascript/",
        text: "javascript" },
      { rss: "http://planet.mozilla.org/rss20.xml",
        url: "http://planet.mozilla.org/",
        text: "planet mozilla" },
      { rss: "http://firefoxnightly.tumblr.com/rss",
        url: "firefoxnightly.tumblr.com",
        text: "FirefoxNightly" },
      { href: "https://wiki.mozilla.org/Firefox/Planning",
        text: "Firefox Planning (Wednesdays)" },
      { href: "https://mail.mozilla.org/pipermail/firefox-dev/",
        text: "firefox-dev archives"},
      { href: "https://mail.mozilla.org/pipermail/nightly-testers/",
        text: "nightly-testers archives" },
      { href: "https://groups.google.com/forum/?fromgroups#!forum/mozilla.dev.platform",
        text: "mozilla.dev.platform" },
      { href: "https://groups.google.com/forum/#!forum/mozilla.dev.quality",
        text: "mozilla.dev.quality" },
      { href: "http://hg.mozilla.org/mozilla-central/pushloghtml?startdate=48+hours+ago&enddate=now",
        text: "pushlog" }
    ]}
];

// template
$(menu).each(function(_,e) {
  var id = e.title + "-menu";
  var menuItem = $("<li></li>");
  menuItem.addClass("menu-category");
  menuItem.attr("data-menu", id);

  var menuHeader = $("<h1></h1>");

  var fullSizeHeader = $("<span></span>");
  fullSizeHeader.addClass("full-size");
  fullSizeHeader.text(e.title);
  menuHeader.append(fullSizeHeader);

  var mobileHeader = $("<span></span>");
  mobileHeader.addClass("mobile");
  mobileHeader.text(e.mobileTitle);
  menuHeader.append(mobileHeader);

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
