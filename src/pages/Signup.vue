<template>
<body data-active="home">
    <!-- Navigation bar (navbar.html) -->
    <div id="site-navbar"></div>

    <!-- Banner -->
    <div class="container cream-container">
        <div class="mx-auto text-center py-4">
            <h1 class="display-1 yeseva-one-regular text-center rgb-text">GiggleGrim IceCream</h1>
            <p class="lead text-center mx-5">
                Bringing smiles with every scoop, from the very first lick to the very last bite. Made fresh each day with bright colors, sweet swirls, and flavors you'll remember long after the lights go out.
            </p>
        </div>
    </div>

    <!-- Registration form -->
    <div class="container">
        <h2 class="text-center">Membership Registration Form</h2>     
    </div>

    <div class="container mx-auto form-card" id="signupSection">
    <form class="needs-validation" novalidate id="signup">
        <div class="card-body">
            <!-- Login details -->
            <div class="row g-3 mt-3">
                <h3>Login details to be used</h3>

                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" name="email" type="email" class="form-control" placeholder="you@example.com" autocomplete="email" required>
                    <div class="invalid-feedback">Enter a valid email address.</div>
                </div>

                <div class="col-md-6">
                    <label for="password" class="form-label">Password</label>
                    <input id="password" name="password" type="password" class="form-control" placeholder="••••••••" autocomplete="new-password" required>
                    <div class="invalid-feedback">Enter a valid password.</div>
                </div>
            </div>

            <!-- Contact details -->
            <div class="row g-3 mt-4" id="contact">
                <h3>Contact details</h3>

                <div class="col-md-6">
                    <label for="firstname" class="form-label">Firstname</label>
                    <input id="firstname" name="firstname" type="text" class="form-control" placeholder="John" autocomplete="given-name" required>
                    <div class="invalid-feedback">Please enter firstname.</div>
                </div>

                <div class="col-md-6">
                    <label for="surname" class="form-label">Surname</label>
                    <input id="surname" name="surname" type="text" class="form-control" placeholder="Wick" autocomplete="family-name" required>
                    <div class="invalid-feedback">Please enter surname.</div>
                </div>

                <div class="col-md-6">
                    <label for="mobile" class="form-label">Mobile</label>
                    <input id="mobile" name="mobile" type="tel" class="form-control" placeholder="+61 xxxx xxx xxx" pattern="^(\+?61\s?\d{3}\s?\d{3}\s?\d{3}|\d{10})$" autocomplete="tel">
                </div>

                <div class="col-md-6">
                    <label for="birthdate" class="form-label">Birth Date</label>
                    <!-- native date inputs render as yyyy-mm-dd; using placeholder to show dd/mm/yyyy -->
                    <input id="birthdate" name="birthdate" type="date" class="form-control" placeholder="dd/mm/yyyy">
                </div>

                <div class="col-12">
                    <label for="address1" class="form-label">Address</label>
                    <input id="address1" name="address1" type="text" class="form-control" placeholder="1234 Main St" autocomplete="address-line1">
                </div>

                <div class="col-12">
                    <label for="address2" class="form-label">Address 2 (optional)</label>
                    <input id="address2" name="address2" type="text" class="form-control" placeholder="Apartment, studio, or floor" autocomplete="address-line2">
                </div>

                <div class="col-md-6">
                    <label for="city" class="form-label">City</label>
                    <input id="city" name="city" type="text" class="form-control" placeholder="1234 Main St" autocomplete="address-level2">
                </div>

                <div class="col-md-3">
                    <label for="state" class="form-label">State</label>
                    <select id="state" name="state" class="form-select" autocomplete="address-level1">
                        <option selected disabled>Choose...</option>
                        <option>ACT</option><option>NSW</option><option>NT</option>
                        <option>QLD</option><option>SA</option><option>TAS</option>
                        <option>VIC</option><option>WA</option>
                    </select>
                </div>

                <div class="col-md-3">
                    <label for="postcode" class="form-label">Postcode</label>
                    <input id="postcode" name="postcode" type="text" class="form-control" inputmode="numeric" pattern="\d{4}" placeholder="3000" autocomplete="postal-code">
                </div>
            </div>

            <!-- Ice cream preferences -->
            <div class="row g-3 mt-4" id="icecream">
                <h3>Ice cream preferences</h3>

                <!-- Favourite(s) -->
                <div class="col-md-6">
                    <label for="favourites" class="form-label">Favourite(s)</label>
                    <select id="favourites" name="favourites[]" class="form-select" multiple required>
                        <option disabled>Choose multiple...</option>
                        <option>Vanilla</option>
                        <option>Chocolate</option>
                        <option>Strawberry</option>
                        <option>Mango</option>
                        <option>Mint</option>
                        <option>Cookies &amp; Cream</option>
                        <option>Random</option>
                    </select>
                    <div class="invalid-feedback">Please choose flavor(s).</div>
                </div>

                <!-- Preferred type -->
                <div class="col-md-6">
                    <label for="type" class="form-label">Preferred type</label>
                    <select id="type" name="type" class="form-select" size="4" required>
                        <option disabled>Choose one...</option>
                        <option>Traditional Cone</option>
                        <option>Waffle Cone</option>
                        <option>Cup</option>
                        <option>Random</option>
                    </select>
                    <div class="invalid-feedback">Please choose type.</div>
                </div>
            </div>

            <!-- Preferred size -->
            <div class="mt-3">
                <label class="form-label d-block">Preferred size</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="size" id="size1" value="petite" required>
                    <label class="form-check-label" for="size1">Petite (extra-small) serve</label>
                    <!-- <div class="invalid-feedback">Please choose size</div> -->
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="size" id="size2" value="small">
                    <label class="form-check-label" for="size2">Small serve</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="size" id="size3" value="regular">
                    <label class="form-check-label" for="size3">Regular serve</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="size" id="size4" value="jumbo">
                    <label class="form-check-label" for="size4">Jumbo serve</label>
                </div>
                
                <div class="invalid-feedback">Please choose size</div> 
            </div>

            <!-- Message -->
            <div class="mt-3">
                <label for="message" class="form-label">Leave us a message</label>
                <textarea id="message" name="message" class="form-control" rows="3"></textarea>
            </div>

            <!-- Checkboxes -->
            <div class="mt-4">
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="remember" name="remember">
                    <label class="form-check-label" for="remember">Remember me</label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" id="newsletter" name="newsletter">
                    <label class="form-check-label" for="newsletter">Sign up for our Monthly Newsletter!</label>
                </div>
            </div>

            <!-- Buttons -->
            <div class="mt-3">
                <button type="submit" class="btn btn-primary">Submit</button>
                <button type="reset" class="btn btn-secondary">Reset</button>
            </div>

            <div id="formMessage" class="mt-3" style="display:none;"></div>

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
        </div>
    </form>
    </div>

    <!-- Offcanvas (offcanvas.html) -->
    <div id="site-offcanvas"></div>

    <!-- Footer (footer.html) -->
    <div id="site-footer"></div>

</body>
</template>