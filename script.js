let phone = "91 8209207135";

function order(name, price) {
  let message = `Hi, I want to order ${name} - ₹${price}`;
  let url = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);
  window.open(url);
}
