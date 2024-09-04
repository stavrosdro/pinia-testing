import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)

  function logger(text: string) {
    console.log(`[counter logger]:: ${text}`)
  }

  function increment() {
    count.value++
    logger('increment is called')
  }

  return { count, logger, increment }
})
