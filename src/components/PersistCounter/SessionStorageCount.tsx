import { Box, Button } from "@mui/material"
import { FC } from "react"
import { useSessionStorageCountStore } from "~/lib/sessionStorageCountStore"

/**
 * SessionStorageへ値を保存するカウンター
 */
export const SessionStorageCounter: FC = () => {
  const counter = useSessionStorageCountStore()

  return (
    <>
      <p className="">persist SessionStorage counter: {counter.count}</p>

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
