import { Box } from "@mui/material"
import { FC } from "react"
import { Counter1 } from "~/components/counter/Counter.1"
import { Counter2 } from "~/components/counter/Counter.2"
import { PersistLocalCounter } from "~/components/counter/PersistLocalCounter"

const Top: FC = () => {
  return (
    <Box p="30px" display="flex" flexDirection="column" gap="10px">
      <Counter1 />
      <hr />
      <Counter2 />
      <hr />
      <PersistLocalCounter />
    </Box>
  )
}

export default Top
