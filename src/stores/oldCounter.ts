import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    logger(text: string) {
      console.log(`[counter logger]:: ${text}`)
    },
    increment() {
      this.count++
      this.logger('increment is called')
    }
  }
})
