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
      { href: "http://www.slate.com/",
        text: "slate" },
      { href: "https://www.washingtonpost.com/",
        text: "wapo" },
      { href: "http://nytimes.com",
        text: "nyt" },
      { href: "http://verysmartbrothas.theroot.com/",
        text: "vsb" },
    ]},
  { title: "Programming",
    mobileTitle: "ƛ",
    links: [
      { href: "http://sachachua.com/blog/category/emacs/",
        text: "sacha chua emacs" },
    ]},
  { title: "Comics",
    mobileTitle: "💭",
    links: [
      { href: "http://xkcd.com",
        text: "xkcd" },
      { href: "http://smbc-comics.com",
        text: "smbc" },
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
      { href: "https://elk.zone/",
        text: "elk.zone" },
      { href: "https://evil.social/",
        text: "evil.social" },
      { href: "https://fedia.io/",
        text: "fedia" },
      { href: "https://geddit.social/",
        text: "geddit" },
    ]},
  { title: "Games",
    mobileTitle: "🎲",
    links: [
      { href: "https://www.nytimes.com/games/wordle/index.html",
        text: "wordle" },
      { href: "https://www.merriam-webster.com/games/quordle/#/",
        text: "quordle" },
      { href: "https://www.nytimes.com/games/digits",
        text: "digits" },
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

      if (link.hrefFunction) {
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
