const products = [
    { id: 1, name: 'Laptop', price: 1000, description: 'High performance laptop', image: 'images/laptop.jpg', category: 'Electronics' },
    { id: 2, name: 'Headphones', price: 100, description: 'Noise-cancelling headphones', image: 'images/headphone.jpg', category: 'Accessories' },
    { id: 3, name: 'Smartphone', price: 500, description: 'Latest model smartphone', image: 'images/smartphone.jpg', category: 'Electronics' },
];

function searchItem(){
    const searchItemText = document.getElementById("searchText").value;
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    let productsOut = products.filter(a => a.name.toLowerCase().includes(searchItemText.toLowerCase())); 
    productsOut.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="200px">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.category}</p>
            <p class="price">&#8377;${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.append(productElement);
    });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Render products on page
function renderProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}" width="200px">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>${product.category}</p>
            <p class="price">&#8377;${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        
        productList.append(productElement);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartSummary();
}

// Update cart count and total
function updateCartSummary() {
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    document.getElementById('cart-count').textContent = cartCount;
}

// Toggle cart modal visibility
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'none' || modal.style.display === '' ? 'flex' : 'none';
    renderCart();
}

// Render cart items in modal
function renderCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            ${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}
            <button onclick="removeItem(${item.id})">Remove</button>
        `;
        cartItemsList.appendChild(cartItem);
    });

    updateCartSummaryInModal();
}

function updateCartSummaryInModal() {
    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
    const tax = (subtotal * 0.1).toFixed(2);
    const discount = subtotal > 500 ? (subtotal * 0.15).toFixed(2) : '0.00';
    const total = (parseFloat(subtotal) + parseFloat(tax) - parseFloat(discount)).toFixed(2);

    document.getElementById('subtotal').textContent = subtotal;
    document.getElementById('tax').textContent = tax;
    document.getElementById('discount').textContent = discount;
    document.getElementById('total').textContent = total;
}

function removeItem(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartSummary();
}

function clearCart() {
    cart = [];
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
    updateCartSummary();
}

function checkout() {
    alert('Proceeding to checkout...');
    clearCart();
}

renderProducts();
updateCartSummary();
