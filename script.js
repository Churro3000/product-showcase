// ---------------- CONFIG ----------------
// Replace with your shop's WhatsApp number in international format (no + or spaces)
const shopNumber = "26771665187";

// List of product image filenames (1 to 55)
const products = [
  "product1.jpg", "product2.jpg", "product3.jpg", "product4.jpg", "product5.jpg",
  "product6.jpg", "product7.jpg", "product8.jpg", "product9.jpg", "product10.jpg",
  "product11.jpg", "product12.jpg", "product13.jpg", "product14.jpg", "product15.jpg",
  "product16.jpg", "product17.jpg", "product18.jpg", "product19.jpg", "product20.jpg",
  "product21.jpg", "product22.jpg", "product23.jpg", "product24.jpg", "product25.jpg",
  "product26.jpg", "product27.jpg", "product28.jpg", "product29.jpg", "product30.jpg",
  "product31.jpg", "product32.jpg", "product33.jpg", "product34.jpg", "product35.jpg",
  "product36.jpg", "product37.jpg", "product38.jpg", "product39.jpg", "product40.jpg",
  "product41.jpg", "product42.jpg", "product43.jpg", "product44.jpg", "product45(1).jpg",
  "product46.jpg", "product47.jpg", "product48.jpg", "product49.jpg", "product50.jpg",
  "product51.jpg", "product52.jpg", "product53.jpg", "product54.jpg", "product55.jpg"
];

// ---------------- RENDER PRODUCTS ----------------
const productGrid = document.querySelector(".product-grid");

products.forEach((file, index) => {
  const productName = `PRODUCT ${index + 1}`;

  const productCard = document.createElement("div");
  productCard.classList.add("product-card");

  productCard.innerHTML = `
    <img src="images/${file}" alt="${productName}">
    <h2 class="product-name">${productName}</h2>
    <a href="#" class="inquire-btn">Inquire Now</a>
  `;

  productGrid.appendChild(productCard);
});

// ---------------- WHATSAPP INQUIRY ----------------
document.querySelectorAll(".product-card").forEach(card => {
  const productName = card.querySelector(".product-name").innerText;
  const btn = card.querySelector(".inquire-btn");

  btn.addEventListener("click", (e) => {
    e.preventDefault(); // stop default empty link
    const message = `Hi, I would like to inquire about ${productName}`;
    const encodedMsg = encodeURIComponent(message);
    const waLink = `https://wa.me/${shopNumber}?text=${encodedMsg}`;
    window.open(waLink, "_blank"); // open in new tab or WhatsApp app
  });
});
