// Utility function to get localized data based on current locale
export const getLocalizedHeaderData = (t) => {
  return {
    icons: [
      {
        id: 1,
        icon: "icon-phone-call",
        content: t('contact.phone1'),
        subHref: "tel",
      },
      {
        id: 2,
        icon: "icon-at",
        content: t('contact.email1'),
        subHref: "mailto",
      },
    ],
    navItems: [
      {
        id: 1,
        name: t('navigation.home'),
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
        ],
      },
      {
        id: 2,
        name: t('navigation.destinations'),
        href: "/destinations",
        subNavItems: [
          { id: 1, name: t('navigation.studyDestinations'), href: "/destinations" },
          { id: 2, name: t('navigation.immigrationCountries'), href: "/destinations-details" },
        ],
      },
      {
        id: 3,
        name: t('navigation.services'),
        href: "/tours",
        subNavItems: [
          { id: 1, name: t('navigation.visaServices'), href: "/tours" },
          { id: 2, name: t('navigation.studyAbroad'), href: "/tours-list" },
          { id: 3, name: t('navigation.immigration'), href: "/tour-details" },
        ],
      },
      {
        id: 4,
        name: t('navigation.pages'),
        href: "",
        subNavItems: [
          { id: 1, name: t('navigation.about'), href: "/about" },
          { id: 2, name: t('navigation.travelInsurance'), href: "#" },
        ],
      },
      {
        id: 5,
        name: t('navigation.news'),
        href: "/news",
        subNavItems: [
          { id: 1, name: t('navigation.latestUpdates'), href: "/news" },
          { id: 2, name: t('navigation.visaUpdates'), href: "/news-details" },
        ],
      },
      {
        id: 6,
        name: t('navigation.contact'),
        href: "/contact",
        subNavItems: [],
      },
    ],
  };
};

export const getLocalizedFooterData = (t) => {
  return {
    about: t('company.description'),
    author: t('company.name'),
    icons: [
      {
        id: 1,
        icon: "fas fa-phone-square-alt",
        content: t('contact.phone1'),
        subHref: "tel",
      },
      {
        id: 2,
        icon: "fas fa-envelope",
        content: t('contact.email1'),
        subHref: "mailto",
      },
      {
        id: 3,
        icon: "fas fa-map-marker-alt",
        content: t('contact.address'),
      },
    ],
    companies: [
      { id: 1, link: "/about", title: t('navigation.about') },
      { id: 2, link: "#", title: t('services.studyAbroad') },
      { id: 3, link: "#", title: t('services.visaServices') },
      { id: 4, link: "#", title: t('services.immigration') },
      { id: 5, link: "#", title: t('services.travelInsurance') },
    ],
    explore: [
      { id: 1, link: "#", title: "USA Visa" },
      { id: 2, link: "#", title: "Schengen Visa" },
      { id: 3, link: "/contact", title: t('navigation.contact') },
      { id: 4, link: "#", title: "UAE Visa" },
      { id: 5, link: "#", title: "Privacy Policy" },
    ],
  };
};

export const getLocalizedDestinations = (t) => {
  return [
    {
      id: 1,
      image: "destination-1-1.png",
      title: t('countries.london'),
      tours: 8,
      subTitle: t('services.studyAbroad'),
      col: 3,
    },
    {
      id: 2,
      image: "destination-1-2.png",
      title: t('countries.france'),
      tours: 6,
      subTitle: "Education",
      col: 6,
    },
    {
      id: 3,
      image: "destination-1-3.png",
      title: t('countries.russia'),
      tours: 5,
      subTitle: "Universities",
      col: 3,
    },
    {
      id: 4,
      image: "destination-1-4.png",
      title: t('countries.australia'),
      tours: 7,
      subTitle: t('services.immigration'),
      col: 6,
    },
    {
      id: 5,
      image: "destination-1-5.png",
      title: t('countries.germany'),
      tours: 6,
      subTitle: "Study Programs",
      col: 6,
    },
    {
      id: 6,
      image: "destination-1-6.png",
      title: t('countries.canada'),
      tours: 8,
      subTitle: t('services.immigration'),
      col: 3,
    },
    {
      id: 7,
      image: "destination-1-7.png",
      title: t('countries.newZealand'),
      tours: 4,
      subTitle: t('services.immigration'),
      col: 6,
    },
    {
      id: 8,
      image: "destination-1-8.png",
      title: t('countries.brazil'),
      tours: 3,
      subTitle: t('services.immigration'),
      col: 3,
    },
    {
      id: 9,
      image: "destination-1-9.png",
      title: t('countries.usa'),
      tours: 10,
      subTitle: t('services.visaServices'),
      col: 6,
    },
    {
      id: 10,
      image: "destination-1-10.png",
      title: t('countries.uae'),
      tours: 12,
      subTitle: "Tourism & Residency",
      col: 3,
    },
  ];
};
