import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useSliceCountStore } from "~/lib/sliceCountStore"

/**
 * カウンター: second
 */
export const SliceSecondCounter: FC = () => {
  const counter = useSliceCountStore((state) => state.secondCount)
  const increase = useSliceCountStore((state) => state.increaseTenCount)
  const reset = useSliceCountStore((state) => state.resetSecondCount)

  return (
    <div>
      <p>Second counter: {counter}</p>

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
