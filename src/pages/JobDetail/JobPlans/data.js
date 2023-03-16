const plans = [
  {
    revisions: 2,
    daysDelivery: 3,
    brief: {
      label: "Basic Package",
      content:
        "3 basic Logo + Unlimited Revisions + HD JPG and Transparent PNG + Vector Files",
    },
    price: 15,
    name: "Basic",
    features: [
      { name: "3 concepts included", checked: true },
      { name: "Logo transparency", checked: true },
      { name: "Vector file", checked: true },
      { name: "Printable file", checked: true },
      { name: "Include 3D mockup", checked: false },
      { name: "Include source file", checked: true },
      { name: "Stationery designs", checked: false },
      { name: "Include social media kit", checked: false },
    ],
  },
  {
    revisions: -1,
    daysDelivery: 2,
    brief: {
      label: "HOT Selling Package",
      content:
        "4 Premium HQ logo + Unlimited Revisions + All File Formats + free Social media kit",
    },
    price: 35,
    name: "Standard",
    features: [
      { name: "4 concepts included", checked: true },
      { name: "Logo transparency", checked: true },
      { name: "Vector file", checked: true },
      { name: "Printable file", checked: true },
      { name: "Include 3D mockup", checked: false },
      { name: "Include source file", checked: true },
      { name: "Stationery designs", checked: false },
      { name: "Include social media kit", checked: true },
    ],
  },
  {
    revisions: -1,
    daysDelivery: 1,
    brief: {
      label: "Branding Package",
      content:
        "6 Premium UHQ designs + all files +Social+Stationery +3dMockup+Favicon",
    },
    price: 70,
    name: "Premium",
    features: [
      { name: "5 concepts included", checked: true },
      { name: "Logo transparency", checked: true },
      { name: "Vector file", checked: true },
      { name: "Printable file", checked: true },
      { name: "Include 3D mockup", checked: true },
      { name: "Include source file", checked: true },
      { name: "Stationery designs", checked: true },
      { name: "Include social media kit", checked: true },
    ],
  },
];

export { plans };
