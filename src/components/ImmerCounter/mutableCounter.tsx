import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useMutableCountStore } from "~/lib/mutableCountState"

/**
 * ミュータブルなCounter
 */
export const MutableCounter: FC = () => {
  const counter = useMutableCountStore()

  const isCloned = () => {
    const count = counter.count
    counter.increaseCount
    const newCount = counter.count
    console.log("isCloned", count.id === newCount.id)
  }

  return (
    <div>
      <p>mutable counter: {counter.count.counter}</p>

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
