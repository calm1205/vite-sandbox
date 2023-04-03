import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useCountStore } from "~/lib/countStore"

/**
 * カウンター1
 */
export const Counter1: FC = () => {
  const counter = useCountStore()

  return (
    <div>
      <p>counter1: {counter.count}</p>

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
