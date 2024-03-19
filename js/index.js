const products = [
    {
        img: "img/cartimg/kaboompics_candle-in-white-glass-with-label-on-linen-couch-27078.jpg",
        name: "蠟燭",
        discountPrice: 189
    },
    {
        img: "img/cartimg/kaboompics_candle-in-white-glass-with-label-on-linen-couch-27078.jpg",
        name: "蠟燭",
        discountPrice: 189
    },
     {
        img: "img/cartimg/kaboompics_candle-in-white-glass-with-label-on-linen-couch-27078.jpg",
        name: "蠟燭",
        discountPrice: 189
    }
];


let html = "";
for (let i=0; i<products.length; i++) {
    html += `
    <div class="index-cart">
    <div class="index-cart-1">
        <img src="${products[i].img}">
        <p class="index-cart-name">${products[i].name}</p>
        <br>
        <p class="index-cart-price">$${products[i].discountPrice}</p>
        <button class="index-cart-0"><img src="./img/Shopping Cart.png" alt=""></button>
    </div>
</div>
    `;
}

document.querySelector(".index-product").innerHTML = html;

