import { Typography } from "@mui/material"
import { FC } from "react"
import { Outlet } from "react-router-dom"
import tw from "tailwindcss"

export const DefaultLayout: FC = () => (
  <>
    <header className="bg-sky-700">
      <Typography
        className="text-xl text-white h-14 flex items-center px-5 tracking-wide font-bold"
        component="h1"
      >
        zustand
      </Typography>
    </header>

    <Outlet />

    <footer className="bg-sky-900 h-10 w-full fixed bottom-0 text-center text-white items-center flex justify-center">
      footer
    </footer>
  </>
)
