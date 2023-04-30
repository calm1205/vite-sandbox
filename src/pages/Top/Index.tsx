import { FC } from "react"
import { Link } from "react-router-dom"

const Top: FC = () => (
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
    <li>
      <Link to="slice" children="Slice Counter" />
    </li>
  </ul>
)

export default Top
