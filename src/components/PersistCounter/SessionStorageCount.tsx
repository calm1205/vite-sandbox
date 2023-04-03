import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useSessionStorageCountStore } from "~/lib/sessionStorageCountStore"

/**
 * SessionStorageへ値を保存するカウンター
 */
export const SessionStorageCounter: FC = () => {
  const counter = useSessionStorageCountStore()

  return (
    <div>
      <p>persist SessionStorage counter: {counter.count}</p>

      <Box display="flex" gap="10px" mt="10px">
        <Button variant="contained" onClick={counter.increaseCount}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={counter.resetCount}>
          Reset count
        </Button>
      </Box>
    </div>
  )
}
