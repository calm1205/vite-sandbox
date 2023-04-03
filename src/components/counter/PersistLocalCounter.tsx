import { Box, Button } from "@mui/material"
import { FC } from "react"
import { usePersistLocalCountStore } from "~/lib/persistLocalCountStore"

/**
 * localStorageへ値を保存するカウンター
 */
export const PersistLocalCounter: FC = () => {
  const counter = usePersistLocalCountStore()

  return (
    <>
      <p className="">persist localStorage counter: {counter.count}</p>

      <Box mt="30px" display="flex" gap="10px">
        <Button variant="contained" onClick={counter.increaseCount}>
          Increase count
        </Button>
        <Button variant="outlined" onClick={counter.resetCount}>
          Reset count
        </Button>
      </Box>
    </>
  )
}
