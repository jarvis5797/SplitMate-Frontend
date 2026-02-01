import StatCard from "../dashboard/StatCard";


export default function MainLayout({ children }) {
  return (
    <section className="w-full px-10">
      <div className="grid grid-cols-2 h-full">
        
        {/* LEFT SIDE – Text / Stats */}
        <div className="flex flex-col justify-center gap-8">
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
