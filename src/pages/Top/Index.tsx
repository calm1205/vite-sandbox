import { Box } from "@mui/material"
import { FC } from "react"
import { Counter1 } from "~/components/Counter/Counter.1"
import { Counter2 } from "~/components/Counter/Counter.2"
import { LocalStorageCounter } from "~/components/PersistCounter/LocalStorageCounter"
import { SessionStorageCounter } from "~/components/PersistCounter/SessionStorageCount"

const Top: FC = () => {
  return (
    <Box p="30px" display="flex" flexDirection="column" gap="10px">
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <LocalStorageCounter />
      <hr />
      <SessionStorageCounter />
    </Box>
  )
}

export default Top
