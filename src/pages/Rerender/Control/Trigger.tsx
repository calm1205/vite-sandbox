import { Box, Button } from "@mui/material"
import { useCountStore } from "./useCountStore"

/**
 * counterのトリガー
 */
export const Trigger: React.FC = () => {
  const increaseCount = useCountStore((state) => state.increaseCount)
  const resetCount = useCountStore((state) => state.resetCount)

  console.log("control trigger")
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
