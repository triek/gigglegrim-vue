export function initFlavors() {
(() => {
const flavors = [
{
    id: "vanilla",
    img: "/images/flavor/flavor-vanilla.png",
    title: "Vanilla Delight",
    desc: "A creamy classic with a taste that feels familiar, even if you've never tried it before.",
    price: "$4.50",
    type: "Classic",
    popularity: "★★★★★"
},
{
    id: "choco",
    img: "/images/flavor/flavor-choco.png",
    title: "Chocolate Heaven",
    desc: "Rich and smooth, with a depth of cocoa that seems to draw you in a little further with every bite.",
    price: "$5.00",
    type: "Rich & Creamy",
    popularity: "★★★★★"
},
{
    id: "strawberry",
    img: "/images/flavor/flavor-strawberry.png",
    title: "Strawberry Bliss",
    desc: "Fresh strawberries swirled into creamy sweetness, with a flavor that lingers like a memory you can't quite place.",
    price: "$4.80",
    type: "Fruity",
    popularity: "★★★★☆"
},
{
    id: "mint",
    img: "/images/flavor/flavor-mint.png",
    title: "Mint Choco Chip",
    desc: "Cool, refreshing mint blended with crunchy chocolate chips - the perfect balance of fresh and indulgent.",
    price: "$4.70",
    type: "Refreshing",
    popularity: "★★★★☆"
},
{
    id: "cookie",
    img: "/images/flavor/flavor-cookie.png",
    title: "Cookies & Cream",
    desc: "Crunchy cookie chunks swirled into smooth cream, making every bite a delightful mix of textures and flavors.",
    price: "$5.20",
    type: "Classic Combo",
    popularity: "★★★★★"
},
{
    id: "caramel",
    img: "/images/flavor/flavor-caramel.png",
    title: "Caramel Swirl",
    desc: "Velvety caramel ribbons running through creamy vanilla, with just the right touch of buttery sweetness.",
    price: "$5.30",
    type: "Sweet & Smooth",
    popularity: "★★★★☆"
}
];

function createFlavorCard(flavor) {
  return `
    <div class="slide">
      <div class="card border-info">
        <img src="${flavor.img}"
             class="card-img-top clickable"
             alt="${flavor.title}"
             role="button"
             data-bs-toggle="collapse"
             data-bs-target="#desc-${flavor.id}"
             aria-expanded="false"
             aria-controls="desc-${flavor.id}">
        <div class="card-body">
          <h5 class="card-title mb-0">${flavor.title}</h5>
        </div>
        <div id="desc-${flavor.id}" class="collapse">
          <div class="card-body pt-0">
            <p class="card-text">${flavor.desc}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Average price: ${flavor.price}</li>
              <li class="list-group-item">Flavor Type: ${flavor.type}</li>
              <li class="list-group-item">Popularity: ${flavor.popularity}</li>
            </ul>
            <a href="#" class="btn btn-primary mt-3">Learn More</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Inject slides
const track = document.getElementById('flavorTrack');
track.innerHTML = flavors.map(createFlavorCard).join('');

// Arrow scrolling for flavor
const viewport = document.getElementById('flavorViewport');
const wrapper  = document.querySelector('.flavor-slider');  // Scope to flavor
const prevBtn = wrapper.querySelector('.slider-arrow.prev');
const nextBtn = wrapper.querySelector('.slider-arrow.next');

function scrollAmount() {
  // Scroll exactly one "page" (what’s visible now)
  return viewport.clientWidth;
}

prevBtn.addEventListener('click', () => {
  viewport.scrollBy({ left: -scrollAmount(), behavior: 'smooth' });
});

nextBtn.addEventListener('click', () => {
  viewport.scrollBy({ left: scrollAmount(), behavior: 'smooth' });
});

// Optional: disable arrows at ends (nice UX)
function updateArrows() {
  const maxScroll = viewport.scrollWidth - viewport.clientWidth - 1; // -1 for rounding
  prevBtn.disabled = viewport.scrollLeft <= 0;
  nextBtn.disabled = viewport.scrollLeft >= maxScroll;
}
viewport.addEventListener('scroll', updateArrows);
window.addEventListener('resize', updateArrows);
updateArrows();
})();
}