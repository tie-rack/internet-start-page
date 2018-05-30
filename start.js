const zeroPad = n => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}

const separator = new Object();

const menu = [
  { title: "News",
    mobileTitle: "📰",
    links: [
      { href: "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&textField1=40.7198&textField2=-73.993&e=1",
        text: "weather" },
      { rss: "http://feeds.slate.com/slate",
        url: "http://www.slate.com/",
        text: "slate" },
      { rss: "http://feeds.washingtonpost.com/rss/national",
        url: "https://www.washingtonpost.com/",
        text: "wapo" },
      { rss: "http://rss.nytimes.com/services/xml/rss/nyt/HomePage.xml",
        url: "http://nytimes.com",
        text: "nyt" },
      { rss: "http://verysmartbrothas.theroot.com/rss",
        url: "http://verysmartbrothas.theroot.com/",
        text: "vsb" },
    ]},
  { title: "Programming",
    mobileTitle: "ƛ",
    links: [
      { rss: "http://planet.clojure.in/atom.xml",
        url: "http://planet.clojure.in",
        text: "planet clojure" },
      { href: "http://clojure.github.com/clojure/clojure.core-api.html",
        text: "clojure.core api" },
      separator,
      { rss: "http://sachachua.com/blog/category/emacs/feed/",
        url: "http://sachachua.com/blog/category/emacs/",
        text: "sacha chua emacs" },
      { rss: "http://endlessparentheses.com/atom.xml",
        url: "http://endlessparentheses.com/",
        text: "endless ()" },
      { rss: "http://pragmaticemacs.com/feed/",
        url: "http://pragmaticemacs.com/",
        text: "pragmatic emacs" },
      { rss: "http://emacs-fu.blogspot.com/feeds/posts/default?alt=rss",
        url: "http://emacs-fu.blogspot.com/",
        text: "emacs-fu" },
      separator,
      { rss: "https://herald.community.rs/rss",
        url: "https://herald.community.rs/",
        text: "rust herald" },
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
      { hrefFunction: () => {
        const date = new Date();
        const year = date.getFullYear();
        const month = zeroPad(date.getMonth() + 1);
        const day = zeroPad(date.getDate());
        return `http://www.gocomics.com/nancy/${year}/${month}/${day}`;
      },
        text: "nancy"
      },
    ]},
  { title: "Social",
    mobileTitle: "👫",
    links: [
      { href: "http://www.reddit.com/",
        text: "reddit" },
      { href: "https://twitter.com",
        text: "twitter" },
      separator,
      { href: "https://mastodon.social/",
        text: "mastodon.social" },
      { href: "https://dice.camp/",
        text: "dice.camp" },
    ]},
  { title: "Comedy",
    mobileTitle: "😛",
    links: [
      { href: "https://www.vulture.com/comedy/",
        text: "vulture comedy" },
      { rss: "http://www.mst3kinfo.com/?feed=atom",
        url: "http://www.mst3kinfo.com/",
        text: "mst3kinfo" },
    ]},
];

// template
$(menu).each((_,e) => {
  const id = e.title + "-menu";
  const menuItem = $("<li></li>");
  menuItem.addClass("menu-category");
  menuItem.attr("data-menu", id);

  const menuHeader = $("<h1></h1>");

  const fullSizeHeader = $("<span></span>");
  fullSizeHeader.addClass("full-size");
  fullSizeHeader.text(e.title);
  menuHeader.append(fullSizeHeader);

  const mobileHeader = $("<span></span>");
  mobileHeader.addClass("mobile");
  mobileHeader.text(e.mobileTitle);
  menuHeader.append(mobileHeader);

  menuItem.append(menuHeader);

  const subMenu = $("<ul></ul>");
  subMenu.attr("id", id);
  subMenu.addClass("menu");

  $(e.links).each((_,link) => {
    if (link === separator) {
      subMenu.append($("<hr>"));
    } else {
      const li = $("<li></li>");
      const a = $("<a></a>");

      if (link.rss) {
        a.attr("data-rss", link.rss);
        a.click(function(_) {
          $("#rss-link").text(link.text);
          $("#rss-link").attr("href", link.url);
          $("#rss-content").text("");
          $("#rss-content").rss(link.rss, {
            limit: 10,
            ssl: true,
            layoutTemplate: '<div class="feed-container">{entries}</div>',
            entryTemplate: '<div class="rss-entry"><a href="{url}">{title}</a><br/>{bodyPlain}</div>'
          });
        });
      } else if (link.hrefFunction) {
        a.attr("href", link.hrefFunction());
      } else {
        a.attr("href", link.href);
      }
      a.text(link.text);

      li.append(a);
      subMenu.append(li);
    }
  });
  menuItem.append(subMenu);

  $(".nav").append(menuItem);
});

$(".menu-category").each((_,e) => {
  const subMenuId = "#" + $(e).attr("data-menu");
  $(e).hover((_) => $(subMenuId).toggle());
});

window.addEventListener('error', (e) => {
  console.log(e);
  $("#rss-content").text("Something's going wrong, sorry!");
}, true);
