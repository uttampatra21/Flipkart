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
  {
    id: "2322",
    title: "APPLE iPhone 12 Pro ...",
    img: "https://rukminim2.flixcart.com/image/832/832/kg8avm80/mobile/s/9/w/apple-iphone-12-pro-dummyapplefsn-original-imafwgbrnpyygbv9.jpeg?q=70",
    currentPrice: "1,10,999",
    discountedPrice: "17,899",
  },
  {
    id: "889",
    title: "One Plus 11R 5G ...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/0/f/7/11r-5g-5011102525-oneplus-original-imagn3afhvqpgbgg.jpeg?q=70",
    currentPrice: "39,999",
    discountedPrice: "12,899",
  },
  {
    id: "8890",
    title: "ASUS ROG 5s Pro 5G ...",
    img: "https://rukminim2.flixcart.com/image/832/832/k1zbssw0/mobile/t/w/m/asus-rog-phone-ii-zs660kl-1a040in-original-imafhfzcgzhz544n.jpeg?q=70",
    currentPrice: "79,999",
    discountedPrice: "16,899",
  },
  {
    id: "88999",
    title: "OPPO Reno10 5G ...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/e/z/d/-original-imagrn6d7ggk4wjp.jpeg?q=70",
    currentPrice: "32,999",
    discountedPrice: "11,899",
  },
  {
    id: "8899",
    title: "IQOO 9T 5G ...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/t/c/l/-original-imaghs4twjxsg6tg.jpeg?q=70",
    currentPrice: "59,999",
    discountedPrice: "18,999",
  },
  {
    id: "77799",
    title: "Infinix Zero Ultra 5G ...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/j/u/t/-original-imagh2jqy8pkhdhz.jpeg?q=70",
    currentPrice: "49,999",
    discountedPrice: "14,999",
  },
  {
    id: "77799",
    title: "APPLE iPhone 14 ...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/b/u/f/-original-imaghxa5hvapbfds.jpeg?q=70",
    currentPrice: "79,999",
    discountedPrice: "24,999",
  },
  {
    id: "7299",
    title: "APPLE iPhone 12 ...",
    img: "https://rukminim2.flixcart.com/image/832/832/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=70",
    currentPrice: "69,999",
    discountedPrice: "19,999",
  },
  {
    id: "7199",
    title: "MOTOROLA Edge 30 ...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/2/6/s/-original-imaggfmgmz8ss6gb.jpeg?q=70",
    currentPrice: "69,999",
    discountedPrice: "12,999",
  },
  {
    id: "1199",
    title: "SAMSUNG Galaxy Z...",
    img: "https://rukminim2.flixcart.com/image/832/832/xif0q/mobile/3/2/r/galaxy-fold5-sm-f946blbhins-samsung-original-imagru5ugghfnwnj.jpeg?q=70",
    currentPrice: "1,89,999",
    discountedPrice: "32,999",
  },
];

const phonesItems = document.getElementById("phones-items");

const itemsList = productsObj
  .map((x) => {
    const { id, img, title, currentPrice, discountedPrice } = x;
    return `
   
    `;
  })
  .join("");

phonesItems.innerHTML = itemsList;
