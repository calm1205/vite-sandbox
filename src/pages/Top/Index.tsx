import { Box } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
import { ImmerCounter } from "~/components/ImmerCounter/immerCounter"
import { MutableCounter } from "~/components/ImmerCounter/mutableCounter"
import { LocalStorageCounter } from "~/components/PersistCounter/LocalStorageCounter"
import { SessionStorageCounter } from "~/components/PersistCounter/SessionStorageCount"
import { SliceFirstCounter } from "~/components/SliceCounter/SliceFirstCounter"
import { SliceSecondCounter } from "~/components/SliceCounter/SliceSecondCounter"

const Top: FC = () => {
  return (
    <Box p="30px" display="flex" flexDirection="column" gap="30px">
      <ul>
        <li>
          <Link to="minimal" children="Minimal Counter" />
        </li>
        <li>
          <Link to="immer" children="Immer Counter" />
        </li>
      </ul>

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

      <hr />
      <Box display="flex" gap="50px">
        <SliceFirstCounter />
        <SliceSecondCounter />
      </Box>
    </Box>
  )
}

export default Top
