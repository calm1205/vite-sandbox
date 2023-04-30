import { Box, Button } from "@mui/material"

type Trigger = {
  increaseCount: () => void
  resetCount: () => void
}

/**
 * counterのトリガー
 */
export const Trigger: React.FC<Trigger> = ({ increaseCount, resetCount }) => {
  console.log("unControl trigger")
  return (
    <Box display="flex" gap="10px" mt="10px">
      <Button variant="contained" onClick={increaseCount}>
        Increase count
      </Button>
      <Button variant="outlined" onClick={resetCount}>
        Reset count
      </Button>
    </Box>
  )
}
