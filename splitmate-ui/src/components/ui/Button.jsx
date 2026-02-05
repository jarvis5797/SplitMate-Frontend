export default function Button({ children }) {
  return (
    <button
      type="submit"
      className="w-full rounded-xl bg-lime-400 py-3 
      font-semibold text-black transition hover:brightness-110"
    >
      {children}
    </button>
  )
}
