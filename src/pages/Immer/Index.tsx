import { Box } from "@mui/material"
import { ImmerCounter, MutableCounter } from "~/components/ImmerCounter"

export const Immer = () => (
  <Box display="flex" gap="30px">
    <ImmerCounter />
    <MutableCounter />
  </Box>
)
