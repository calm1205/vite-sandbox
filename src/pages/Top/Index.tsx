import { Box, Card } from "@mui/material"
import { FC } from "react"
import { Counter1 } from "~/components/Counter/Counter.1"
import { Counter2 } from "~/components/Counter/Counter.2"
import { ImmerCounter } from "~/components/ImmerCounter/immerCounter"
import { MutableCounter } from "~/components/ImmerCounter/mutableCounter"
import { LocalStorageCounter } from "~/components/PersistCounter/LocalStorageCounter"
import { SessionStorageCounter } from "~/components/PersistCounter/SessionStorageCount"

const Top: FC = () => {
  return (
    <Box p="30px" display="flex" flexDirection="column" gap="30px">
      <Box display="flex" gap="50px">
        <Counter1 />
        <Counter2 />
      </Box>

      <hr />

      <Box display="flex" gap="50px">
        <LocalStorageCounter />
        <SessionStorageCounter />
      </Box>

      <hr />
      <Box display="flex" gap="50px">
        <ImmerCounter />
        <MutableCounter />
      </Box>
    </Box>
  )
}

export default Top
