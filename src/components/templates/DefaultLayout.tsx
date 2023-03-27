import { PropsWithChildren } from "react"
import { Outlet } from "react-router-dom"

type Props = PropsWithChildren<{}>

export const DefaultLayout: React.FC<Props> = ({ children }) => (
  <>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </>
)
