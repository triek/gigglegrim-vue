import { defineStore } from 'pinia'

export const useFeedbackStore = defineStore('feedback', {
    state: () => ({
        message: '',
        submitted: [],
    }),
    getters: {
        charCount: (state) => state.message.length,
        isValid: (state) => state.message.trim().length >= 10,
    },
    actions: {
        setMessage(msg) {
            this.message = msg
        },
        clear() {
            this.message = ''
        },
        reset() {
            this.clear()
        },
        submit() {
            if (!this.isValid) return false
            this.submitted.push(this.message.trim())
            this.clear()
            return true
        },
    },
})
