import { useState } from 'react'
import Button from '../components/ui/Button'
import { signUp } from '../api/authApi'
import { useNavigate } from 'react-router-dom'

export default function SignupForm({onSuccess}) {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      await signUp(form)
      onSuccess(form.email)
    } catch (err) {
      setError(err.message)
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="space-y-4 my-6">
        <input
          name="username"
          value={form.username}
          onChange={handleChange}
          // autoComplete="off"
          placeholder="Username"
          className="w-full rounded-xl bg-slate-800/70 px-4 py-3 
        text-sm outline-none placeholder:text-white/40 
        focus:ring-2 focus:ring-lime-400/40"
          required
        />

        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          // autoComplete="off"
          placeholder="Email"
          className="w-full rounded-xl bg-slate-800/70 px-4 py-3 
        text-sm outline-none placeholder:text-white/40 
        focus:ring-2 focus:ring-lime-400/40"
          required
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          autoComplete="new-password"
          placeholder="Password"
          className="w-full rounded-xl bg-slate-800/70 px-4 py-3 
        text-sm outline-none placeholder:text-white/40 
        focus:ring-2 focus:ring-lime-400/40"
          required
        />

        {error && (
          <div className="rounded-lg bg-red-500/10 border border-red-500/30 
                  px-4 py-3 text-sm text-red-400">
            {error}
          </div>
        )}
      </div>

      <Button>
        {loading ? 'Creating...' : 'Create Account'}
      </Button>
    </form>
  )
}
