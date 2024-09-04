import { createPinia, setActivePinia } from 'pinia'
import { describe, beforeEach, it, vi, expect } from 'vitest'
import { useCounterStore } from '../oldCounter'

describe('oldCounter', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  describe('increment', () => {
    it('should log properly', () => {
      const store = useCounterStore()
      const spy = vi.spyOn(store, 'logger')

      store.increment()

      expect(spy).toHaveBeenCalledWith('increment is called')
    })
  })
})
