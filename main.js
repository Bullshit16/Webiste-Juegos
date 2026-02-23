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
    file: "downloads/Pokemon - Edicion Rojo Fuego (Spain) (1).zip"
}
,

  
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
    file: "downloads/Fire Emblem - the Sacred Stones GBA.zip"
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
    file: "downloads/0404 - Spider-Man - The Movie (U)(Mode7).zip"
},
{
    name: "Need For Speed Underground",
    price: 5,
    categories: ["carreras", "deporte"],
    platform: "emulador",
    img: "images/nfs-underground-gba.jpg",
    file: "downloads/1338 - Need For Speed - Underground (U)(Mode7).zip"

},
{
    name: "2010 FIFA World Cup South Africa",
    price: 6,
    categories: ["deporte", "futbol"],
    platform: "emulador",
    img: "images/2010-fifa-world-cup.jpg",
    file: "downloads/2010 FIFA World Cup South Africa (Europe).iso"
},

{
    name: "Pro Evolution Soccer 2013",
    price: 6,
    categories: ["deporte", "futbol"],
    platform: "emulador",
    img: "images/pes-2013.jpg",
    file: "downloads/3012 - Pro Evolution Soccer 2013 (Europe) (En,Nl,Sv,Ru,Tr).iso"
},

{
    name: "Ben 10 Protector of Earth",
    price: 5,
    categories: ["accion", "aventura"],
    platform: "emulador",
    img: "images/ben10.jpg",
    file: "downloads/Ben 10 - Protector of Earth (Europe).iso"
},

{
    name: "Daxter",
    price: 5,
    categories: ["accion", "aventura"],
    platform: "emulador",
    img: "images/dexter.jpg",
    file: "downloads/Daxter (Europe).iso"
},

{
    name: "Def Jam Fight for NY The Takeover",
    price: 6,
    categories: ["peleas", "accion"],
    platform: "consola",
    img: "images/def-jam.jpg",
    file: "downloads/Def Jam - Fight for NY - The Takeover (Europe).iso"
},

{
    name: "God of War Chains of Olympus",
    price: 8,
    categories: ["accion", "aventura"],
    platform: "consola",
    img: "images/gow-chains.jpg",
    file: "downloads/God of War - Chains of Olympus (Europe).iso"
},

{
    name: "God of War Ghost of Sparta",
    price: 8,
    categories: ["accion", "aventura"],
    platform: "consola",
    img: "images/gow-ghost.jpg",
    file: "downloads/God of War Ghost of Sparta.iso"
},

{
    name: "Metal Gear Solid Peace Walker",
    price: 7,
    categories: ["accion", "sigilo"],
    platform: "emulador",
    img: "images/mgs-peace-walker.jpg",
    file: "downloads/Metal Gear Solid - Peace Walker (Europe).iso"
},

{
    name: "MLB 11 The Show",
    price: 5,
    categories: ["deporte", "beisbol"],
    platform: "emulador",
    img: "images/mlb-11.jpg",
    file: "downloads/MLB 11 - The Show.iso"
},

{
    name: "Need for Speed Most Wanted 5-1-0",
    price: 6,
    categories: ["carreras", "deporte"],
    platform: "emulador",
    img: "images/nfs-most-wanted.jpg",
    file: "downloads/Need for Speed - Most Wanted 5-1-0 (Europe).iso"
},

{
    name: "WWE 2K11",
    price: 6,
    categories: ["lucha", "deporte"],
    platform: "emulador",
    img: "images/wwe-2k11.jpg",
    file: "downloads/rm-wwe2k11.iso"
},

{
    name: "WWE All Stars",
    price: 6,
    categories: ["peleas", "deporte"],
    platform: "consola",
    img: "images/wwe-all-stars.jpg",
    file: "downloads/WWE All Stars (Europe).iso"
},
{
    name: "Mario Superstar Baseball",
    price: 6,
    categories: ["deporte"],
    platform: "emulador",
    img: "images/mario-baseball.jpg",
    file: "downloads/Mario Superstar Baseball (USA).nkit"
},

{
    name: "Super Mario Strikers",
    price: 6,
    categories: ["deporte", "futbol"],
    platform: "emulador",
    img: "images/mario-strikers.jpg",
    file: "downloads/Super Mario Strikers (USA).nkit.iso"
},

{
    name: "Super Mario Sunshine",
    price: 6,
    categories: ["aventura"],
    platform: "emulador",
    img: "images/mario-sunshine.jpg",
    file: "downloads/Super Mario Sunshine (Europe) (En,Fr,De,Es,It).iso"
}
];


const container = document.getElementById("gamesContainer");


let cart = [];
let total = 0;

/* Cargar carrito */
document.addEventListener("DOMContentLoaded", loadCart);

function addToCart(name, price, button = null) {

    const exists = cart.some(item => item.name === name);

    if (exists) {
        alert("Este juego ya está agregado al carrito");
        return;
    }

    cart.push({ name, price });
    total += price;

    saveCart();
    renderCart();
    showToast();

    // Actualizar todos los botones del mismo juego
    updateAllButtons(name);
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

    updateGameButtons();
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    saveCart();
    renderCart();
}


function openPayment() {
    if (cart.length === 0) {
        alert("El carrito está vacío");
        return;
    }

    document.getElementById("payment").style.display = "flex";

    // limpiar estado anterior del pago
    const messageDiv = document.getElementById("paymentMessage");
    messageDiv.innerText = "";
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

    const gamePage = `juegos/${game.name.toLowerCase().replace(/\s+/g, '-')}.html`;

    card.addEventListener("click", (e) => {
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
      <button onclick="addToCart('${game.name}', ${game.price}, this)">
        Agregar
      </button>
    `;

    container.appendChild(card);
  });

  updateGameButtons(); // ⭐ AQUÍ
}


renderGames(shuffleArray([...games]));
updateGameButtons();

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

if (filtered.length === 0) {
    container.innerHTML = `
        <div class="no-results">
            <h3>❌ Juego no encontrado</h3>
        </div>
    `;
    return;
}

if (platform === "all") {
    renderGames(shuffleArray([...filtered]));
} else {
    renderGames(filtered);
}
 
}












//FUNCION DE PAGO

// ----------------------
// Procesamiento de pago
// ----------------------
function processPayment() {
    const cardNumber = document.getElementById("cardNumber").value.trim();
    const cardDate   = document.getElementById("cardDate").value.trim();
    const cardCVV    = document.getElementById("cardCVV").value.trim();
    const cardName   = document.getElementById("cardName").value.trim();

    if (!cardNumber || !cardDate || !cardCVV || !cardName) {
        alert("❌ Completa todos los datos de pago");
        return;
    }

    const cleanCard = cardNumber.replace(/\s/g, "");

    if (!/^\d{16}$/.test(cleanCard)) {
        alert("❌ La tarjeta debe tener 16 dígitos");
        return;
    }

    if (!/^\d{2} \/ \d{2}$/.test(cardDate)) {
        alert("❌ Fecha inválida (MM / AA)");
        return;
    }

    if (!/^\d{3}$/.test(cardCVV)) {
        alert("❌ CVV inválido");
        return;
    }

    // Capturar los items comprados en el momento de confirmar
    const purchasedItems = [...cart];

    // pasar purchasedItems hacia simulatePayment para evitar depender de cart más tarde
    simulatePayment(cardName, cleanCard, purchasedItems);
}

function simulatePayment(cardName, cardNumber, purchasedItems) {

    const messageDiv = document.getElementById("paymentMessage");

    messageDiv.style.color = "blue";
    messageDiv.innerText = "⏳ Procesando pago...";

    setTimeout(() => {

        if (!purchasedItems || purchasedItems.length === 0) {
            messageDiv.innerText = "Error: carrito vacío";
            return;
        }

        messageDiv.style.color = "green";
        messageDiv.innerText = "✅ Pago aprobado";

        // ejecutar compra con la copia inmutable de los items
        completePurchase(cardName, cardNumber, purchasedItems);

    }, 1500);
}
function completePurchase(cardName, cardNumber, purchasedItems) {
    // 1️⃣ mostrar factura inmediatamente con los items comprados
    showInvoice(cardName, cardNumber, purchasedItems);

    // 2️⃣ asegurar que el modal se renderice antes de descargas
    setTimeout(() => {
        // Filtrar solo juegos que tengan archivo descargable
        const downloadableItems = purchasedItems.filter(item => {
            const game = games.find(g => g.name === item.name);
            return game?.file;
        });

        if (downloadableItems.length > 0) {
            downloadPurchasedGames(downloadableItems);
        } else {
            console.log("Ningún juego tiene archivo para descargar");
        }

        // 3️⃣ limpiar carrito DESPUÉS de descargas
        cart = [];
        total = 0;
        saveCart();
        renderCart();

        // ❌ NO cerrar el pago aquí
        // ❌ NO limpiar los campos aquí, se hará cuando el usuario cierre el modal de pago o factura

    }, 500); // 500ms asegura que el modal se pinte antes de iniciar descargas
}


function downloadPurchasedGames(items) {
    items.forEach(item => {
        const gameData = games.find(g => g.name === item.name);

        if (gameData && gameData.file) {
            const link = document.createElement("a");
            link.href = gameData.file;
            link.download = gameData.name; // nombre amigable del archivo
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        } else {
            console.log(`El juego ${item.name} no tiene archivo para descargar`);
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




function showToast() {
    const toast = document.getElementById("toast");
    toast.classList.add("show");

    setTimeout(() => {
        toast.classList.remove("show");
    }, 1500);
} 















function updateGameButtons() {

    const buttons = document.querySelectorAll(".card button");

    buttons.forEach(btn => {
        const card = btn.closest(".card");
        const gameName = card.querySelector("h3").innerText;

        const exists = cart.some(item => item.name === gameName);

        if (exists) {
            btn.classList.add("disabled");
            btn.innerText = "Ya agregado";
            btn.disabled = true;
        } else {
            btn.classList.remove("disabled");
            btn.innerText = "Agregar";
            btn.disabled = false;
        }
    });
}




// ESPERAR QUE CARGUE LA PAGINA
document.addEventListener("DOMContentLoaded", () => {

    const cardNumber = document.getElementById("cardNumber");
    const cardDate = document.getElementById("cardDate");
    const cardCVV = document.getElementById("cardCVV");
    const cardName = document.getElementById("cardName");

    // TARJETA → 1234 5678 9012 3456
    cardNumber.addEventListener("input", function(e) {
        let value = e.target.value.replace(/\D/g, "");
        value = value.substring(0, 16);
        value = value.replace(/(.{4})/g, "$1 ").trim();
        e.target.value = value;
    });

    // FECHA → MM / AA
 cardDate.addEventListener("input", function(e) {
    let value = e.target.value.replace(/\D/g, "");
    value = value.substring(0, 4);

    // Cuando ya hay 2 dígitos, validar el mes
    if (value.length >= 2) {
        let month = parseInt(value.substring(0, 2), 10);

        if (month < 1) {
            month = 1;
        } else if (month > 12) {
            month = 12;
        }

        value = month.toString().padStart(2, "0") + value.substring(2);
    }

    // Agregar formato MM / AA
    if (value.length > 2) {
        value = value.replace(/(\d{2})(\d+)/, "$1 / $2");
    }

    e.target.value = value;
});

    // CVV → solo 3 digitos
    cardCVV.addEventListener("input", function(e) {
        let value = e.target.value.replace(/\D/g, "");
        e.target.value = value.substring(0, 3);
    });

    cardName.addEventListener("input", function(e) {
    let value = e.target.value;

    // Solo letras y espacios
    value = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");

    // Máximo 20 caracteres
    value = value.substring(0, 20);

    e.target.value = value;
});


    

    const openBtn = document.getElementById("openCart");
    const closeBtn = document.getElementById("closeCart");
  
    openBtn.addEventListener("click", () => {
    document.body.classList.add("cart-open");
    }); 

    closeBtn.addEventListener("click", () => {
    document.body.classList.remove("cart-open");
    });


});

/*Factura */
function showInvoice(cardName, cardNumber, items) {
    const modal = document.getElementById("invoiceModal");
    const details = document.getElementById("invoiceDetails");

    if (!items || items.length === 0) {
        details.innerHTML = "<p>No hay productos.</p>";
        return;
    }

    let totalFactura = 0;

    let rows = "";
    items.forEach(item => {
        totalFactura += item.price;
        rows += `
            <tr>
                <td>${item.name}</td>
                <td>1</td>
                <td>$${item.price}</td>
                <td>$${item.price}</td>
            </tr>
        `;
    });

    details.innerHTML = `
        <div class="invoice">
            <div class="invoice-header">
                <div>
                    <h1>GAME ZONE STORE</h1>
                    <p>Factura generada automáticamente</p>
                </div>
                <div class="invoice-info">
                    <h2>FACTURA</h2>
                    <p>${new Date().toLocaleString()}</p>
                </div>
            </div>

            <div class="invoice-client">
                <p><strong>Cliente:</strong> ${cardName}</p>
                <p><strong>Tarjeta:</strong> **** **** **** ${cardNumber.slice(-4)}</p>
            </div>

            <table class="invoice-table">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Cant.</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    ${rows}
                </tbody>
            </table>

            <div class="invoice-total">
                <h2>Total: $${totalFactura}</h2>
            </div>

            <div class="invoice-footer">
                <p>Gracias por tu compra 🎮</p>
            </div>
        </div>
    `;

    modal.style.display = "flex";
    modal.classList.add("show");
}
function closeInvoice() {
    const modal = document.getElementById("invoiceModal");
    modal.style.display = "none";
    modal.classList.remove("show");

    // Limpiar carrito y campos de tarjeta para próxima compra
    cart = [];
    total = 0;
    saveCart();
    renderCart();
    clearCardFields();
}
function closePayment() {
    const payment = document.getElementById("payment");
    payment.style.display = "none";
    clearCardFields(); // ✅ solo limpiar tarjetas al cerrar pago
}

function clearCardFields() {
    document.getElementById("cardNumber").value = "";
    document.getElementById("cardDate").value = "";
    document.getElementById("cardCVV").value = "";
    document.getElementById("cardName").value = "";
}
function printInvoice() {
    const modal = document.getElementById("invoiceModal");
    modal.style.display = "flex"; // asegurarse que el modal esté visible
    window.print();
}

function updateAllButtons(gameName) {

    const buttons = document.querySelectorAll("button");

    buttons.forEach(btn => {

        const onclickAttr = btn.getAttribute("onclick");

        if (!onclickAttr) return;

        if (onclickAttr.includes(gameName)) {
            btn.classList.add("disabled");
            btn.innerText = "Ya agregado";
            btn.disabled = true;
        }
    });
} 

document.addEventListener("DOMContentLoaded", () => {

    cart.forEach(item => {
        updateAllButtons(item.name);
    });

});