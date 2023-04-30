import { Box } from "@mui/material"
import { Counter } from "./Counter"
import { Trigger } from "./Trigger"

/**
 * OK: 再レンダリングを制御
 *
 * 親のコンポーネントではStoreは呼び出さない。
 * CounterやTrigger等の使う場所でピンポイントに呼び出す。
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
