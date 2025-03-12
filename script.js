document.addEventListener("DOMContentLoaded", () => {
    let cart = [];

    // Selecting elements
    let cartButton = document.getElementById("cart-button");
    let cartContainer = document.querySelector(".cart");
    let cartItems = document.getElementById("cart-items");
    let cartTotal = document.getElementById("cart-total");
    let cartCount = document.getElementById("cart-count");

    // Check if cartButton exists
    if (!cartButton) {
        console.error("Cart button not found! Make sure your cart button has the correct ID.");
        return;
    }

    // Add to Cart Functionality
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", function() {
            const product = this;
            const name = product.getAttribute("data-name");
            const price = parseFloat(product.getAttribute("data-price"));

            if (!name || isNaN(price)) {
                console.error("Product details missing! Ensure 'data-name' and 'data-price' are set.");
                return;
            }

            cart.push({ name, price });
            updateCart();
        });
    });

    // Toggle Cart Visibility
    cartButton.addEventListener("click", () => {
        cartContainer.classList.toggle("open");
    });

    // Update Cart Display
    function updateCart() {
        cartItems.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            total += item.price;
            cartItems.innerHTML += <li>${item.name} - Rs ${item.price} <button onclick="removeItem(${index})">❌</button></li>;
        });

        cartTotal.innerText = total;
        cartCount.innerText = cart.length;
    }

    // Remove Item from Cart
    window.removeItem = function(index) {
        cart.splice(index, 1);
        updateCart();
};
});
