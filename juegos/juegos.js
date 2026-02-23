let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = Number(localStorage.getItem("total")) || 0;
function addToCart(name, price) {

    // Verificar si ya está agregado
    const alreadyAdded = cart.some(item => item.name === name);

    if (alreadyAdded) {
        alert("⚠️ Este juego ya está en el carrito");
        return;
    }

    cart.push({ name, price });
    total += price;

    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);

    // Buscar el botón correcto y deshabilitarlo
    const buttons = document.querySelectorAll(".buy");

    buttons.forEach(button => {
        if (button.getAttribute("onclick").includes(name)) {
            button.disabled = true;
            button.textContent = "✔ Agregado";
            button.classList.add("disabled");
        }
    });

    alert("✅ Juego agregado al carrito");
}

function goBack() {
  window.location.href = "../index1.html";
}


function toggleCard(element) {
  const card = element.parentElement;
  card.classList.toggle("active");
}



document.addEventListener("DOMContentLoaded", () => {

    const buttons = document.querySelectorAll(".buy");

    buttons.forEach(button => {

        const onclickAttr = button.getAttribute("onclick");

        if (!onclickAttr) return;

        const match = onclickAttr.match(/addToCart\('(.+?)'/);

        if (!match) return;

        const gameName = match[1];

        const alreadyAdded = cart.some(item => item.name === gameName);

        if (alreadyAdded) {
            button.disabled = true;
            button.textContent = "✔ Agregado";
            button.classList.add("disabled");
        }
    });
});