<template>
<div class="contact-form-container">
    <form @submit.prevent="onSubmit" novalidate>
        <!-- Name -->
        <div class="mb-3">
            <label class="form-label">Name</label>
            <input v-model="form.name" type="text" class="form-control" required>
            <div class="text-danger" v-if="errors.name">{{ errors.name }}</div>
        </div>

        <!-- Subscribe -->
        <div class="mb-3 form-check">
            <input v-model="form.subscribe" type="checkbox" class="form-check-input" id="subscribe">
            <label class="form-check-label" for="subscribe">Subscribe to our unexpecting newsletters</label>
        </div>

        <!-- Contact Preference -->
        <div class="mb-3">
            <label class="form-label">Contact Preference</label><br>
            <div class="form-check form-check-inline">
            <input v-model="form.contactPref" class="form-check-input" type="radio" id="prefEmail" value="Email">
            <label class="form-check-label" for="prefEmail">Email</label>
            </div>
            <div class="form-check form-check-inline">
            <input v-model="form.contactPref" class="form-check-input" type="radio" id="prefPhone" value="Phone">
            <label class="form-check-label" for="prefPhone">Phone</label>
            </div>
            <div class="text-danger" v-if="errors.contactPref">{{ errors.contactPref }}</div>
        </div>

        <!-- Country -->
        <div class="mb-3">
            <label class="form-label">Country</label>
            <select v-model="form.country" class="form-select">
            <option value="" disabled>Select country</option>
            <option v-for="c in countries" :key="c" :value="c">{{ c }}</option>
            </select>
            <div class="text-danger" v-if="errors.country">{{ errors.country }}</div>
        </div>

        <!-- Age -->
        <div class="mb-3">
            <label class="form-label">Age</label>
            <input v-model.number="form.age" type="number" min="1" class="form-control" required>
            <div class="text-danger" v-if="errors.age">{{ errors.age }}</div>
        </div>
        <!-- Not Alien (required) -->

        <div class="mb-3 form-check">
            <input v-model="form.notAlien" type="checkbox" class="form-check-input" id="notAlien" required>
            <label class="form-check-label" for="notAlien">I am not an alien</label>
            <div class="text-danger" v-if="errors.notAlien">{{ errors.notAlien }}</div>
        </div>

        <!-- Submit -->
        <button type="submit" class="btn btn-primary w-100">Submit</button>
    </form>

    <!-- Success message -->
    <div v-if="success" class="alert alert-success mt-3">
        <strong>Success!</strong> Your message has been sent.
        <div class="mt-2">
            <ul class="text-start">
            <li><strong>Name:</strong> {{ form.name }}</li>
            <li><strong>Subscribed:</strong> {{ form.subscribe ? 'Yes' : 'No' }}</li>
            <li><strong>Contact Preference:</strong> {{ form.contactPref }}</li>
            <li><strong>Country:</strong> {{ form.country }}</li>
            <li><strong>Age:</strong> {{ form.age }}</li>
            <li><strong>Not an alien:</strong> {{ form.notAlien ? 'True' : 'False' }}</li>
            </ul>
        </div>
    </div>
</div>
</template>

<script setup>
    import { reactive, ref, watch, toRefs } from 'vue'
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
        initialName: { type: String, required: true },
        initialCountry: { type: String, required: true }
    })
    const emit = defineEmits(['submitted'])

    const countries = ['Australia', 'Canada', 'Japan', 'Ohio', 'New Zealand', 'Russia', 'UK', 'USA', 'Other']
    const form = reactive({
        name: props.initialName,
        subscribe: false,
        notAlien: false,
        contactPref: '',
        country: props.initialCountry,
        age: null
    })
    const errors = reactive({
        name: '',
        notAlien: '',
        contactPref: '',
        country: '',
        age: ''
    })
    const submittedData = ref(null)
    const success = ref(false)

    function validate() {
        errors.name = form.name.trim() ? '' : 'Name is required.'
        errors.notAlien = form.notAlien ? '' : 'You must confirm you are not an alien (sorry but we had bad business with aliens in the past).'
        errors.contactPref = form.contactPref ? '' : 'Please select a contact preference.'
        errors.country = form.country ? '' : 'Please select a country (on Earth).'
        errors.age = (typeof form.age === 'number' && form.age > 0) ? '' : 'Enter a valid positive age.'
        return !Object.values(errors).some(e => e)
    }

    function onSubmit() {
    if (validate()) {
        submittedData.value = { ...form }
        success.value = true
        emit('submitted', { ...form })
        setTimeout(() => {
            form.name = props.initialName
            form.subscribe = false
            form.notAlien = false
            form.contactPref = ''
            form.country = props.initialCountry
            form.age = null
            success.value = false
            submittedData.value = null
        }, 3000)
    }
    }
</script>