import { assetUrl } from '../utils/assetPath'

export function initToppings() {
(() => {
const toppings = [
{
    id: "sprinkles",
    img: assetUrl('images/topping/topping-sprinkles.png'),
    title: "Rainbow Sprinkles",
    desc: "Colorful crunch that adds a cheerful snap to every lick.",
    price: "+$0.50",
    type: "Crunchy",
    popularity: "★★★★★"
},
{
    id: "choco-sauce",
    img: assetUrl('images/topping/topping-choco.png'),
    title: "Chocolate Drizzle",
    desc: "Silky cocoa ribbons that melt into the scoop.",
    price: "+$0.70",
    type: "Syrupy",
    popularity: "★★★★★"
},
{
    id: "caramel-sauce",
    img: assetUrl('images/topping/topping-caramel.png'),
    title: "Caramel Swirl",
    desc: "Buttery sweetness that clings to the edges—dangerously moreish.",
    price: "+$0.70",
    type: "Syrupy",
    popularity: "★★★★☆"
},
{
    id: "oreos",
    img: assetUrl('images/topping/topping-oreos.png'),
    title: "Crushed Cookies",
    desc: "Chocolate cookie crumble for a chunky, creamy contrast.",
    price: "+$0.90",
    type: "Crunchy",
    popularity: "★★★★★"
},
{
    id: "almonds",
    img: assetUrl('images/topping/topping-almonds.png'),
    title: "Toasted Almonds",
    desc: "Warm, nutty bite that plays nice with every flavor.",
    price: "+$1.00",
    type: "Nutty",
    popularity: "★★★★☆"
},
{
    id: "whip",
    img: assetUrl('images/topping/topping-whip.png'),
    title: "Whipped Cream",
    desc: "Light, cloudlike crown for a classic finish.",
    price: "+$0.60",
    type: "Creamy",
    popularity: "★★★★☆"
}
];

function createToppingCard(topping) {
  return `
    <div class="slide">
      <div class="card border-info">
        <img src="${topping.img}"
             class="card-img-top clickable"
             alt="${topping.title}"
             role="button"
             data-bs-toggle="collapse"
             data-bs-target="#desc-${topping.id}"
             aria-expanded="false"
             aria-controls="desc-${topping.id}">
        <div class="card-body">
          <h5 class="card-title mb-0">${topping.title}</h5>
        </div>
        <div id="desc-${topping.id}" class="collapse">
          <div class="card-body pt-0">
            <p class="card-text">${topping.desc}</p>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">Extra price: ${topping.price}</li>
              <li class="list-group-item">Topping Type: ${topping.type}</li>
              <li class="list-group-item">Popularity: ${topping.popularity}</li>
            </ul>
            <a href="#" class="btn btn-primary mt-3">Add Topping</a>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Inject slides
const track = document.getElementById('toppingTrack');
track.innerHTML = toppings.map(createToppingCard).join('');

// Arrow scrolling for toppings
const viewport = document.getElementById('toppingViewport');
const wrapper = document.querySelector('.topping-slider');  // Scope to topping
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