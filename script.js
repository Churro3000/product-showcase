// Replace with your shop's WhatsApp number in international format (no + or spaces)
const shopNumber = "2677166187";  

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
