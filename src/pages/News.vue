<template>
<section class="hero">
<body data-active="home">
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
                <img :src="assetUrl('images/shop1.png')" class="d-block w-100" alt="Ice Cream Slide 1">
                <div class="carousel-caption d-none d-md-block">
                    <h4>Your Anytime Treat Spot</h4>
                    <p>Bright, clean, and ready to serve, there's always a place here for you.</p>
                </div>  
            </div>
            
            <div class="carousel-item" data-bs-interval="3000">
                <img :src="assetUrl('images/shop3.png')" class="d-block w-100" alt="Ice Cream Slide 2">
                <div class="carousel-caption d-none d-md-block">
                    <h4>The Flavor of History</h4>
                    <p>Decades of smiles, sprinkles, and stories - Since... a very long time ago</p>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="3000">
                <img :src="assetUrl('images/icecream5.png')" class="d-block w-100" alt="Ice Cream Slide 3">
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
                    <img :src="assetUrl('images/car1.png')" class="img-fluid story-img" alt="Ice Cream 5">
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
                    <img :src="assetUrl('images/machine1.png')" class="img-fluid story-img" alt="Ice Cream 5">
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
                    <img :src="assetUrl('images/shop2.png')" class="img-fluid story-img" alt="Ice Cream 5">
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
import { assetUrl } from '../utils/assetPath'
</script>

