const games = [
    {
        name: "Hollow Knight",
        price: 15,
        categories: ["aventura", "accion", "metroidvania"],
        platform: "pc",
        img: "images/hollow-knight.jpg",
        file: "downloads/hollow-knight.iso"
    },

    {
        name: "Fornite",
        price: 50,
        categories: ["accion", "guerra"],
        platform: "pc",
        img: "images/g4.jpg"
    },

    {
        name: "Call of Duty",
        price: 60,
        categories: ["guerra", "accion"],
        platform: "pc",
        img: "images/g1.jpg"
    },

    {
        name: "Clash Royale",
        price: 5,
        categories: ["accion", "estrategia"],
        platform: "movil",
        img: "images/l3.jpg"
    },

    {
        name: "Battlefield",
        price: 30,
        categories: ["guerra", "accion"],
        platform: "pc",
        img: "images/g2.jpg"
    },

    {
        name: "CTR",
        price: 20,
        categories: ["deporte", "carreras"],
        platform: "consola",
        img: "images/g5.jpg"
    },

    {
        name: "Free Fire",
        price: 20,
        categories: ["accion", "guerra"],
        platform: "movil",
        img: "images/l2.jpg"
    },

    {
        name: "Gears of War",
        price: 41,
        categories: ["guerra", "accion"],
        platform: "consola",
        img: "images/l6.jpg"
    },

    {
        name: "Cyberpunk",
        price: 10,
        categories: ["accion", "aventura"],
        platform: "pc",
        img: "images/l8.jpg"
    },

    {
        name: "Minecraft",
        price: 7,
        categories: ["aventura", "sandbox"],
        platform: "pc", 
        img: "images/mine.jpg"
    },
    {
    name: "Super Mario World",
    price: 5,
    categories: ["aventura", "plataformas"],
    platform: "emulador",
    img: "images/super-mario-world.jpg",
    file: "downloads/Super Mario World (USA).zip"
},

{
    name: "Pokemon Verde Hoja",
    price: 4,
    categories: ["aventura", "rpg"],
    platform: "emulador",
    img: "images/pokemon-verde-hoja.jpg",
    file: "downloads/Pokemon - Edicion Verde Hoja (Spain).zip"
},

{
    name: "Pokemon Esmeralda",
    price: 4,
    categories: ["aventura", "rpg"],
    platform: "emulador",
    img: "images/pokemon-esmeralda.jpg",
    file: "downloads/Pokemon - Edicion Esmeralda (Spain).zip"
},

{
    name: "Pokemon Rojo Fuego",
    price: 4,
    categories: ["aventura", "rpg"],
    platform: "emulador",
    img: "images/pokemon-rojo-fuego.jpg",
    file: "downloads/Pokemon - Edicion Rojo Fuego (Spain).zip"
}
,

    {
        name: "Sonic",
        price: 20,
        categories: ["accion", "aventura"],
        platform: "pc",
        img: "images/sonic.jpg"
    },

    {
        name: "Zelda",
        price: 25,
        categories: ["aventura", "accion"],
        platform: "emulador",
        img: "images/zelda-breath-of-the-wild_r19a.1920.webp",
        file: "downloads/Legend of Zelda, The - The Minish Cap (Europe) (En,Fr,De,Es,It).zip"
    },
    {
    name: "Fire Emblem",
    price: 6,
    categories: ["rpg", "estrategia"],
    platform: "emulador",
    img: "images/fire-emblem.jpg",
    file: "downloads/Fire Emblem (U).zip"
},

{
    name: "Fire Emblem Sacred Stones",
    price: 6,
    categories: ["rpg", "estrategia"],
    platform: "emulador",
    img: "images/fire-emblem-sacred-stones.jpg",
    file: "downloads/Fire Emblem - The Sacred Stones (U).zip"
},

{
    name: "Naruto Ninja Council 2",
    price: 5,
    categories: ["accion", "peleas"],
    platform: "emulador",
    img: "images/naruto-ninja-council-2.jpg",
    file: "downloads/Naruto - Ninja Council 2 (U).zip"
},

{
    name: "Pokemon Sapphire",
    price: 4,
    categories: ["aventura", "rpg"],
    platform: "emulador",
    img: "images/pokemon-sapphire.jpg",
    file: "downloads/Pokemon - Sapphire Version (U) (V1.1).zip"
},

{
    name: "Pokemon Ruby",
    price: 4,
    categories: ["aventura", "rpg"],
    platform: "emulador",
    img: "images/pokemon-ruby.jpg",
    file: "downloads/Pokemon - Ruby Version (U) (V1.1).zip"
},

{
    name: "Pokemon Black Special Palace",
    price: 4,
    categories: ["aventura", "rpg"],
    platform: "emulador",
    img: "images/pokemon-black.jpg",
    file: "downloads/Pokemon Black - Special Palace Edition 1 by MB Hacks (Red Hack) Goomba V2.2.zip"
},

{
    name: "Pokemon Jupiter",
    price: 4,
    categories: ["aventura", "rpg", "hack"],
    platform: "emulador",
    img: "images/pokemon-jupiter.jpg",
    file: "downloads/Pokemon Jupiter - 6.04 (Ruby Hack).zip"
},

{
    name: "Spider Man The Movie",
    price: 5,
    categories: ["accion", "aventura"],
    platform: "emulador",
    img: "images/spiderman-gba.jpg",
    file: "downloads/0404 - Spider-Man - The Movie (U)(Mode).zip"
},
{
    name: "Need For Speed Underground",
    price: 5,
    categories: ["carreras", "deporte"],
    platform: "emulador",
    img: "images/nfs-underground-gba.jpg",
    file: "downloads/1338 - Need For Speed - Underground (U)(Mode7).zip"

}
];


const container = document.getElementById("gamesContainer");


let cart = [];
let total = 0;

/* Cargar carrito */
document.addEventListener("DOMContentLoaded", loadCart);

function addToCart(name, price) {
    cart.push({ name, price });
    total += price;
    saveCart();
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

    document.getElementById("cart-count").innerText = cart.length;
    document.getElementById("total").innerText = total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    saveCart();
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




/* LOCAL STORAGE */
function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("total", total);
}

function loadCart() {
    const savedCart = JSON.parse(localStorage.getItem("cart"));
    const savedTotal = localStorage.getItem("total");

    if (savedCart) {
        cart = savedCart;
        total = Number(savedTotal);
        renderCart();
    }
}


function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

function renderGames(list) {
    container.innerHTML = "";

    list.forEach(game => {
        const card = document.createElement("div");
        card.classList.add("card");

        // Agregamos la ruta del juego como propiedad
        const gamePage = `juegos/${game.name.toLowerCase().replace(/\s+/g, '-')}.html`;

        // Evento click de la tarjeta
        card.addEventListener("click", (e) => {
            // Evita que se abra al hacer clic en el botón "Agregar"
            if (!e.target.closest("button")) {
                window.location.href = gamePage;
            }
        });

        card.innerHTML = `
            <img src="${game.img}">
            <h3>${game.name}</h3>

            <div class="badges">
                ${game.categories.map(cat => `<span class="badge">${cat}</span>`).join("")}
            </div>

            <p>$${game.price}</p>
            <p class="platform">🎮 ${game.platform.toUpperCase()}</p>


            <button onclick="addToCart('${game.name}', ${game.price})">
                Agregar
            </button>
        `;

        container.appendChild(card);
    });
}


renderGames(shuffleArray([...games]));



function filterGames() {
    const search = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const price = document.getElementById("priceFilter").value;
    const platform = document.getElementById("platformFilter").value;

    const emulatorNotice = document.getElementById("emulatorNotice");

    // 🔥 Mostrar u ocultar bloque de emulador
    if (platform === "emulador") {
        emulatorNotice.style.display = "block";
    } else {
        emulatorNotice.style.display = "none";
    }

    let filtered = games.filter(game => {

        let matchName = game.name.toLowerCase().includes(search);

        let matchCategory =
            category === "all" || game.categories.includes(category);

        let matchPlatform =
            platform === "all" || game.platform === platform;

        let matchPrice = true;
        if (price === "low") matchPrice = game.price < 19;
        if (price === "mid") matchPrice = game.price >= 20 && game.price <= 39;
        if (price === "high") matchPrice = game.price > 40;

        return matchName && matchCategory && matchPrice && matchPlatform;
    });

    // 🔥 Si está en "Todas las plataformas", mezclar
     if (platform === "all") {
     renderGames(shuffleArray([...filtered]));
   } else {
     renderGames(filtered);
   }
 
}












//FUNCION DE PAGO

function processPayment() {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardDate   = document.getElementById("cardDate").value.trim();
    const cardCVV    = document.getElementById("cardCVV").value.trim();
    const cardName   = document.getElementById("cardName").value.trim();

    // Limpieza inmediata si no hay datos
    clearCardFields();

    if (!cardNumber || !cardDate || !cardCVV || !cardName) {
        alert("❌ Completa todos los datos de pago");
        return;
    }

    if (cardNumber.length < 12) {
        alert("❌ Número de tarjeta inválido");
        return;
    }
    if (cardCVV.length < 3) {
        alert("❌ CVV inválido");
        return;
    }

    simulatePayment(cardName, cardNumber);
    
}

function simulatePayment(cardName, cardNumber) {
    const messageDiv = document.getElementById("paymentMessage");
    messageDiv.style.color = "blue";
    messageDiv.innerText = "⏳ Procesando pago...";

    setTimeout(() => {
        const success = Math.random() > 0.2; // 80% aprobadp
        clearCardFields(); // Limpiar tarjeta luego de procesar

        if (success) {
            completePurchase(cardName, cardNumber);
        } else {
            messageDiv.style.color = "red";
            messageDiv.innerText = "❌ Pago rechazado por el banco";
        }
    }, 2000);
}

function completePurchase(cardName, cardNumber) {

  const order = {
    id: Date.now(),
    buyer: cardName,
    items: cart,
    total: total,
    date: new Date().toLocaleString(),
    card: "**** **** **** " + cardNumber.slice(-4)
  };

  saveOrder(order);
  showInvoice(order);

  // 🔥 NUEVO SISTEMA
  askDownload(order.items);

  cart = [];
  total = 0;
  saveCart();
  renderCart();

  closePayment();
}




// Función para limpiar campos de tarjeta
function clearCardFields() {
    document.getElementById("cardNumber").value = "";
    document.getElementById("cardDate").value = "";
    document.getElementById("cardCVV").value = "";
    document.getElementById("cardName").value = "";
}

function saveOrder(order) {
    const orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));
}

function showInvoice(order) {
  const modal = document.getElementById("invoiceModal");
  const content = document.getElementById("invoiceContent");

  content.innerHTML = `
    <p><strong>Pedido:</strong> #${order.id}</p>
    <p><strong>Comprador:</strong> ${order.buyer}</p>
    <p><strong>Tarjeta:</strong> ${order.card}</p>
    <p><strong>Fecha:</strong> ${order.date}</p>

    <hr>

    <ul>
      ${order.items.map(i => `<li>${i.name} - $${i.price}</li>`).join("")}
    </ul>

    <hr>

    <p><strong>Total:</strong> $${order.total}</p>
  `;

  modal.style.display = "flex";
}

function closeInvoice() {
  document.getElementById("invoiceModal").style.display = "none";
  document.getElementById("invoiceContent").innerHTML = "";
}



function downloadPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  const text = document.getElementById("invoiceContent").innerText;

  doc.text("GameZone - Factura", 10, 10);
  doc.text(text, 10, 20);

  doc.save("factura-gamezone.pdf");
}


function downloadPurchasedGames(items) {
    items.forEach(item => {

        // Buscar el juego original en el array games
        const gameData = games.find(g => g.name === item.name);

        // Verificar si tiene archivo
        if (gameData && gameData.file) {

            const link = document.createElement("a");
            link.href = gameData.file;
            link.download = "";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

        }
    });
}


function redirectEmulator() {
    const device = document.getElementById("deviceSelect").value;

    if (device === "pc") {
        // Emulador para PC (mGBA recomendado)
        window.open("https://mgba.io/downloads.html", "_blank");
    } 
    else if (device === "android") {
        // My Boy! en Google Play
        window.open("https://play.google.com/store/apps/details?id=com.fastemulator.gba", "_blank");
    } 
    else {
        alert("Por favor selecciona un dispositivo");
    }
}


function askDownload(items) {

    const modal = document.getElementById("downloadModal");
    const list = document.getElementById("downloadList");

    list.innerHTML = "";

    items.forEach(item => {

        const gameData = games.find(g => g.name === item.name);

        if (gameData && gameData.file) {

            const div = document.createElement("div");

            div.innerHTML = `
                <p>${gameData.name}</p>
                <button onclick="downloadSingleGame('${gameData.file}', this)">
                    Descargar
                </button>
            `;

            list.appendChild(div);
        }
    });

    if (list.innerHTML === "") {
        list.innerHTML = "<p>No hay archivos disponibles para descargar.</p>";
    }

    modal.style.display = "flex";
}

function downloadSingleGame(filePath, button) {

    const link = document.createElement("a");
    link.href = filePath;
    link.download = "";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // 🔥 Desactivar botón después de descargar
    button.disabled = true;
    button.innerText = "Descargado";
}

function closeDownloadModal() {
    document.getElementById("downloadModal").style.display = "none";
}




