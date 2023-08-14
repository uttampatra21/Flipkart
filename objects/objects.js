const productsObj = [
  {
    id: 1090,
    title: "SAMSUNG Galaxy S2 ..",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/q/q/w/galaxy-s23-ultra-5g-smartphone-sm-s918bzkcins-samsung-original-imagqjczezmgquhb.jpeg?q=70",
    currentPrice: "1,61,999",
    discountedPrice: "19,999",
  },
  {
    id: 1090,
    title: "APPLE iPhone 14 Pro ..",
    img: "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/l/8/r/-original-imaghxemnnnkd8bg.jpeg?q=70",
    currentPrice: "1,29,999",
    discountedPrice: "24,999",
  },
];

const phonesItems = document.getElementById("phones-items");

const itemsList = productsObj
  .map((x) => {
    const { id, img, title, currentPrice, discountedPrice } = x;
    return `
    <div class="samsung pro009">
    <div class="product-item-img">
      <img
        width="100px"
        height="120px"
        src=${img}
        alt=""
      />
      <div class="rating">
        4.7
        <span><i class="bx bxs-star" style="color: #ffffff"></i></span>
      </div>
    </div>
    <div className="product-title" >
    <p style="font-size:9px; padding-top:1px" >${title}</p>
    </div>
    <div class="product-price">
    
      <span class="current-price" style="text-decoration: line-through"
        >${currentPrice}</span
      >
      <span class="discount-price"
        ><i class="bx bx-rupee"></i><strong>${discountedPrice}</strong></span
      >
    </div>
  </div>
    `;
  })
  .join("");

phonesItems.innerHTML = itemsList;
