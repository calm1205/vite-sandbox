import { Box } from "@mui/material"
import {
  LocalStorageCounter,
  SessionStorageCounter,
} from "~/components/PersistCounter"

export const Persist = () => (
  <Box display="flex" gap="30px">
    <LocalStorageCounter />
    <SessionStorageCounter />
  </Box>
)
