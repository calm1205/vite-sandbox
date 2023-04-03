import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useSliceCountStore } from "~/lib/sliceCountStore"

/**
 * カウンター: first
 */
export const SliceFirstCounter: FC = () => {
  const counter = useSliceCountStore((state) => state.firstCount)
  const increase = useSliceCountStore((state) => state.increaseCount)
  const reset = useSliceCountStore((state) => state.resetFirstCount)

  return (
    <div>
      <p>first counter: {counter}</p>

      <Box display="flex" gap="10px" mt="10px">
        <Button variant="contained" onClick={increase}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={reset}>
          Reset count
        </Button>
      </Box>
    </div>
  )
}
