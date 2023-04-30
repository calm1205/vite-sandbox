import { Box } from "@mui/material"

import { ControlRerender } from "./Control/Control"
import { UnControlRerender } from "./UnControl/UnControl"

/**
 * 再レンダリング 調査ページ
 */
export const Rerender = () => {
  console.log("page")

  return (
    <Box display="flex" flexDirection="row" gap="30px">
      <ControlRerender />
      <UnControlRerender />
    </Box>
  )
}
