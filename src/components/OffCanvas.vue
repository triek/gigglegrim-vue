<template>
<div
class="offcanvas offcanvas-end" tabindex="-1" id="pageHelp" aria-labelledby="pageHelpLabel" :class="{ show: isOpen }" style="visibility: visible;">

    <div class="offcanvas-header m-3">
        <h4 class="offcanvas-title ms-auto" id="pageHelpLabel">Website Guide</h4>
        <button type="button" class="btn ms-auto" @click="close" aria-label="Close">
            <i class="bi bi-x-lg fs-3"></i>
        </button>
    </div>

    <div class="offcanvas-body mx-3">
        <p class="mb-3">Contents of this website:</p>
        <nav>
            <ul class="list-unstyled">
                <li><RouterLink class="link-primary fw-bold" to="/">Home</RouterLink></li>
                <li>
                    <span class="link-primary fw-bold">Menu</span>
                    <ul>
                        <li><RouterLink class="link-secondary" to="/#flavors">Flavors</RouterLink></li>
                        <li><RouterLink class="link-secondary" to="/#toppings">Toppings</RouterLink></li>
                    </ul>
                </li>
                <li>
                    <span class="link-primary fw-bold">Shop</span>
                    <ul>
                        <li><RouterLink class="link-secondary" to="/tshirt">T-Shirts</RouterLink></li>
                        <li><span class="link-secondary">Merch (Not yet)</span></li>
                    </ul>
                </li>
                
                <!-- Quick links inside offcanvas -->
                <li><RouterLink class="link-primary fw-bold" to="/news">News</RouterLink></li>
                <li><RouterLink class="link-primary fw-bold" to="/contact">Contact</RouterLink></li>
                <li>
                    <span class="link-primary fw-bold">Account</span>
                    <ul>
                        <li><RouterLink class="link-secondary" to="/login">Login</RouterLink></li>
                        <li><RouterLink class="link-secondary" to="/signup">Signup</RouterLink></li>
                    </ul>
                </li>
                <li><RouterLink class="link-primary fw-bold" to="/cart">Cart</RouterLink></li>
            </ul>
        </nav>
    </div>
</div>
</template>
<script setup>
import { ref, watch, defineExpose } from 'vue'
import { useRouter } from 'vue-router'

const isOpen = ref(false)
const close = () => (isOpen.value = false)
const open = () => (isOpen.value = true)

defineExpose({ open, close })
</script>


