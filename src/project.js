import shop from "./assets/shop.png";
import hospital from "./assets/hospital.png";
import restaurant from "./assets/restaurant.png";
import vgs from "./assets/vgs.png";
import picha from "./assets/picha.jpg";

export const PROJECTS = [


  {
    title: "VGS system",
    subtitle: "Laravel",
    description:
      "The system enable signin, signout and generation of gatepasses",
      image: vgs,
      link: "https://github.com/fredrickmugish/The-Guardian.git",
    },

    {
      title: "Hospital management system",
      subtitle: "Laravel",
      description:
        "The system help patients make appointment to doctors in the hospital",
        image: hospital,
        link: "https://github.com/fredrickmugish/Hospital-management-system.git",
  },

   {
    title: "Online Shop",
    subtitle: "Laravel",
    description:
      "The e-commerce system enable customers to buy products online and make payment with cash on delivery or make card payment ",
      image: shop,
      link: "https://github.com/fredrickmugish/E-commerce.git",
    },



{
title: "Restaurant reservation system",
subtitle: "Laravel",
description:
  "The system allow customers to make reservations, the system features information about the restaurant, such as menus, location, hours of operation, and available tables ",
  image: restaurant,
  link: "https://github.com/fredrickmugish/Restaurant-reservation-system.git",
},

]
export const SKILLS = [
  {
    title: "PHP, JAVA, C++, PYTHON",
  },
  {
    title: "Laravel, React, React Native",
  },
  {
    title: "MySQL, SQLite, Git, CLI", 
  },
  {
    title: "HTML, CSS, JavaScript",
  },
]

export const TESTIMONIALS = [


{
  quote: "'They have transformed my business into a large enterprises by making it possible to attract more customers online through their services'",
  image: picha,
  name: "Maduhu M.",
  company: "President M3 Group",
},

{
  quote: "'They provide great services, listens to customers and respond quickly'",
  image: picha,
  name: "Stephen K.",
  company: "Programmer",
}

]


