import "./App.css"
import { MainLayout } from "./components/templates/MainLayout"
import AppRoutes from "./routes/AppRoutes"

export default function App() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </div>
  )
}
