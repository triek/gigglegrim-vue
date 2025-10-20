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
        <h2 class="text-center">T-Shirt Order Form</h2>     
    </div>

    <div class="container mx-auto form-card" id="orderFormSection">
    <form class="needs-validation" novalidate id="orderForm">
        <div class="card-body">
            <!-- Contact details -->
            <div class="row g-3 mt-4" id="contact">
                <h3>Contact details</h3>

                <div class="col-md-6">
                    <label for="fullname" class="form-label">Fullname</label>
                    <input id="fullname" name="fullname" type="text" class="form-control" placeholder="John Wick" autocomplete="full-name" required>
                    <div class="invalid-feedback">Please enter your name.</div>
                </div>

                <div class="col-md-6">
                    <label for="mobile" class="form-label">Mobile</label>
                    <input id="mobile" name="mobile" type="tel" class="form-control" placeholder="+61 xxxx xxx xxx" pattern="^(\+?61\s?\d{3}\s?\d{3}\s?\d{3}|\d{10})$" autocomplete="tel" required>
                    <div class="invalid-feedback">Use +61 xxxx xxx xxx or 10 digits (e.g., 0412345678).</div>
                </div>

                <div class="col-md-6">
                    <label for="email" class="form-label">Email</label>
                    <input id="email" name="email" type="email" class="form-control" placeholder="you@example.com" autocomplete="email" required>
                    <div class="invalid-feedback">Enter a valid email address.</div>
                </div>
                
                <!-- Birthday -->
                <div class="col-md-6">
                    <label class="form-label d-block">Birthday</label>
                    <div class="d-flex gap-2">
                        <select id="birth_day" name="birth_day" class="form-select" required>
                        </select>

                        <select id="birth_month" name="birth_month" class="form-select" required>
                            <option value="">Month</option>
                            <option value="1">Jan</option>
                            <option value="2">Feb</option>
                            <option value="3">Mar</option>
                            <option value="4">Apr</option>
                            <option value="5">May</option>
                            <option value="6">Jun</option>
                            <option value="7">Jul</option>
                            <option value="8">Aug</option>
                            <option value="9">Sep</option>
                            <option value="10">Oct</option>
                            <option value="11">Nov</option>
                            <option value="12">Dec</option>
                        </select>

                        <select id="birth_year" name="birth_year" class="form-select" required>
                        </select>
                    </div>
                    <div class="invalid-feedback">Please select a day, month, and year.</div>
                </div>
            </div>

            <!-- Delivery details -->
            <div class="row g-3 mt-4" id="delivery">
                <h3>Delivery details</h3>
                <div class="col-12">
                    <label for="address1" class="form-label">Address</label>
                    <input id="address1" name="address1" type="text" class="form-control" placeholder="1234 Main St" autocomplete="address-line1" required>
                    <div class="invalid-feedback">Address is required.</div>
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
                    <select id="state" name="state" class="form-select" autocomplete="address-level1" required>
                        <option value="" selected disabled>Choose...</option>
                        <option>ACT</option><option>NSW</option><option>NT</option>
                        <option>QLD</option><option>SA</option><option>TAS</option>
                        <option>VIC</option><option>WA</option>
                    </select>
                    <div class="invalid-feedback">Select a state.</div>
                </div>

                <div class="col-md-3">
                    <label for="postcode" class="form-label">Postcode</label>
                    <input id="postcode" name="postcode" type="text" class="form-control" inputmode="numeric" pattern="\d{4}" placeholder="3000" autocomplete="postal-code" required>
                    <div class="invalid-feedback">Enter 4 digits.</div>
                </div>

                <div class="col-12">
                    <div class="form-check">
                        <input class="form-check-input" type="checkbox" id="leave_at_door" name="leave_at_door">
                        <label class="form-check-label" for="leave_at_door">Approval to leave at door</label>
                    </div>
                </div>

                <div class="col-12">
                    <label class="form-label d-block">Preferred delivery time</label>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="delivery_morning" name="preferred_delivery_time" value="morning" checked>
                        <label class="form-check-label" for="delivery_morning">Morning</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="delivery_day" name="preferred_delivery_time" value="day">
                        <label class="form-check-label" for="delivery_day">Day</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="radio" id="delivery_evening" name="preferred_delivery_time" value="evening">
                        <label class="form-check-label" for="delivery_evening">Evening</label>
                    </div>
                </div>

                <div class="col-12">
                    <label for="delivery_notes" class="form-label">Notes for the delivery (optional)</label>
                    <textarea id="delivery_notes" name="delivery_notes" class="form-control" rows="3"
                            placeholder="e.g., Gate code, leave with concierge, etc."></textarea>
                </div>
            </div>

            <!-- T-Shirt designs available -->
            <div class="row g-3 mt-4" id="tshirt">
                <h3>T-shirt designs available</h3>

                <!-- Design 1 -->
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <img :src="assetUrl('images/tshirt/icecreamshirt1.png')" class="card-img-top h-100" alt="Design 1">
                        <div class="card-body">
                            <h5 class="card-title">Design 1</h5>
                            <p class="card-text small">A friendly little cone with a big smile. This T-shirt keeps it simple and sweet, perfect for everyday wear.</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="tshirtDesign" id="design1" value="1" required>
                                <label class="form-check-label" for="design1">Select this design</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Design 2 -->
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <img :src="assetUrl('images/tshirt/chillin1.png')" class="card-img-top h-100" alt="Design 2">
                        <div class="card-body">
                            <h5 class="card-title">Design 2</h5>
                            <p class="card-text small">Someone's already saving you a spot. This design blends a retro scene with a classic white tee style.</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="tshirtDesign" id="design2" value="2">
                                <label class="form-check-label" for="design2">Select this design</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Design 3 -->
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                        <img :src="assetUrl('images/tshirt/clownshirt1.png')" class="card-img-top h-100" alt="Design 3">
                        <div class="card-body">
                            <h5 class="card-title">Design 3</h5>
                            <p class="card-text small">Mr. Grim is here to share a scoop. This comfy white T-shirt pops with vibrant color and cartoon character art.</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="tshirtDesign" id="design3" value="3">
                                <label class="form-check-label" for="design3">Select this design</label>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Design 4 -->
                <div class="col-sm-6 col-md-4">
                    <div class="card">
                    <img :src="assetUrl('images/tshirt/freezer1.png')" class="card-img-top h-100" alt="Design 4">
                        <div class="card-body">
                            <h5 class="card-title">Design 4</h5>
                            <p class="card-text small">Our freezer's always open for a late-night treat. This classic-fit T-shirt pairs a striking graphic with a versatile everyday style.</p>
                            <div class="form-check">
                                <input class="form-check-input" type="radio" name="tshirtDesign" id="design4" value="4">
                                <label class="form-check-label" for="design4">Select this design</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Color options (multi-select) -->
            <div class="mt-3">
                <label class="form-label d-block">Colour options</label>
                <div class="row g-2">
                    <div class="col-6 col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="colour_white" name="colour_options[]" value="white" checked>
                            <label class="form-check-label" for="colour_white">White</label>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="colour_black" name="colour_options[]" value="black">
                            <label class="form-check-label" for="colour_black">Black</label>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="colour_blue" name="colour_options[]" value="blue">
                            <label class="form-check-label" for="colour_blue">Blue</label>
                        </div>
                    </div>
                    <div class="col-6 col-md-3">
                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" id="colour_red" name="colour_options[]" value="red">
                            <label class="form-check-label" for="colour_red">Red</label>
                        </div>
                    </div>
                </div>
                <div class="form-text">At least one colour should be selected.</div>
            </div>

            <!-- Size required (single choice) -->
            <div class="mt-3">
                <label class="form-label d-block">Size required</label>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="size_s" name="size_required" value="S">
                    <label class="form-check-label" for="size_s">S</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="size_m" name="size_required" value="M" checked>
                    <label class="form-check-label" for="size_m">M</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="size_l" name="size_required" value="L">
                    <label class="form-check-label" for="size_l">L</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="size_xl" name="size_required" value="XL">
                    <label class="form-check-label" for="size_xl">XL</label>
                </div>
            </div>

            <!-- Material used (single select) -->
            <div class="mt-3">
                <label for="material_used" class="form-label">Material used</label>
                <select id="material_used" name="material_used" class="form-select" required>
                    <option value="cotton" selected>Cotton (default)</option>
                    <option value="polyester">Polyester</option>
                    <option value="blend">Cotton/Poly blend</option>
                    <option value="organic">Organic cotton</option>
                </select>
                <div class="invalid-feedback">Please select a material.</div>
            </div>

            <!-- Payment -->
            <div class="row g-3 mt-4" id="tshirt">
                <h3>Payment</h3>
                <div class="mt-3">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="pay_visa" name="payment_method" value="visa" checked>
                        <label class="form-check-label" for="pay_visa">Visa (demo)</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="pay_mastercard" name="payment_method" value="mastercard">
                        <label class="form-check-label" for="pay_mastercard">MasterCard (demo)</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="pay_paypal" name="payment_method" value="paypal">
                        <label class="form-check-label" for="pay_paypal">PayPal (demo)</label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="pay_cod" name="payment_method" value="cod">
                        <label class="form-check-label" for="pay_cod">Cash on Delivery</label>
                    </div>
                </div>
            </div>

            <!-- Submit -->
            <div class="d-flex gap-2 mt-4">
                <button type="submit" class="btn btn-primary">Submit Order</button>
                <button type="reset" class="btn btn-outline-secondary">Reset</button>
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

            <!-- Offcanvas panel -->
            <div class="offcanvas offcanvas-end" tabindex="-1" id="pageHelp" aria-labelledby="pageHelpLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="pageHelpLabel">Form Help</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>

                <div class="offcanvas-body">
                    <p class="mb-3">Quick guide to filling out this form:</p>

                    <h6 class="fw-bold">Required Fields</h6>
                    <p class="small">All fields must be filled before you can submit.</p>

                    <h6 class="fw-bold">Email</h6>
                    <p class="small">Must contain an “@” and a valid domain, e.g., name@example.com.</p>

                    <h6 class="fw-bold">Phone Number</h6>
                    <p class="small">You can enter either a 10-digit mobile (0412345678) or +61 format (+61 1234 567 890).</p>

                    <h6 class="fw-bold">Birth Date</h6>
                    <p class="small">Use the date picker to select your birthday.</p>

                    <h6 class="fw-bold">Multi-Select Lists</h6>
                    <p class="small">Click items to select, hold Ctrl or Command to multiple select.</p>

                    <div class="d-grid gap-2 mt-3">
                        <a class="btn btn-outline-primary" href="#top">Back to top</a>
                    </div>
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

<script setup>
import { assetUrl } from '../utils/assetPath'
</script>