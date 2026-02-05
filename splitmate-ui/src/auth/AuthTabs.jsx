export default function AuthTabs({ active, onChange }) {
  return (
    <div className="flex rounded-lg bg-slate-800 p-1">
      {['signup', 'login'].map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`flex-1 rounded-md py-2 text-sm font-medium transition ${
            active === tab
              ? 'bg-lime-400 text-black'
              : 'text-white/60 hover:text-white'
          }`}
        >
          {tab === 'signup' ? 'Sign Up' : 'Login'}
        </button>
      ))}
    </div>
  )
}
