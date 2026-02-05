export default function StatCard({ title, value, highlight }) {
  return (
    <div
      className={`w-[180px] cursor-default rounded-xl p-5 ${
        highlight
          ? 'bg-lime-400 text-black'
          : 'bg-slate-900 text-white'
      }`}
    >
      <p className="text-sm opacity-70">{title}</p>
      <p className="mt-2 text-2xl font-bold">{value}</p>
    </div>
  )
}
