import logo from "@/images/resources/footer-logo.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "Skaya Moon",
  about:
    "Welcome to Skaya Moon - Your trusted travel partner in UAE. We specialize in booking tickets, student abroad programs, visa services, and immigration assistance.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+971-522-2007-30",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "info@skyamoon.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "United Arab Emirates",
    },
  ],
  companies: [
    { id: 1, link: "/about", title: "About Us" },
    { id: 2, link: "#", title: "Student Programs" },
    { id: 3, link: "#", title: "Visa Services" },
    { id: 4, link: "#", title: "Immigration" },
    { id: 5, link: "#", title: "Travel Insurance" },
  ],
  explore: [
    { id: 1, link: "#", title: "USA Visa" },
    { id: 2, link: "#", title: "Schengen Visa" },
    { id: 3, link: "/contact", title: "Contact" },
    { id: 4, link: "#", title: "UAE Visa" },
    { id: 5, link: "#", title: "Privacy Policy" },
  ],
};

export default footerData;
