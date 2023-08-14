const productsObj = [
  {
    id: "8899",
    title: "",
    img: "",
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
