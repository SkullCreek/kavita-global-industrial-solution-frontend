import { Product } from "@/types/product";

// Reuses the template's existing placeholder product images (8 sets, cycled).
// Swap these image paths with real part photos whenever you're ready.
const imageSet = (n: number) => ({
  thumbnails: [
    `/images/products/product-${n}-sm-1.png`,
    `/images/products/product-${n}-sm-2.png`,
  ],
  previews: [
    `/images/products/product-${n}-bg-1.png`,
    `/images/products/product-${n}-bg-2.png`,
  ],
});

const img = (id: number) => imageSet(((id - 1) % 8) + 1);

const shopData: Product[] = [
  // --- Feeding Section Parts ---
  {
    id: 1,
    title: "Lead Edge Feeder / Chain Feeder",
    category: "Feeding Section",
    description:
      "Precision lead-edge feeder unit for smooth, jam-free entry of corrugated sheets into the printing line.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(1),
  },
  {
    id: 2,
    title: "Feeder Rubber Roller",
    category: "Feeding Section",
    description:
      "High-grip rubber roller that ensures consistent sheet contact and reliable feed alignment.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(2),
  },
  {
    id: 3,
    title: "Feeding Wheels",
    category: "Feeding Section",
    description:
      "Durable feeding wheels engineered for accurate sheet spacing and steady in-feed speed.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(3),
  },
  {
    id: 4,
    title: "Vacuum Transfer Belt",
    category: "Feeding Section",
    description:
      "Vacuum-assisted transfer belt that holds sheets firmly while moving them into the print unit.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(4),
  },
  {
    id: 5,
    title: "Sheet Guide Plate",
    category: "Feeding Section",
    description:
      "Precision guide plate that keeps sheets aligned and prevents skewing during feed.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(5),
  },
  {
    id: 6,
    title: "Feeder Motor",
    category: "Feeding Section",
    description:
      "Heavy-duty feeder drive motor built for continuous-duty industrial operation.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(6),
  },
  {
    id: 7,
    title: "Feeder Bearings",
    category: "Feeding Section",
    description:
      "Genuine feeder shaft bearings for smooth rotation and reduced downtime.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(7),
  },

  // --- Printing Unit Parts ---
  {
    id: 8,
    title: "Anilox Roller",
    category: "Printing Unit",
    description:
      "Precision-engraved anilox roller for consistent, high-quality ink transfer across the web.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(8),
  },
  {
    id: 9,
    title: "Printing Plate Cylinder",
    category: "Printing Unit",
    description:
      "Accurately balanced plate cylinder for sharp, repeatable print registration.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(9),
  },
  {
    id: 10,
    title: "Impression Cylinder",
    category: "Printing Unit",
    description:
      "Heavy-duty impression cylinder delivering uniform pressure for clean, consistent prints.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(10),
  },
  {
    id: 11,
    title: "Rubber Roller",
    category: "Printing Unit",
    description:
      "Industrial rubber roller sourced for durability under continuous print-run conditions.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(11),
  },
  {
    id: 12,
    title: "Doctor Blade",
    category: "Printing Unit",
    description:
      "Precision doctor blade for accurate ink metering and a cleaner anilox roller surface.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(12),
  },
  {
    id: 13,
    title: "Ink Chamber",
    category: "Printing Unit",
    description:
      "Enclosed ink chamber system for controlled, low-waste ink delivery to the anilox roller.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(13),
  },
  {
    id: 14,
    title: "Ink Pump",
    category: "Printing Unit",
    description:
      "Reliable ink circulation pump built for continuous industrial printing operations.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(14),
  },
  {
    id: 15,
    title: "Ink Filter",
    category: "Printing Unit",
    description:
      "Fine-mesh ink filter that keeps the ink circuit clean and print quality consistent.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(15),
  },
  {
    id: 16,
    title: "Ink Tank",
    category: "Printing Unit",
    description:
      "Sturdy ink storage tank designed for easy cleaning and quick colour changeovers.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(16),
  },
  {
    id: 17,
    title: "Printing Plate (Photopolymer Plate)",
    category: "Printing Unit",
    description:
      "High-resolution photopolymer printing plate for crisp graphics and long print runs.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(17),
  },

  // --- Slotting / Creasing Section ---
  {
    id: 18,
    title: "Slotting Blade",
    category: "Slotting & Creasing",
    description:
      "Sharp, precision-ground slotting blade for clean, accurate box slots.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(18),
  },
  {
    id: 19,
    title: "Slotting Shaft",
    category: "Slotting & Creasing",
    description:
      "Precision-machined slotting shaft built to hold true alignment run after run.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(19),
  },
  {
    id: 20,
    title: "Creasing Wheel",
    category: "Slotting & Creasing",
    description:
      "Hardened creasing wheel for sharp, consistent fold lines on every box blank.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(20),
  },
  {
    id: 21,
    title: "Scoring Wheel",
    category: "Slotting & Creasing",
    description:
      "Durable scoring wheel engineered for clean, defect-free score lines.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(21),
  },
  {
    id: 22,
    title: "Knife Holder",
    category: "Slotting & Creasing",
    description:
      "Rigid knife holder assembly for secure blade mounting and precise cuts.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(22),
  },
  {
    id: 23,
    title: "Slotting Motor",
    category: "Slotting & Creasing",
    description:
      "Industrial-grade drive motor for the slotting/creasing section, built for continuous use.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(23),
  },

  // --- Die Cutting Section ---
  {
    id: 24,
    title: "Die Cylinder",
    category: "Die Cutting",
    description:
      "Precision-balanced die cylinder for accurate, repeatable rotary die cutting.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(24),
  },
  {
    id: 25,
    title: "Die Cutting Plate",
    category: "Die Cutting",
    description:
      "Custom-fit die cutting plate designed for clean, burr-free cuts.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(25),
  },
  {
    id: 26,
    title: "Rubber Pad / Anvil Cover",
    category: "Die Cutting",
    description:
      "Long-life rubber anvil cover that protects the cylinder and keeps cuts sharp.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(26),
  },
  {
    id: 27,
    title: "Cutting Knife",
    category: "Die Cutting",
    description:
      "Precision-ground cutting knife for consistent, clean die-cut edges.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(27),
  },
  {
    id: 28,
    title: "Die Lock System",
    category: "Die Cutting",
    description:
      "Secure die lock mechanism for fast, accurate die changeovers.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(28),
  },

  // --- Stacker Section ---
  {
    id: 29,
    title: "Stacker Conveyor Belt",
    category: "Stacker Section",
    description:
      "Heavy-duty conveyor belt for smooth, reliable movement of finished sheets to the stacker.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(29),
  },
  {
    id: 30,
    title: "Lifting Table",
    category: "Stacker Section",
    description:
      "Robust lifting table built for consistent stack height control and easy unloading.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(30),
  },
  {
    id: 31,
    title: "Pneumatic Stopper",
    category: "Stacker Section",
    description:
      "Reliable pneumatic stopper for precise sheet alignment at the stacker section.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(31),
  },
  {
    id: 32,
    title: "Stacker Motor",
    category: "Stacker Section",
    description:
      "Industrial drive motor for the stacker unit, built for long, trouble-free service life.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(32),
  },
  {
    id: 33,
    title: "Photo Sensor",
    category: "Stacker Section",
    description:
      "High-accuracy photo sensor for reliable sheet detection and stack counting.",
    reviews: 0,
    price: 0,
    discountedPrice: 0,
    imgs: img(33),
  },
];

export default shopData;
