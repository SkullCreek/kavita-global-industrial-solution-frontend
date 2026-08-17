import { Menu } from "@/types/Menu";

export const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Catalogue",
    newTab: false,
    path: "/shop-without-sidebar",
    submenu: [
      {
        id: 21,
        title: "Packaging & Corrugation Machinery",
        newTab: false,
        path: "/shop-without-sidebar?category=Packaging+%26+Corrugation+Machinery",
      },
      {
        id: 22,
        title: "Sealing & Fluid Handling",
        newTab: false,
        path: "/shop-without-sidebar?category=Sealing+%26+Fluid+Handling",
      },
      {
        id: 23,
        title: "Electrical & Power Systems",
        newTab: false,
        path: "/shop-without-sidebar?category=Electrical+%26+Power+Systems",
      },
    ]
  },
  {
    id: 3,
    title: "Contact",
    newTab: false,
    path: "/contact",
  },
];

