export default function AuthLayout({ left, right }) {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-16 px-6">
        
        {/* LEFT */}
        <div className="flex flex-col justify-center gap-12">
          <h1 className="text-[52px] leading-[1.1] font-extrabold tracking-tight">
            Split Bill & <br />
            E-Wallet <br />
            Made Easy
          </h1>

          <p className="text-white/60 max-w-md">
            Manage shared expenses, track balances, and settle bills effortlessly.
          </p>

          {left}
        </div>

        {/* RIGHT */}
        <div className="flex justify-center">
          <div className="relative w-full max-w-md rounded-2xl 
            bg-gradient-to-b from-slate-900/80 to-slate-950/90 
            p-8 shadow-2xl ring-1 ring-white/10 backdrop-blur">
            {right}
          </div>
        </div>

      </div>
    </section>
  )
}
