import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./components/templates/DefaultLayout"
import About from "./pages/About/Index"
import NotFound from "./pages/NotFound/Index"
import Top from "./pages/Top/Index"

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<DefaultLayout />}>
      <Route index element={<Top />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
)

export default App
