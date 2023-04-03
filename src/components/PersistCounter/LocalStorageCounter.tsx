import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useLocalStorageCountStore } from "~/lib/localStorageCountStore"

/**
 * localStorageへ値を保存するカウンター
 */
export const LocalStorageCounter: FC = () => {
  const counter = useLocalStorageCountStore()

  return (
    <div>
      <p>persist localStorage counter: {counter.count}</p>

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
