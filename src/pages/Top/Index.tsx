import { FC } from "react"
import { Link } from "react-router-dom"

const links: { to: string; children: string }[] = [
  { to: "minimal", children: "Minimal Counter" },
  { to: "immer", children: "Immer Counter" },
  { to: "persist", children: "Persist Counter" },
  { to: "slice", children: "Slice Counter" },
  { to: "rerender", children: "Rerender Counter" },
]

export const Top: FC = () => (
  <ul>
    {links.map(({ to, children }) => (
      <li key="to">
        <Link to={to} children={children} />
      </li>
    ))}
  </ul>
)
