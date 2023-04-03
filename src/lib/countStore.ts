import { create } from "zustand"

type Count = {
  count: number
  increaseCount: () => void
  resetCount: () => void
}

export const useCountStore = create<Count>((set) => ({
  count: 0,
  increaseCount: () => set(({ count }) => ({ count: count + 1 })),
  resetCount: () => set({ count: 0 }),
}))
