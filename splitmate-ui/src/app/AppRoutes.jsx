import { Routes, Route } from 'react-router-dom'
import DashboardPage from '../pages/DashboardPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/app" element={<DashboardPage />} />
    </Routes>
  )
}
