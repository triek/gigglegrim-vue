<template>
<section class="hero">
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

    <!-- Contact -->
    <div class="container mt-3" id="contact">
        <h2>Contact Us!</h2>
        <ContactForm
            :initial-name="'Ryan Reynolds'"
            :initial-country="'Australia'"
            @submitted="handleSubmit"
        ></ContactForm>
        <div v-if="ack" class="mt-4">
            <h2 class="fw-bold">Thank you for contacting us!</h2>
            <div v-html="ack"></div>
        </div>
    </div>

    <!-- Summary -->
    <div class="container" id="summary">
        <h2>More Info</h2>
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

    <!-- Feedback -->
    <div class="container mt-3" id="feedback">
        <h2>Feedback</h2>
        <div class="py-2">
            <p>Your feedback is important to us!</p>
            <!-- textarea bound to Pinia store -->
            <textarea
                v-model="feedback.message"
                placeholder="Share your thoughts here..."
                class="form-control my-2"
                rows="4"
            ></textarea>

            <div>{{ feedback.charCount }} characters</div>
            <div v-if="!feedback.isValid && feedback.message.length > 0" class="text-danger">
                    Please enter at least 10 characters.
            </div>
        </div>

        <button class="btn btn-primary me-2" @click="feedback.submit">Submit</button>
        <button class="btn btn-secondary" @click="feedback.reset">Clear</button>

        <!-- Show submitted feedback -->
        <div v-if="feedback.submitted.length" class="mt-3">
            <h3>Submitted Messages</h3>
            <ul>
                <li v-for="(msg, i) in feedback.submitted" :key="i">{{ msg }}</li>
            </ul>
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
import { ref } from 'vue'
import { useFeedbackStore } from '../stores/feedback'
import ContactForm from '../components/ContactForm.vue'

const feedback = useFeedbackStore()
const ack = ref('')
function handleSubmit(data) {
    if (!data) return
    ack.value = `
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Subscribed:</strong> ${data.subscribe ? 'Yes' : 'No'}</p>
        <p><strong>Contact Preference:</strong> ${data.contactPref}</p>
        <p><strong>Country:</strong> ${data.country}</p>
        <p><strong>Age:</strong> ${data.age}</p>
        <p><strong>Not an alien:</strong> ${data.notAlien ? 'Yes' : 'No'}</p>
    `
}
</script>

<style scoped></style>