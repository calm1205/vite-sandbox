import { Box } from "@mui/material"
import { FC } from "react"
import { Link } from "react-router-dom"
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
        <li>
          <Link to="persist" children="Persist Counter" />
        </li>
      </ul>

      <hr />
      <Box display="flex" gap="50px">
        <SliceFirstCounter />
        <SliceSecondCounter />
      </Box>
    </Box>
  )
}

export default Top
