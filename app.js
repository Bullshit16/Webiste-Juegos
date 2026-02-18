const nextButton = document.querySelector('.next-btn');
const video = document.querySelector('.hero-video');

const movieList = ['videos/hero-1.mp4','videos/hero-2.mp4','videos/hero-3.mp4','videos/hero-4.mp4',];

let index = 0;
nextButton.addEventListener('click', function() {
    index+= 1;
    video.src = movieList[index];
    
    if(index === 3){
        index = 1;

    }
});

let cart = [];
let total = 0;

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;

    renderCart();
}

function renderCart() {
    const list = document.getElementById("cart-items");
    list.innerHTML = "";

    cart.forEach((item, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            ${item.name} <span>$${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">❌</button>
        `;
        list.appendChild(li);
    });
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);      
    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;
    renderCart();
}

function toggleCart() {
    document.getElementById("cart").classList.toggle("active");
}

function openPayment() {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    document.getElementById("payment").style.display = "flex";
}

function closePayment() {
    document.getElementById("payment").style.display = "none";
}

function processPayment() {
    alert("✅ Pago realizado con éxito");

    cart = [];
    total = 0;

    document.getElementById("cart-items").innerHTML = "";
    document.getElementById("total").innerText = "0";
    document.getElementById("cart-count").innerText = "0";

    closePayment();
    toggleCart();
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        alert("✅ Mensaje enviado correctamente");
        form.reset();
    });
});