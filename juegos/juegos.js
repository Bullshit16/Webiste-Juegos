let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = Number(localStorage.getItem("total")) || 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);

    alert("✅ Juego agregado al carrito");
}

function goBack() {
  window.location.href = "../index1.html";
}
