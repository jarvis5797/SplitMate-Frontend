import StatCard from "../../pages/StatCard";


export default function MainLayout({ children }) {
  return (
    <section className="min-h-screen flex items-center">
      <div className="mx-auto my-auto grid max-w-6xl grid-cols-2 gap-16">
        <div className="flex flex-col justify-center gap-12">
          <h1 className="text-5xl font-bold leading-tight">
            Split Bill & <br />
            E-Wallet <br />
            Made Easy
          </h1>

          <div className="flex gap-4">
            <StatCard
              title="I'm Owed"
              value="Rs.425.00"
              highlight
            />
            <StatCard
              title="My Costs"
              value="Rs.225.00"
            />
            <StatCard
              title="Total Costs"
              value="Rs.225.00"
            />
          </div>
        </div>

        {/* RIGHT SIDE – Visual placeholder */}
        <div className="flex items-center justify-center">
          <div className="w-[420px] h-[520px] rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 border border-white/10" />
        </div>

      </div>
    </section>
  )
}
