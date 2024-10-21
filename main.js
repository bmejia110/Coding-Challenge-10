//Task 2: Add event listners for product selection

// prices for size
const prices = {
    small: 45,
    medium: 50,
    large: 60   
};

// elements from DOM
const sizeSelector = document.getElementById("size-selector");
const productPrice = document.getElementById("product-Price");
const purchaseButton = document.getElementById("prurchase-button");

//updating price

function updatePrice() {
    const selectedSize = sizeSelector.value;
    const product = prices[selectedSize];
    priceDisplay.textContent = "$${product.price}";
}

sizeSelector.addEventListener("change", updatePrice);


//Task 3: Handle Stock Availability 
function sizeOptions() {
    for (const size in product) {
        const option = document.createElement("option");
        const product = productPrice[size];
        option.value = size;
        option.textcontent = 
    }
}

function updatPrinceAndStock() {
    const selectedSize = sizeSelector.value;
    const product = productPrice[selectedSize];
    priceDisplay.textcontent = "$${product.price}";
    purchaseButton.disabled = !product.inStock;

}

//Task 4: Create a Checkout event

purchaseButton.addEventListener(function() {
    const selectedSize = sizeSelector.value;
    const product = productPrice[selectedSize];
    
    if(product.inStock) {
        alert( "thanks for purchasing ${selectedSize}");
    } else {
        alert("sorry size is out of stock");
    }
});