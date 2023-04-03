import { create } from "zustand"

export type Count = {
  count: { id: string; counter: number }
  increaseCount: () => void
  resetCount: () => void
}

const initialCount = { id: "count", counter: 0 }

export const useMutableCountStore = create<Count>((set) => ({
  count: initialCount,
  increaseCount: () =>
    set((state) => {
      state.count.counter = state.count.counter + 1 // 通常はオブジェクトを直接操作はできない
      return state
    }),
  resetCount: () => set({ count: initialCount }),
}))
