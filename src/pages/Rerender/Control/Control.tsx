import { Box } from "@mui/material"
import { Counter } from "./Counter"
import { Trigger } from "./Trigger"

/**
 * 再レンダリングを制御
 */
export const ControlRerender = () => {
  console.log("Control parent")

  return (
    <Box sx={{ border: 1, p: "10px" }}>
      <p>render制御</p>
      <Counter />
      <Trigger />
    </Box>
  )
}
