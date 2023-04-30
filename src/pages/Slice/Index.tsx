import { Box } from "@mui/material"
import {
  SliceFirstCounter,
  SliceSecondCounter,
} from "~/components/SliceCounter"

export const Slice = () => (
  <Box display="flex" gap="30px">
    <SliceFirstCounter />
    <SliceSecondCounter />
  </Box>
)
