// Shopping Cart Logic
let cart = [];

// Add to cart function
function addToCart(name, price) {
    const product = { name, price, quantity: 1 };
    
    // Check if product already in cart
    const existingProduct = cart.find(item => item.name === name);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push(product);
    }
    
    updateCartCount();
}

// Update cart count in the header
function updateCartCount() {
    const cartCountElement = document.getElementById('cart-count');
    const totalItems = cart.reduce((sum, product) => sum + product.quantity, 0);
    cartCountElement.innerText = totalItems;
}

// Add event listeners to buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const name = button.getAttribute('data-name');
        const price = parseFloat(button.getAttribute('data-price'));
        addToCart(name, price);
    });
});

