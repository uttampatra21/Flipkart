const productsObj = [
  {
    title: "Terrific Purches",
    det: "indian unit,great 📷 ,great display",
    date: "Verified Purchase 11 months ago",
  },
  {
    title: "Briliant",
    det: "Just WOW!! Best in all segment!!",
    date: "Verified Purchase 10 months ago",
  },
  {
    title: "Best in the market!",
    det: "Superb performance and well.",
    date: "Verified Purchase 10 months ago",
  },
  {
    title: "top notch!",
    det: "loved this phone  ❤️🔥🔥",
    date: "Verified Purchase 10 months ago",
  },
  {
    title: "Highly recommended",
    det: "Best phone forever and Good Gaming Experience and Battery life",
    date: "Verified Purchase 4 months ago",
  },
  {
    title: "Simply Awesome",
    det: "Best ❤️🔥🔥",
    date: "Verified Purchase 10 months ago",
  },
  {
    title: "Briliant",
    det: "Awesome with best camera quality 48 megapixel is 👌",
    date: "Verified Purchase 3 months ago",
  },
  {
    title: "Perfect Product",
    det: "Perfect Product !",
    date: "Verified Purchase 1 years ago",
  },
  {
    title: "Delightful",
    det: "Worth upgrading the best phone i got 😊",
    date: "Verified Purchase 2 months ago",
  },
  {
    title: "Super!",
    det: "Very good product thankyou flipkart ⭐⭐⭐⭐⭐👌👌",
    date: "Verified Purchase 5 months ago",
  },
  {
    title: "perfect!",
    det: "Super smart phone at a very reasonable price.The same configuration mobile costs more than 15 for different brands.👌👌",
    date: "Verified Purchase 1 months ago",
  },
  {
    title: "Excelent!",
    det: "Value 📱 for money 😌👌🏻Awesome camera performance ❣️",
    date: "Verified Purchase 11 months ago",
  },
  {
    title: "Super !",
    det: "One of the best phone i got",
    date: "Verified Purchase 4 months ago",
  },
  {
    title: "Delightful",
    det: "Worth upgrading  😊",
    date: "Verified Purchase 2 months ago",
  },
  {
    title: "Terrific Purches",
    det: "indian unit,great 📷 ,great display",
    date: "Verified Purchase 11 months ago",
  },
  {
    title: "Wonderful !",
    det: "Awesone product in less price 😊.",
    date: "Verified Purchase 5 months ago",
  },
];

const reviews = document.getElementById("reviews");
const itemsList = productsObj
  .map((x) => {
    const { title, det, date } = x;
    return `
    <div class="reviews-cont">
    <div class="name">
      <div class="rating-star">
        <i class="bx bxs-star"></i><i class="bx bxs-star"></i
        ><i class="bx bxs-star"></i><i class="bx bxs-star"></i
        ><i class="bx bxs-star"></i>
      </div>
      <span>${title}</span>
    </div>
    <div class="rew-det">${det}</div>
    <div class="verified">
      <i class="bx bx-check-circle"></i>
      <span>${date}</span>
    </div>
  </div>
  <hr />
    `;
  })
  .join("");

reviews.innerHTML = itemsList;
