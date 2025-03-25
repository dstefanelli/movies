import "./App.css"
import { Counter } from "./features/counter/Counter"
import { Quotes } from "./features/quotes/Quotes"
import logo from "./logo.svg"
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
