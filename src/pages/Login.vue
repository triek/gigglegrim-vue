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

    <!-- Login form -->
    <div class="container">
        <h2 class="text-center">Member Login</h2>
    </div>

    <div class="container mx-auto form-card mt-4" id="loginSection">
    <form class="needs-validation" novalidate id="login">

        <div class="card-body">
            <!-- Login details -->
            <h3 class="text-center">Account details</h3>

            <div class="row g-3 mt-3">
                <div class="col-md-3 d-flex align-items-center justify-content-md-end justify-content-start">
                    <label for="email" class="form-label mb-0">Email</label>
                </div>

                <div class="col-md-6">
                    <input id="email" name="email" type="email" class="form-control" placeholder="you@example.com" autocomplete="email" required>
                    <div class="invalid-feedback">Enter a valid email address.</div>
                </div>
            </div>

            <div class="row g-3 mt-1">
                <div class="col-md-3 d-flex align-items-center justify-content-md-end justify-content-start">
                    <label for="password" class="form-label mb-0">Password</label>
                </div>

                <div class="col-md-6">
                    <input id="password" name="password" type="password" class="form-control" placeholder="••••••••" autocomplete="new-password" required>
                    <div class="invalid-feedback">Enter a valid password.</div>
                </div>
            </div>

            <div class="row g-3 mt-1">
                <div class="col-md-3"></div>
                
                <div class="col-md-3">
                    <div>
                        <a href="#" class="btn btn-link p-0">Forgot Password?</a>
                    </div>
                </div>

                <!-- Login button -->
                <div class="col-md-3 d-flex justify-content-end">
                    <button type="submit" class="btn btn-primary">Login</button>
                </div>
            </div>
            
            <div class="row g-3">
                <div class="col-md-3"></div>
                
                <div class="col-md-3">
                    <div>
                        <a href="signup.html" class="btn btn-link p-0">Signup</a>
                    </div>
                </div>
            </div>

            <div id="formMessage" class="mt-3" style="display:none;"></div>

            <!-- Back to top | Offcanvas button -->
            <div class="container mt-4">
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
