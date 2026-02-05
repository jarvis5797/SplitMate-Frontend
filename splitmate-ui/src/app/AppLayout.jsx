import Header from '../components/layout/Header'

export default function AppLayout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header />
      <main className="px-8 py-6">{children}</main>
    </div>
  )
}
