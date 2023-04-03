import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import { Count } from "./countStore"

/**
 * sessionStorageに値を保存
 */
export const useSessionStorageCountStore = create<Count>()(
  persist(
    (set) => ({
      count: 0,
      increaseCount: () => set(({ count }) => ({ count: count + 1 })),
      resetCount: () => set({ count: 0 }),
    }),
    {
      name: "persist-storage",
      storage: createJSONStorage(() => sessionStorage),
    }
  )
)
