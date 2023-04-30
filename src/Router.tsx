import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "~/components/templates/DefaultLayout"

import { Immer, Minimal, NotFound, Persist, Slice, Top } from "./pages"

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Top />} />

      <Route path="minimal" element={<Minimal />} />
      <Route path="immer" element={<Immer />} />
      <Route path="persist" element={<Persist />} />
      <Route path="slice" element={<Slice />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
