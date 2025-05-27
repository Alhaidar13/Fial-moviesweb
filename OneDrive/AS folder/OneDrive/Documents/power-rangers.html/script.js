const products = [
    { id: 1, name: "Adidas UltraBoost 21", price: 2500000, img: "sepatu1.jpg" },
    { id: 2, name: "Adidas NMD R1", price: 2100000, img: "sepatu2.jpg" },
    { id: 3, name: "Adidas Superstar", price: 1850000, img: "sepatu3.jpg" },
    { id: 4, name: "Adidas Stan Smith", price: 1600000, img: "sepatu4.jpg" },
    { id: 5, name: "Adidas Gazelle", price: 1750000, img: "sepatu5.jpg" },
    { id: 6, name: "Adidas Yeezy Boost", price: 4500000, img: "sepatu6.jpg" },
    { id: 7, name: "Adidas Alphabounce", price: 2200000, img: "sepatu7.jpg" },
  ];
  
  const productsContainer = document.getElementById("products");
  const filterSelect = document.getElementById("filter-price");
  
  const modal = document.getElementById("product-modal");
  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalPrice = document.getElementById("modal-price");
  const modalBuyBtn = document.getElementById("modal-buy-btn");
  const closeModalBtn = document.getElementById("close-modal");
  
  const cartIcon = document.getElementById("cart-icon");
  const cartSidebar = document.getElementById("cart");
  const cartItemsList = document.getElementById("cart-items");
  const cartTotalEl = document.getElementById("cart-total");
  const checkoutBtn = document.getElementById("checkout-btn");
  
  let cart = [];
  let currentProduct = null;
  
  function formatPrice(price) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(price);
  }
  
  function createProductCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="images/${product.img}" alt="${product.name}" />
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${formatPrice(product.price)}</p>
        <button class="buy-btn">Beli Sekarang</button>
      </div>
    `;
  
    // Buka modal detail produk saat klik gambar atau tombol beli
    card.querySelector("img").addEventListener("click", () => openModal(product));
    card.querySelector(".buy-btn").addEventListener("click", () => {
      addToCart(product);
      alert(`Kamu membeli ${product.name}! Terima kasih 😊`);
    });
  
    return card;
  }
  
  function displayProducts(filter = "all") {
    productsContainer.innerHTML = "";
  
    let filteredProducts = products;
    if (filter === "below2m") {
      filteredProducts = products.filter(p => p.price < 2000000);
    } else if (filter === "above2m") {
      filteredProducts = products.filter(p => p.price >= 2000000);
    }
  
    filteredProducts.forEach(product => {
      productsContainer.appendChild(createProductCard(product));
    });
  }
  
  // Modal Functions
  function openModal(product) {
    currentProduct = product;
    modalImg.src = `images/${product.img}`;
    modalImg.alt = product.name;
    modalName.textContent = product.name;
    modalPrice.textContent = formatPrice(product.price);
    modal.style.display = "flex";
  }
  
  function closeModal() {
    modal.style.display = "none";
  }
  
  // Cart Functions
  function addToCart(product) {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ ...product, qty: 1 });
    }
    updateCartUI();
  }
  
  function updateCartUI() {
    // Update count icon
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cart-count").textContent = totalItems;
  
    // Update sidebar list
    cartItemsList.innerHTML = "";
    cart.forEach(item => {
      const li = document.createElement("li");
      li.textContent = `${item.name} x${item.qty}`;
      cartItemsList.appendChild(li);
    });
  
    // Update total price
    const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    cartTotalEl.textContent = `Total: ${formatPrice(totalPrice)}`;
  }
  
  // Toggle cart sidebar
  cartIcon.addEventListener("click", () => {
    cartSidebar.classList.toggle("active");
  });
  
  // Modal close event
  closeModalBtn.addEventListener("click", closeModal);
  
  // Close modal saat klik area luar modal-content
  window.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  
  // Modal beli tombol
  modalBuyBtn.addEventListener("click", () => {
    if (currentProduct) {
      addToCart(currentProduct);
      alert(`Kamu membeli ${currentProduct.name}! Terima kasih 😊`);
      closeModal();
    }
  });
  
  // Filter change
  filterSelect.addEventListener("change", (e) => {
    displayProducts(e.target.value);
  });
  
  // Load awal
  displayProducts();
  updateCartUI();
  