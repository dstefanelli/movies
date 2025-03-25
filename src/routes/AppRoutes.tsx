import { Routes, Route } from "react-router"
import Home from "../pages/Home"
import Series from "../pages/Series"
import Movies from "../pages/Movies"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
    </Routes>
  )
}
