 // Cart object to store items and total
 let cart = [];
 let totalPrice = 0;

 // Function to add items to cart
 function addToCart(itemName, itemPrice) {
   let itemExists = false;

   // Check if item already exists in cart, if so, increase quantity
   cart.forEach(item => {
     if (item.name === itemName) {
       item.quantity += 1;
       itemExists = true;
     }
   });

   // If item doesn't exist, add new item to cart
   if (!itemExists) {
     cart.push({ name: itemName, price: itemPrice, quantity: 1 });
   }

   // Update total price
   totalPrice += itemPrice;

   // Update the cart UI
   updateCartUI();
 }

 // Function to update cart UI
 function updateCartUI() {
   let cartItems = document.getElementById('cart-items');
   cartItems.innerHTML = ''; // Clear cart content

   // Display cart items
   cart.forEach(item => {
     cartItems.innerHTML += <p>${item.name} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}</p>;
   });

   // Update total price
   document.getElementById('total').innerHTML = Total : $${totalPrice.toFixed(2)};

   // If cart is empty, show message
   if (cart.length === 0) {
     cartItems.innerHTML = '<div class="empty-cart">Your cart is empty.</div>';
   }
 }