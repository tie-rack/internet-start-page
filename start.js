const zeroPad = n => {
  if (n < 10) {
    return `0${n}`;
  } else {
    return `${n}`;
  }
}

const menu = [
  { title: "News",
    links: [
      { href: "http://forecast.weather.gov/MapClick.php?CityName=New+York&state=NY&site=OKX&textField1=40.7198&textField2=-73.993&e=1",
        text: "weather" },
      { href: "http://www.slate.com/",
        text: "slate" },
      { href: "https://www.washingtonpost.com/",
        text: "wapo" },
      { href: "http://nytimes.com",
        text: "nyt" },
    ]},
  { title: "Programming",
    links: [
      { href: "http://sachachua.com/blog/category/emacs/",
        text: "sacha chua emacs" },
      { href: "https://pkg.go.dev/std",
        text: "go std" },
      { href: "https://doc.rust-lang.org/std/index.html",
        text: "rust std" },
      { href: "https://docs.python.org/3/library/index.html",
        text: "python std" },
    ]},
  { title: "Comics",
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
    links: [
      { href: "https://elk.zone/",
        text: "elk.zone" },
      { href: "https://evil.social/",
        text: "evil.social" },
      { href: "https://geddit.social/",
        text: "geddit" },
      { href: "https://pixelfed.social/",
        text: "pixelfed" },
    ]},
  { title: "Games",
    links: [
      { href: "https://www.nytimes.com/games/wordle/index.html",
        text: "wordle" },
      { href: "https://www.merriam-webster.com/games/quordle/#/",
        text: "quordle" },
    ]},
];

// template
$(menu).each((_,e) => {
  const nav = $("<nav></nav>");

  const title = $("<h1></h1>");
  title.text(e.title);

  nav.append(title);

  const links = $("<ul></ul>");
  $(e.links).each((_, link) => {
    const li = $("<li></li>");
    const a = $("<a></a>");

    if (link.hrefFunction) {
      a.attr("href", link.hrefFunction());
    } else {
      a.attr("href", link.href);
    }
    a.text(link.text);

    li.append(a);
    links.append(li);
  })

  nav.append(links);

  $(".navs").append(nav);
});
