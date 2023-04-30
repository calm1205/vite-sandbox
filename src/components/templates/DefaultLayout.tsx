import { Box, Typography } from "@mui/material"
import { FC } from "react"
import { Outlet } from "react-router-dom"

export const DefaultLayout: FC = () => (
  <>
    <Box component="header" bgcolor="#81d4fa">
      <Typography component="h1" fontSize="30px" padding="10px">
        zustand
      </Typography>
    </Box>

    <Outlet />
  </>
)
