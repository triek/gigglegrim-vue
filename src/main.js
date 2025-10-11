import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

import './assets/style.css'
import './assets/flavor.css'

const vueApp = createApp(App)
vueApp.use(createPinia())
vueApp.use(router)
vueApp.mount('#app');

// Bootstrap validation
(() => {
    const form = document.querySelector('.needs-validation');
    if (!form) return;
    form.addEventListener('submit', (e) => {
    // enforce at least one colour checkbox selected
    const colourChecks = [...document.querySelectorAll('input[name="colour_options[]"]')];
    const anyColour = colourChecks.some(c => c.checked);
    if (!anyColour) colourChecks[0].setCustomValidity('Choose at least one colour');
    else colourChecks[0].setCustomValidity('');

    if (!form.checkValidity()) {
        e.preventDefault();
        e.stopPropagation();
    }
    form.classList.add('was-validated');
    });
})();

// Populate Day and Year, and keep Day valid for selected Month/Year (incl. leap years)
(function initBirthday() {
    const daySel   = document.getElementById('birth_day');
    const yearSel  = document.getElementById('birth_year');

    if (!daySel || !yearSel) return;

    // Build Day options (1..31) with placeholder
    daySel.innerHTML = '<option value="">Day</option>' + Array.from({length:31}, (_, i) => `<option value="${i+1}">${i+1}</option>`).join('');


    // Build Year options (from currentYear-100 to currentYear-13)
    const now = new Date();
    const youngest = now.getFullYear() - 13;
    const oldest   = youngest - 100;
    yearSel.innerHTML = '<option value="">Year</option>' + Array.from({length: youngest - oldest + 1}, (_, i) => {
        const y = youngest - i;
        return `<option value="${y}">${y}</option>`;
    }).join('');
})();

const message = document.getElementById('formMessage');

document.querySelectorAll('.needs-validation').forEach(form => {

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // stop the page from reloading
        e.stopPropagation();

        if (!form.checkValidity()) {
            form.classList.add('was-validated'); // show validation errors
            message.textContent = '⚠ Please fill in all required fields correctly.';
            message.className = 'mt-3 text-danger fw-bold';
            message.style.display = 'block';
            return;
        }

        // If valid
        message.textContent = '✅ Form submitted';
        message.className = 'mt-3 text-success fw-bold';
        message.style.display = 'block';
    })
});