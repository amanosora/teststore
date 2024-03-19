const products = [
    {
        img: "img/cartimg/kaboompics_anonymous-female-in-trendy-outfit-with-bag-27773.jpg",
        name: "BAG",
        discountPrice: 189
    },
    {
        img: "img/cartimg/kaboompics_anonymous-female-in-trendy-outfit-with-bag-27773.jpg",
        name: "BAG",
        discountPrice: 189
    },
     {
        img: "img/cartimg/kaboompics_anonymous-female-in-trendy-outfit-with-bag-27773.jpg",
        name: "BAG",
        discountPrice: 189
    }
];


let html = "";
for (let i=0; i<products.length; i++) {
    html += `
        <div class="product-block">
            <a href="product.html">
                <div class="product-image-row">
                    <img class="product-image" src="${products[i].img}">
                </div>
                <div class="product-information">
                    <div class="product-text">
                        <p class="product-name">${products[i].name}</p>
                        <div class="add-success hidden-element">
                            <img class="check-icon" src="images/icons/check.png">
                            <p class="add-success-p">加入購物車</p>
                        </div>
                        <div class="product-price-row">
                            <div class="product-price">
                                <p class="discount-price">$${products[i].discountPrice}</p>
                                <p class="origin-price">$${products[i].originPrice}</p>
                            </div>
                            <img class="add-to-cart" src="images/icons/cart.png">
                        </div>
                    </div>
                </div>
            </a>
        </div>
    `;
}

document.querySelector(".index-product").innerHTML = html;

