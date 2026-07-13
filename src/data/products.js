 const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop",
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life. Perfect for music lovers and professionals.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 249.99,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop",
    description:
      "Feature-rich smartwatch with fitness tracking, heart rate monitor, and smartphone notifications. Water-resistant design.",
  },
  {
    id: 3,
    name: "Laptop Stand",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&h=500&fit=crop",
    description:
      "Ergonomic aluminum laptop stand that improves posture and workspace organization. Adjustable height and angle.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=500&h=500&fit=crop",
    description:
      "RGB backlit mechanical keyboard with Cherry MX switches. Perfect for gaming and typing enthusiasts.",
  },
  {
    id: 5,
    name: "USB-C Hub",
    price: 39.99,
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&h=500&fit=crop",
    description:
      "Multi-port USB-C hub with HDMI, USB 3.0, and SD card reader. Expand your laptop connectivity.",
  },
  {
    id: 6,
    name: "Wireless Mouse",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&h=500&fit=crop",
    description:
      "Ergonomic wireless mouse with precision tracking and long battery life. Comfortable for extended use.",
  },
  {
    id: 7,
    name: "Monitor Stand",
    price: 79.99,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=500&fit=crop",
    description:
      "Dual monitor stand with adjustable height and tilt. Frees up desk space and improves ergonomics.",
  },
  {
    id: 8,
    name: "Webcam HD",
    price: 89.99,
    image:
      "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&h=500&fit=crop",
    description:
      "1080p HD webcam with auto-focus and built-in microphone. Ideal for video calls and streaming.",
  },
  {
    id: 9,
    name: "Wireless Charger 3-in-1",
    price: 45.99,
    image:
      "https://images.unsplash.com/photo-1622445262465-2481c4574875?w=500&h=500&fit=crop",
    description:
      "Convenient 3-in-1 wireless charging station for your smartphone, smartwatch, and earbuds. Sleek space-saving design.",
  },
  {
    id: 10,
    name: "Leather Desk Pad",
    price: 34.99,
    image:
      "https://images.unsplash.com/photo-1616440347437-b1c73416efc2?w=500&h=500&fit=crop",
    description:
      "Premium double-sided leather desk mat that protects your workspace. Smooth gliding surface for your mouse.",
  },
  {
    id: 11,
    name: "Wooden Desk Organizer",
    price: 24.99,
    image:
      "https://images.unsplash.com/photo-1590790313300-ec3cb0128414?w=500&h=500&fit=crop",
    description:
      "Elegant wooden organizer tray for pens, cards, and small office accessories. Keeps your desk neat and tidy.",
  },
  {
    id: 12,
    name: "1TB Portable SSD",
    price: 119.99,
    image:
      "https://images.unsplash.com/photo-1595206133361-b1fe343e5e23?w=500&h=500&fit=crop",
    description:
      "Ultra-fast portable solid-state drive with high-speed transfers. Compact, shock-resistant design for on-the-go storage.",
  },
  {
    id: 13,
    name: "Bluetooth Speaker Pro",
    price: 69.99,
    image:
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&h=500&fit=crop",
    description:
      "IPX7 waterproof portable Bluetooth speaker with rich bass and crystal-clear 360-degree sound. Up to 15 hours of playtime.",
  },
  {
    id: 14,
    name: "Ergonomic Office Chair",
    price: 199.99,
    image:
      "https://images.unsplash.com/photo-1505797149-43b0069ec26b?w=500&h=500&fit=crop",
    description:
      "High-back office chair with adjustable lumbar support, armrests, and breathable mesh back for ultimate comfort.",
  }
];

export  function getProducts() {
  return products;
}

export  function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}