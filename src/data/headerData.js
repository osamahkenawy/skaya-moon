import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    subNavItems: [
      {
        id: 1,
        name: "Home One",
        href: "/",
      },
      {
        id: 2,
        name: "Home Two",
        href: "/home2",
      },
      {
        id: 3,
        name: "Header Styles",
        href: "/",
        subItems: [
          {
            id: 1,
            name: "Header One",
            href: "",
          },
          { id: 2, name: "Header Two", href: "" },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Destinations",
    href: "/destinations",
    subNavItems: [
      { id: 1, name: "Study Destinations", href: "/destinations" },
      { id: 2, name: "Immigration Countries", href: "/destinations-details" },
    ],
  },
  {
    id: 3,
    name: "Services",
    href: "/tours",
    subNavItems: [
      { id: 1, name: "Visa Services", href: "/tours" },
      { id: 2, name: "Study Abroad", href: "/tours-list" },
      { id: 3, name: "Immigration", href: "/tour-details" },
    ],
  },
  {
    id: 4,
    name: "Pages",
    href: "",
    subNavItems: [
      { id: 1, name: "About Skaya Moon", href: "/about" },
      { id: 2, name: "Travel Insurance", href: "#" },
    ],
  },
  {
    id: 5,
    name: "News",
    href: "/news",
    subNavItems: [
      { id: 1, name: "Latest Updates", href: "/news" },
      { id: 2, name: "Visa Updates", href: "/news-details" },
    ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/contact",
    subNavItems: [],
  },
];

const social = [
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-twitter", link: "" },
  { icon: "fa-instagram", link: "" },
  { icon: "fa-pinterest-p", link: "" },
];

const headerData = {
  icons: [
    {
      id: 1,
      icon: "icon-phone-call",
      content: "+971-522-2007-30",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "icon-at",
      content: "info@skyamoon.com",
      subHref: "mailto",
    },
  ],
  navItems,
  social,
  logo,
  logo2,
};

export default headerData;
