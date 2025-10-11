<template>
  <footer class="site-footer" style="background-color: black; color: white; padding: 20px 0; margin-top: 40px; text-align: center;">
    <p>
        <strong>GiggleGrim IceCream</strong> &copy; 2025 - Always ready to serve you a scoop.
    </p>
    <p>
        Visit us at: <strong>333 Circus Street, Melbourne</strong> | Call: <a href="tel:+61314159666">(+61) 314-159-666</a>
    </p>
    <p>
        Open: <strong>Mon - Sun, 3:00 AM - 9:00 PM</strong>
    </p>
    <p> 
        <a href="#top" style="color: coral; text-decoration: none;">Back to top</a>
          | 
        <a href="#" style="color: coral; text-decoration: none;" data-bs-toggle="offcanvas" data-bs-target="#pageHelp" aria-controls="pageHelp">
            Offcanvas
        </a>
    </p>
  </footer>
</template>
<script setup>
import { useUIStore } from '../stores/ui'
const ui = useUIStore()
</script>

