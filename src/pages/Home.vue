<template>
<section class="hero" data-active="home">
<body>
    <!-- Navigation bar (navbar.html) -->
    <div id="site-navbar"></div>

    <!-- Intro Carousel -->
    <div id="carouselExample" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <!-- Use indicators to navigate -->
        <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        
        <div class="carousel-inner">
            <!-- Three slides with captions, autoplay every 2s -->
            <div class="carousel-item active" data-bs-interval="3000">
                <img src="/images/shop1.png" class="d-block w-100" alt="Ice Cream Slide 1">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Your Anytime Treat Spot</h4>
                    <p>Bright, clean, and ready to serve, there's always a place here for you.</p>
                </div>  
            </div>
            
            <div class="carousel-item" data-bs-interval="3000">
                <img src="/images/shop3.png" class="d-block w-100" alt="Ice Cream Slide 2">
                <div class="carousel-caption d-none d-md-block">
                    <h4>The Flavor of History</h4>
                    <p>Decades of smiles, sprinkles, and stories - Since... a very long time ago</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img src="/images/icecream5.png" class="d-block w-100" alt="Ice Cream Slide 3">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Perfect Ice Cream</h4>
                    <p>Not a crumb out of place, some say it's always been this way.</p>
                </div>  
            </div>
        </div>
        
        <!-- Use arrows to navigate -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span aria-hidden="true">
                <i class="bi bi-chevron-left fs-1 text-white"></i>
            </span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span aria-hidden="true">
                <i class="bi bi-chevron-right fs-1 text-white"></i>
            </span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>

    <!-- Banner -->
    <div class="container cream-container">
        <div class="mx-auto text-center py-4">
            <h1 class="display-1 yeseva-one-regular text-center rgb-text">GiggleGrim IceCream</h1>
            <p class="lead text-center mx-5">
                Bringing smiles with every scoop, from the very first lick to the very last bite. Made fresh each day with bright colors, sweet swirls, and flavors you'll remember long after the lights go out.
            </p>
        </div>
    </div>

    <!-- Introduction -->
    <div class="container mt-3" id="introduction">
        <h2>About us</h2>
        <p>
            Welcome to <span class="rgb-text">GiggleGrim IceCream</span>, where we make tasty treats for <em>happy days</em>. <strong>Mr. Grim the Clown</strong> picks the <em>best ingredients</em> he can find, and sometimes they come from an underground market. Our ice cream is made <em>fresh every day</em> in small batches, with bright colors, swirly patterns, and the kind of creamy texture that feels like it <em>follows you</em> long after you've finished eating.
        </p>

        <p>
            Our friendly shop <strong>staff</strong> are always helpful and <em>cheerful</em>. You may notice they keep smiling for a long time, but that's just our completely normal <em>customer service</em>. They are <em>ready to help</em> with anything you need, but please <em>avoid</em> asking for anything beyond ice cream, such as why they seem like they never leave the shop.
        </p>

        <p>
            We love adding little <strong>surprises</strong> to every visit, sometimes a red balloon will be waiting for you when you turn around. Thanks to our modern infrastructure, the shop's ice cream machines run smoothly <em>all day</em>, while the atmosphere is warm with some gentle breeze, so you can enjoy your ice cream like in <em>summer</em> at the beach. If you hear a soft whistle while you're here, it's probably just the ventilation saying hello.
        </p>
    </div>

    <!-- Sales Data -->
    <div class="container" id="sales">
        <h2>Ice Cream Sales Data</h2>
        <p>
            To help our guests see just how much <strong>happiness</strong> we serve, we've prepared a look at our recent months. Every <em>scoop, pint,</em> and <em>returning smile</em> is counted carefully by our staff, who are always eager to keep the numbers growing. The flavors change with the seasons, though some have a habit of returning on their own. Take a peek below, you might even find the month <em>you visited</em>.
        </p>
    </div>
        
    <!-- Table -->
    <div class="container">
        <div class="table-responsive">
            <table class="table table-hover striped-columns">
                <thead class="table-primary">
                    <tr>
                        <th>Metric</th>
                        <th>February</th>
                        <th>March</th>
                        <th>April</th>
                        <th>May</th>
                        <th>June</th>
                        <th>July</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Scoops Served</th>
                        <td>4,580</td>
                        <td>5,120</td>
                        <td>5,890</td>
                        <td>6,230</td>
                        <td>6,540</td>
                        <td>6,890</td>
                    </tr>
                    <tr>
                        <th>Pints Sold</th>
                        <td>310</td>
                        <td>365</td>
                        <td>402</td>
                        <td>418</td>
                        <td>450</td>
                        <td>472</td>
                    </tr>
                    <tr>
                        <th>Most Popular Flavor</th>
                        <td>Red Nose Raspberry</td>
                        <td>Vanilla Alibi</td>
                        <td>Funhouse Fudge</td>
                        <td>Midnight Juggle</td>
                        <td>Caramel Rope</td>
                        <td>Shadow Swirl</td>
                    </tr>
                    <tr>
                        <th>Returning Smiles</th>
                        <td>1,282</td>
                        <td>1,587</td>
                        <td>2,062</td>
                        <td>2,305</td>
                        <td>2,550</td>
                        <td>2,825</td>
                    </tr>
                </tbody>
                <caption class="caption-bottom">Recent Service Highlights (2025)</caption>
            </table>
        </div>
    </div>

    <!-- Back to top | Offcanvas button -->
    <div class="container">
        <div class="backtotop">
            <a href="#top">Top</a>
             | 
            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#pageHelp" aria-controls="pageHelp">
                Offcanvas
            </a>
        </div>
    </div>

    <!-- Pictures -->
    <div class="container py-4" id="pictures">
        <h2>Ice Cream Pictures</h2>
        <p>
            A <strong>picture</strong> is worth a thousand licks, so we've gathered some of our <em>favorites</em> for you to enjoy. Each scoop you see here was made <em>fresh</em> in our shop, with colors and swirls that stay in your memory <em>long</em> after the taste fades. Some customers even say the pictures look back at them if they stare too long, but that's just the magic of <span class="rgb-text">GiggleGrim IceCream</span>.
        </p>
    </div>

    <!-- 4 Pictures -->
    <div class="container">
        <div class="row g-1">
            <div class="col-sm-6 col-12">
                <img src="/images/icecream1.png" class="img-fluid gallery-img" alt="Ice Cream 1">
            </div>
            <div class="col-sm-6 col-12">
                <img src="/images/icecream2.png" class="img-fluid gallery-img" alt="Ice Cream 2">
            </div>
            <div class="col-sm-6 col-12">
                <img src="/images/icecream3.png" class="img-fluid gallery-img" alt="Ice Cream 3">
            </div>
            <div class="col-sm-6 col-12">
                <img src="/images/clown2.png" class="img-fluid gallery-img" alt="Ice Cream 4">
            </div>
        </div>
    </div>

    <!-- Flavors Cards -->
    <div class="container-fluid bg-coral pb-5 mt-5">
        <div class="container py-4" id="flavors">
            <p class="flavor-title">Ice Cream Flavors</p>
        </div>
        <!-- Insert cards using JavaScript constructor -->
        <div class="container">
            <div class="flavor-slider position-relative">
                <button class="slider-arrow prev" aria-label="Previous">&#10094;</button>

                <div id="flavorViewport" class="slider-viewport">
                    <div id="flavorTrack" class="slider-track"></div>
                </div>

                <button class="slider-arrow next" aria-label="Next">&#10095;</button>
            </div>
        </div>

        <div class="container mt-4">
            <p class="text-white">
                Click the pictures for more information.
            </p>
        </div>
    </div>

    <!-- Toppings Cards -->
    <div class="container-fluid bg-coral pb-5 my-5">
        <div class="container py-4" id="toppings">
            <p class="topping-title">Ice Cream Toppings</p>
        </div>
        <!-- Insert cards using JavaScript constructor -->
        <div class="container">
            <div class="topping-slider position-relative">
                <button class="slider-arrow prev" aria-label="Previous">&#10094;</button>

                <div id="toppingViewport" class="slider-viewport">
                    <div id="toppingTrack" class="slider-track"></div>
                </div>

                <button class="slider-arrow next" aria-label="Next">&#10095;</button>
            </div>
        </div>

        <div class="container mt-4">
            <p class="text-white">
                Click the pictures for more information.
            </p>
        </div>
    </div>

    <!-- Back to top -->
    <div class="container">
        <div class="backtotop">
            <a href="#top">Top</a>
             | 
            <a href="#" data-bs-toggle="offcanvas" data-bs-target="#pageHelp" aria-controls="pageHelp">
                Offcanvas
            </a>
        </div>
    </div>
    
    <!-- Stories -->
    <div class="container" id="stories">
        <h2>Ice Cream Stories</h2>
        <p>
            Every scoop has a <strong>story</strong>, and at <span class="rgb-text">GiggleGrim IceCream</span>, some of them are sweeter than others. We've collected a few tales from behind the counter, little moments, strange coincidences, and <em>happy surprises</em> that make our shop what it is. Some stories are about flavors that vanished overnight, others about customers who came in once and were remembered forever. Take a seat, get comfortable, and let the stories <em>melt slowly</em>.
        </p>
    </div>

    <div class="container mt-4">
        <!-- Story 1 -->
        <div class="p-4 mb-4 card border-info rounded">
            <div class="row">
                <div class="col-sm-4 col-12">
                    <img src="/images/car1.png" class="img-fluid story-img" alt="Ice Cream 5">
                </div>
                <div class="col-sm-8 col-12">
                    <p class="lead">Ideal Ice Cream by <strong>Clara M.</strong></p>
                    <p class="small">
                        I came in for a quick scoop of Vanilla Delight, but the staff already had it ready before I ordered. They said they “just knew” I'd be coming.<br>
                        It was perfect, creamy, sweet, and a little colder than I expected.<br>
                        When I left, I noticed a red balloon tied to my car door handle.<br>
                        I don't remember parking near the shop.
                    </p>
                </div>
            </div>
        </div>

        <!-- Story 2 -->
        <div class="p-4 mb-4 card border-info rounded">
            <div class="row">
                <div class="col-sm-4 col-12">
                    <img src="/images/machine1.png" class="img-fluid story-img" alt="Ice Cream 5">
                </div>
                <div class="col-sm-8 col-12">
                    <p class="lead">Nostalgia Ice Cream by <strong>Daniel P.</strong></p>
                    <p class="small">
                    I ordered Chocolate Heaven, and while I was waiting, one of the machines started humming a tune I used to hear as a kid.<br>
                    The staff smiled and told me it was just a coincidence, but none of them touched the machine.<br>
                    When I finished my cone, I noticed the tune was still playing faintly outside, all the way home.
                    </p>
                </div>
            </div>
        </div>

        <!-- Story 3 -->
        <div class="p-4 mb-4 card border-info rounded">
            <div class="row">
                <div class="col-sm-4 col-12">
                    <img src="/images/shop2.png" class="img-fluid story-img" alt="Ice Cream 5">
                </div>
                <div class="col-sm-8 col-12">
                    <p class="lead">Cozy Space by <strong>Hannah S.</strong></p>
                    <p class="small">
                        I've been to <span class="rgb-text">GiggleGrim IceCream</span> many times, but last week I saw a new section beyond the counter, where a blank wall used to be.<br>
                        It was bright and inviting, with lots of space and the smell of fresh waffle cones.<br>
                        I wandered a bit and always came back to the coziest table, as if it knew I'd return.<br>
                        When I asked about this new room, the staff just smiled and said, “We've always had that section.”
                    </p>
                </div>
            </div>
        </div>
    </div>

    <!-- Summary -->
    <div class="container" id="summary">
        <h2>Summary</h2>
            <p class="small">
            <span class="rgb-text">GiggleGrim IceCream</span> is always ready to welcome you, whether it's your first visit or your fiftieth.<br>
            We're open <strong>every day from 3:00 AM to 9:00 PM</strong>, though sometimes the lights are on a little longer if the shop feels lively.<br>
            You can reach us by phone at <strong>(+61) 314-159-666</strong>, or simply leave a note at the counter, our staff will find you with a reply.<br><br>

            If you have a suggestion or complaint, we'll be happy to listen. Just remember, some topics are better discussed during daylight hours.<br>
            We encourage guests to book special group visits in advance, though walk-ins are always welcome if there's a table “waiting for you.”<br>
            And if you've had a memorable experience, don't hesitate to share your story! Some of our favorites end up on the wall.<br><br>

            At GiggleGrim, there's always room for one more smile, one more scoop, and maybe one more surprise.
            </p>

    </div>

    <!-- Collapsible content -->
    <div class="container">
        <h2>More About Ice Cream</h2>
        <!-- Buttons toggle extra info (History, Nutrition, Fun Facts) without leaving the page -->
        <div class="row text-center">
            <div class="col">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#history" role="button" aria-expanded="false" aria-controls="history">
                    History
                </a>
            </div>

            <div class="col">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#nutrition" role="button" aria-expanded="false" aria-controls="nutrition">
                    Nutrition
                </a>
            </div>

            <div class="col">
                <a class="btn btn-primary" data-bs-toggle="collapse" href="#facts" role="button" aria-expanded="false" aria-controls="facts">
                    Fun Facts
                </a>
            </div>
        </div>

        <!-- Contents -->
        <div class="row g-2 mt-2">
            <div class="col">
                <div class="collapse" id="history">
                    <div class="card card-body">
                        <span class="rgb-text">GiggleGrim IceCream</span> opened its doors for decades ago, starting as a small counter with just three flavors and one smiling server.<br>
                        Over time, Mr. Grim the Clown expanded the menu, added new seating areas, and introduced the small-batch recipes our guests love today.<br>
                        Some of our regulars say the shop feels just the same as it did on their first visit, right down to the staff remembering their favorite cone.<br>
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="collapse" id="nutrition">
                    <div class="card card-body">
                        Ice cream is a delicious treat but can be high in calories, sugar, and fat. 
                        A typical serving (1/2 cup) contains around 137 calories, 7 grams of fat, and 14 grams of sugar. 
                        Best enjoyed in moderation or made with lighter, dairy-free options.
                    </div>
                </div>
            </div>

            <div class="col">
                <div class="collapse" id="facts">
                    <div class="card card-body">
                        <ul>
                            <li>Ice cream was invented in China around 200 BC.</li>
                            <li>The first ice cream parlor opened in New York City in 1776.</li>
                            <li>In the USA, the average person eats about 23 liters of ice cream per year.</li>
                            <li>Japan offers unique flavors like wasabi and squid ink.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Offcanvas (offcanvas.html) -->
    <div id="site-offcanvas"></div>

    <!-- Footer (footer.html) -->
    <div id="site-footer"></div>

</body>
</section>
</template>
<script setup>
import { onMounted } from 'vue'
import { initFlavors } from '../composable/useFlavors'
import { initToppings } from '../composable/useToppings'

onMounted(() => {
  initFlavors()
  initToppings()
})
</script>
