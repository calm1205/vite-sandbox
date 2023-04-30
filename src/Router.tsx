import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "~/components/templates/DefaultLayout"
import About from "~/pages/About/Index"
import NotFound from "~/pages/NotFound/Index"
import Top from "~/pages/Top/Index"
import { Minimal } from "./pages"

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Top />} />
      <Route path="minimal" element={<Minimal />} />
      <Route path="about" element={<About />} />
    </Route>
    <Route path="*" element={<NotFound />} />
  </Routes>
)

export default Router
