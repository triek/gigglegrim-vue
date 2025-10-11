<template>

<nav class="navbar navbar-expand-lg bg-coral fixed-top py-0">
    <div class="container-fluid">
        <!-- Logo -->
        <RouterLink class="navbar-brand text-white fs-1 yeseva-one-regular" to="/">GG</RouterLink>
        
        <!-- Hamburger Icon -->
        <button class="navbar-toggler btn-outline-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="bi bi-list"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto gap-2">
                <!-- Content -->
                <li class="nav-item dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Content
                    </a>
                    <ul class="dropdown-menu">
                        <li><RouterLink class="dropdown-item" to="/">Home</RouterLink></li>
                        <li><RouterLink class="dropdown-item" to="/login">Login</RouterLink></li>
                        <li><RouterLink class="dropdown-item" to="/signup">Signup</RouterLink></li>
                        <li><RouterLink class="dropdown-item" to="/tshirt">T-Shirt</RouterLink></li>
                        <li><a class="dropdown-item" href="#" @click.prevent="$emit('show-offcanvas')">Offcanvas</a></li>
                        <li><RouterLink class="dropdown-item" to="/test">Test</RouterLink></li>
                    </ul>
                </li>

                <!-- Menu -->
                <li class="nav-item dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Menu
                    </a>
                    <ul class="dropdown-menu">
                        <li><RouterLink class="dropdown-item" to="#flavors">Flavors</RouterLink></li>
                        <li><RouterLink class="dropdown-item" to="#toppings">Toppings</RouterLink></li>
                    </ul>
                </li>

                <!-- Shop -->
                <li class="nav-item dropdown">
                    <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop
                    </a>
                    <ul class="dropdown-menu">
                        <li><RouterLink class="dropdown-item" to="/tshirt" target="_blank">Get a T-shirt!</RouterLink></li>
                    </ul>
                </li>

                <!-- News -->
                <li class="nav-item">
                    <RouterLink class="nav-link text-white active" aria-current="page" to="/news">News</RouterLink>
                </li>

                <!-- Contact -->
                <li class="nav-item">
                    <RouterLink class="nav-link text-white active" aria-current="page" to="/contact">Contact</RouterLink>
                </li>
            </ul>

            
            <!-- Settings -->
            <li class="navbar-nav d-flex gap-3 mx-2 nav-item dropdown">
                <a class="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Settings
                </a>
                <ul class="dropdown-menu p-1">
                    <!-- Theme toggler -->
                    <button class="btn btn-outline-dark w-100 d-flex align-items-center gap-2 my-1" @click="ui.toggleDark">
                        <i :class="ui.isDark ? 'bi bi-sun-fill text-warning' : 'bi bi-moon-fill text-primary'"></i>
                        {{ ui.isDark ? 'Light Mode' : 'Dark Mode' }}
                    </button>

                    <!-- Text size selector -->
                    <span class="dropdown-item-text fw-bold mt-2">Text size:</span>
                    <select class="form-select mt-1" v-model="ui.textSize" @change="ui.setTextSize(ui.textSize)">
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                    </select>
                </ul>
            </li>

            <!-- Login button -->
            <ul class="navbar-nav d-flex gap-3 mx-2">
                <li class="nav-item">
                    <RouterLink class="btn btn-outline-white" to="/login">
                        Login
                        <i class="bi bi-person-fill"></i>
                    </RouterLink>
                </li>
            </ul>

            <!-- Cart button -->
            <ul class="navbar-nav d-flex gap-3 mx-2">
                <li class="nav-item">
                    <RouterLink class="btn btn-outline-white" to="/cart" tabindex="-1" aria-disabled="true">
                        Cart
                        <i class="bi bi-cart-fill"></i>
                    </RouterLink>
                </li>
            </ul>

            <!-- Search button -->
            <button class="btn btn-outline-white mx-2" type="button" id="searchToggle" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="bi bi-search"></i>
            </button>

            <!-- Search form -->
            <div class="dropdown-menu dropdown-menu-end p-2" aria-labelledby="searchToggle">
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search..." aria-label="Search">
                    <button class="btn btn-primary" type="submit">Go</button>
                </form>
            </div>
        </div>
    </div>
  </nav>
</template>
<script setup>
import { useUIStore } from '../stores/ui'
const ui = useUIStore()

const emit = defineEmits(['show-offcanvas'])
</script>

