import { Box } from "@mui/material"
import { Counter } from "./Counter"
import { Trigger } from "./Trigger"
import { useCountStore } from "./useCountStore"

/**
 * 再レンダリング 調査ページ
 */
export const UnControlRerender = () => {
  const counter = useCountStore()

  console.log("unControl parent")

  return (
    <Box sx={{ border: 1, p: "10px" }}>
      <p>render制御なし</p>
      <Counter count={counter.count} />
      <Trigger
        increaseCount={counter.increaseCount}
        resetCount={counter.resetCount}
      />
    </Box>
  )
}
