import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useImmerCountStore } from "~/lib/immerCountStore"

/**
 * イミュータブルなCounter
 */
export const ImmerCounter: FC = () => {
  const counter = useImmerCountStore()

  const isCloned = () => {
    const count = counter.count
    counter.increaseCount
    const newCount = counter.count
    console.log("isCloned", count.id === newCount.id)
  }

  return (
    <div>
      <p>immutable counter: {counter.count.counter}</p>

      <Box display="flex" gap="10px" mt="10px">
        <Button variant="contained" onClick={counter.increaseCount}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={counter.resetCount}>
          Reset count
        </Button>
        <Button variant="outlined" onClick={isCloned}>
          isCloned
        </Button>
      </Box>
    </div>
  )
}
