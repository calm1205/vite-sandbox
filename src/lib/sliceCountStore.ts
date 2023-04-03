import { create, StateCreator } from "zustand"

type FirstCount = {
  firstCount: number
  increaseCount: () => void
  resetFirstCount: () => void
}

type SecondCount = {
  secondCount: number
  increaseTenCount: () => void
  resetSecondCount: () => void
}

const firstCounter: StateCreator<FirstCount> = (set) => ({
  firstCount: 0,
  increaseCount: () =>
    set(({ firstCount }) => ({ firstCount: firstCount + 1 })),
  resetFirstCount: () => set({ firstCount: 0 }),
})

const secondCounter: StateCreator<SecondCount> = (set) => ({
  secondCount: 0,
  increaseTenCount: () =>
    set(({ secondCount }) => ({ secondCount: secondCount + 10 })),
  resetSecondCount: () => set({ secondCount: 0 }),
})

export const useSliceCountStore = create<FirstCount & SecondCount>(
  (...args) => ({
    ...firstCounter(...args),
    ...secondCounter(...args),
  })
)
