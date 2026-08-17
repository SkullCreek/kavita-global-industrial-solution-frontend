import { Product } from "@/types/product";

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
  // DIVISION 01 - PACKAGING & CORRUGATION MACHINERY
  {
    id: 1,
    title: "Corrugated Cardboard Production Line",
    category: "Packaging & Corrugation Machinery",
    subCategory: "Turnkey Line",
    description: "A complete production line for corrugated cardboard, supplied as a matched set from reel stand to stacker. The 3-ply, 5-ply, 7-ply and multi-function configurations are built from the same core modules.",
    specifications: [
      { label: "Line speed", value: "100 – 220 m/min" },
      { label: "Paper width", value: "1400 – 2200 mm" },
      { label: "Flute profiles", value: "A, B, C, E (UV type)" },
      { label: "Ply configuration", value: "3 / 5 / 7 ply and multi-function" },
      { label: "Heating", value: "Steam / electric / thermic oil" }
    ],
    imgs: img(1),
  },
  {
    id: 2,
    title: "Electric Mill Roll Stand",
    category: "Packaging & Corrugation Machinery",
    subCategory: "Reel Handling",
    description: "Cast-iron reel stands for single-side loading, motorised build. Carry pneumatic or multi-point braking for stable web tension into the pre-heater.",
    specifications: [
      { label: "Max. reel diameter", value: "Φ 1500 mm" },
      { label: "One-side loading", value: "Max. 1500 kg" },
      { label: "Arm control motor (clamp)", value: "0.37 kW" }
    ],
    imgs: img(2),
  },
  {
    id: 3,
    title: "Fingerless Type Single Facer",
    category: "Packaging & Corrugation Machinery",
    subCategory: "Corrugation",
    description: "Vacuum-assisted fingerless corrugation. Removes the finger marks that limit print quality on the finished board and allows higher sustained speeds.",
    specifications: [
      { label: "Working width", value: "1400 – 2300 mm" },
      { label: "Design speed", value: "100 - 200 m/min" },
      { label: "Heating type", value: "Steam / electric / oil" }
    ],
    imgs: img(3),
  },
  {
    id: 4,
    title: "Automatic High Speed Printing, Slotting & Die-Cutting Machine",
    category: "Packaging & Corrugation Machinery",
    subCategory: "Converting",
    description: "Lead-edge feeding, flexo printing, slotting and rotary die-cutting in one pass, with colour groups configured to requirement.",
    specifications: [
      { label: "Production speed", value: "120 - 200 pcs/min" },
      { label: "Max. paper size", value: "Up to 1400 × 2600 mm" },
      { label: "Control mode", value: "PLC / touch screen / button" }
    ],
    imgs: img(4),
  },
  {
    id: 5,
    title: "Automatic Folder Gluer Machine",
    category: "Packaging & Corrugation Machinery",
    subCategory: "Converting",
    description: "Automatic folder gluer for regular slotted cartons, with PLC and touch screen control.",
    specifications: [
      { label: "Max. cardboard", value: "900 × 2200 mm / 1200 × 2500 mm" },
      { label: "Paperboard thickness", value: "3 or 5 layer" }
    ],
    imgs: img(5),
  },
  {
    id: 6,
    title: "Corrugated Machinery Spares",
    category: "Packaging & Corrugation Machinery",
    subCategory: "Spare Parts",
    description: "Fast-moving wear parts and consumables for corrugation and carton-converting machinery, held for short-lead replacement.",
    specifications: [
      { label: "Available Spares", value: "Brake Bands, Corrugated Rollers, Gear Pumps, Slitting Discs, Rotary Joints, etc." }
    ],
    imgs: img(6),
  },

  // DIVISION 02 - SEALING & FLUID HANDLING
  {
    id: 7,
    title: "Rubber Bellow Seal",
    category: "Sealing & Fluid Handling",
    subCategory: "Mechanical Seals",
    description: "Single mechanical seal for pumps. Face and elastomer combinations are selected to the medium, pressure and temperature of the duty.",
    specifications: [
      { label: "Face Materials", value: "Silicon Carbide, Carbon, Tungsten Carbide, Ceramic" },
      { label: "Metal Parts", value: "AISI SS 316, AISI SS 304" },
      { label: "Applications", value: "Water pumps, submersible pumps, sewage pumps" },
      { label: "Shaft diameter", value: "10 – 100 mm" }
    ],
    imgs: img(7),
  },
  {
    id: 8,
    title: "Dual Cartridge Seal",
    category: "Sealing & Fluid Handling",
    subCategory: "Mechanical Seals",
    description: "Dual cartridge mechanical seals for pumps, agitators and rotating equipment across water, chemical, hydrocarbon and pharmaceutical service.",
    specifications: [
      { label: "Face Materials", value: "Carbon, Silicon Carbide, Tungsten Carbide, Lecrolloy" },
      { label: "Applications", value: "Slurry pumps, pulp and paper, sludge and syrup pumps, chemical, petrochemical and refinery" },
      { label: "Shaft diameter", value: "18 – 100 mm" }
    ],
    imgs: img(8),
  },
  {
    id: 9,
    title: "Rotary Joint for Water Application",
    category: "Sealing & Fluid Handling",
    subCategory: "Rotary Unions",
    description: "Rotary unions for transferring water, air, hydraulic oil and thermic fluid into rotating drums, rolls and cylinders.",
    specifications: [
      { label: "Size", value: "3/8\" to 6.0\"" },
      { label: "Pressure", value: "15 bar" },
      { label: "Speed", value: "3500 rpm" }
    ],
    imgs: img(9),
  },
  {
    id: 10,
    title: "Pump Spares",
    category: "Sealing & Fluid Handling",
    subCategory: "Pump Spares",
    description: "Replacement wet-end and bearing-end components for centrifugal process pumps, manufactured to sample or drawing in cast iron, carbon steel, stainless and duplex grades.",
    specifications: [
      { label: "Components", value: "Impeller, Pump Shaft, Casing, Shaft Sleeve, Stuffing Box, Bearing Housing" },
      { label: "Pump Ranges", value: "Centrifugal, End Suction, Split Case, Slurry, Gear, Vacuum, Submersible" }
    ],
    imgs: img(10),
  },
  {
    id: 11,
    title: "Rubber, Silicone & PTFE Products",
    category: "Sealing & Fluid Handling",
    subCategory: "Elastomers & Polymers",
    description: "Moulded and extruded elastomer components for process, pharmaceutical and food plant.",
    specifications: [
      { label: "Products", value: "Gaskets, diaphragms, bellows, hoses, sheeting and machined PTFE" }
    ],
    imgs: img(11),
  },

  // DIVISION 03 - ELECTRICAL & POWER SYSTEMS
  {
    id: 12,
    title: "Air Circuit Breaker (ACB)",
    category: "Electrical & Power Systems",
    subCategory: "Switchgear",
    description: "Low-voltage protection and distribution — air circuit breakers through to final distribution boards, selected for the fault level and discrimination the installation actually requires.",
    specifications: [
      { label: "ACB frame sizes", value: "630 A to 6300 A, fixed and draw-out" }
    ],
    imgs: img(12),
  },
  {
    id: 13,
    title: "LED High Bay — Round",
    category: "Electrical & Power Systems",
    subCategory: "Illumination",
    description: "High-bay luminaires for plant and yard lighting, to complete the industrial installation.",
    specifications: [
      { label: "Type", value: "Industrial LED Lighting" }
    ],
    imgs: img(13),
  },
  {
    id: 14,
    title: "Cu / Al Armoured Cable",
    category: "Electrical & Power Systems",
    subCategory: "Power Transmission",
    description: "Armoured and unarmoured power cables, control and instrumentation cables, house wiring and communication cable, sized and specified to installation conditions.",
    specifications: [
      { label: "Conductor", value: "Electrolytic grade copper and aluminium" },
      { label: "Power cable sizes", value: "1.5 to 630 sq mm, single and multicore" },
      { label: "Voltage grades", value: "1100 V, 3.3 kV, 6.6 kV and 11 kV" }
    ],
    imgs: img(14),
  },
  {
    id: 15,
    title: "3 Phase Online UPS",
    category: "Electrical & Power Systems",
    subCategory: "Power Backup",
    description: "Three-phase online UPS, servo voltage stabilizers, harmonic filters, static transfer switches, inverters and batteries for continuous and clean power.",
    specifications: [
      { label: "Types", value: "Compact, Modular" }
    ],
    imgs: img(15),
  },
  {
    id: 16,
    title: "3 Phase Induction Motor",
    category: "Electrical & Power Systems",
    subCategory: "Pumps, Motors & Building Services",
    description: "Pump sets and three-phase motors for utility duty, together with water heating, ventilation and comfort equipment for plant amenity and residential projects.",
    specifications: [
      { label: "Application", value: "Industrial & Utility Duty" }
    ],
    imgs: img(16),
  }
];

export default shopData;
