const productsObj = [
  {
    title: "Terrific Purches",
    det: "indian unit,great 📷 ,great display",
    date: "Verified Purchase 11 months ago",
  },
  {
    title: "Terrific Purches",
    det: "indian unit,great 📷 ,great display",
    date: "Verified Purchase 11 months ago",
  },
  {
    title: "Terrific Purches",
    det: "indian unit,great 📷 ,great display",
    date: "Verified Purchase 11 months ago",
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
