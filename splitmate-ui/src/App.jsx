import Header from './components/layout/Header'
import MainLayout from './components/layout/MainLayout'
import Dashboard from './components/dashboard/Dashboard'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-white">
      <Header />
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  )
}
