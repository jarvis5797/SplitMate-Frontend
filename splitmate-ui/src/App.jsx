import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Header from './components/layout/Header'
import AuthPage from './pages/AuthPage'
import AppRoutes from './app/AppRoutes'

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-950 text-white">
        <Header />

        <Routes>
          <Route path="/" element={<AuthPage />} />
          <Route path="/app/*" element={<AppRoutes />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
