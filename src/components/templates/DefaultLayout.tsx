import { Box, Typography } from "@mui/material"
import { FC } from "react"
import { Link, Outlet } from "react-router-dom"

export const DefaultLayout: FC = () => (
  <>
    <Box component="header" bgcolor="#81d4fa">
      <Link to="/">
        <Typography component="h1" fontSize="30px" p="10px">
          zustand
        </Typography>
      </Link>
    </Box>

    <Box p="30px">
      <Outlet />
    </Box>
  </>
)
