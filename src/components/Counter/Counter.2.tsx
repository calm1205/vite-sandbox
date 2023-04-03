import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useCountStore } from "~/lib/countStore"

/**
 * カウンター2
 */
export const Counter2: FC = () => {
  const counter = useCountStore()

  return (
    <>
      <p className="">counter2: {counter.count}</p>

      <Box mt="30px" display="flex" gap="10px">
        <Button variant="contained" onClick={counter.increaseCount}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={counter.resetCount}>
          Reset count
        </Button>
      </Box>
    </>
  )
}
