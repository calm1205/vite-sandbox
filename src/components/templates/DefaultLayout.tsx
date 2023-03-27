import { Outlet } from "react-router-dom"

export const DefaultLayout: React.FC = () => (
  <>
    <header>header</header>
    <Outlet />
    <footer>footer</footer>
  </>
)
