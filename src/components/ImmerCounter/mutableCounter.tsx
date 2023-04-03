import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useMutableCountStore } from "~/lib/mutableCountState"

/**
 * ミュータブルなCounter
 */
export const MutableCounter: FC = () => {
  const counter = useMutableCountStore()

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
      </Box>
    </div>
  )
}
