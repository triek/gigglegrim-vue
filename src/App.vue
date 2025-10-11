<template>
  <div :class="[ui.isDark ? 'dark-mode' : '', ui.fontSizeClass]">
    <Navbar @show-offcanvas="showOffcanvas" />
      <RouterView />
      <OffCanvas ref="offcanvas" />
    <Footer />
  </div>
</template>

<script setup>
import { useUIStore } from './stores/ui'
const ui = useUIStore()

import { ref } from 'vue'

import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import OffCanvas from './components/OffCanvas.vue'

const offcanvas = ref(null)
function showOffcanvas() {
  if (offcanvas.value && typeof offcanvas.value.open === 'function') {
    offcanvas.value.open()
  }
}
</script>