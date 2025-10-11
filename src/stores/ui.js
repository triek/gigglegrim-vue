import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
    state: () => ({
        darkMode: false,
        textSize: 'medium', // 'small', 'medium', 'large'
    }),
    getters: {
        isDark: (state) => state.darkMode,
        fontSizeClass: (state) => `text-size-${state.textSize}`,
    },
    actions: {
        toggleDark() {
            this.darkMode = !this.darkMode
        },
        setTextSize(size) {
            this.textSize = size
        }
    }
})