import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export type Count = {
  count: number
  increaseCount: () => void
  resetCount: () => void
}

// export const useImmerCountStore = create<Count>((set) => ({
//   count: 0,
//   increaseCount: () => set((state) => void (state.count += 1)), // 通常はオブジェクトを直接操作はできない
//   resetCount: () => set({ count: 0 }),
// }))

export const useImmerCountStore = create<Count>()(
  immer((set) => ({
    count: 0,
    increaseCount: () => set((state) => void (state.count += 1)), // オブジェクトの破壊的変更が可能
    resetCount: () => set({ count: 0 }),
  }))
)
