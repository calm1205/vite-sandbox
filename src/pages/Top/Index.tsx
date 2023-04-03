import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useCountStore } from "~/lib/countStore"

const Top: FC = () => {
  const counter = useCountStore()

  return (
    <Box p="30px">
      <p className="">counter: {counter.count}</p>

      <Box mt="30px" display="flex" gap="10px">
        <Button variant="contained" onClick={counter.increaseCount}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={counter.resetCount}>
          Reset count
        </Button>
      </Box>
    </Box>
  )
}

export default Top
