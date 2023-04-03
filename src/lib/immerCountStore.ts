import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export type Count = {
  count: {
    id: string
    counter: number
  }
  increaseCount: () => void
  resetCount: () => void
}

const initialCount = { id: "count", counter: 0 }

export const useImmerCountStore = create<Count>()(
  immer((set) => ({
    count: initialCount,

    // オブジェクトの破壊的変更が可能。 pushやpopも活用可能。
    increaseCount: () => set((state) => void (state.count.counter += 1)),
    resetCount: () => set({ count: initialCount }),
  }))
)
