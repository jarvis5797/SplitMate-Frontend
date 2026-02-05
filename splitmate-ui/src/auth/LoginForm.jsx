import { useState, useEffect } from 'react'
import Button from '../components/ui/Button'
import { useNavigate } from 'react-router-dom'
import { login } from '../api/authApi'

export default function LoginForm({ prefillEmail, successMessage }) {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: prefillEmail || '',
    password: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (prefillEmail) {
      setForm((prev) => ({ ...prev, email: prefillEmail }))
    }
  }, [prefillEmail])


  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const res = await login(form)
      localStorage.setItem('token', res.token)
      navigate('/app')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-4 my-6">
        <input
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full rounded-lg bg-slate-900 p-3 outline-none"
          required
        />

        <input
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full rounded-lg bg-slate-900 p-3 outline-none"
          required
        />

        {error && (
          <div className="rounded-lg bg-red-400/20 border border-red-400/40 
                  px-4 py-3 text-sm text-red-300">
            {error}
          </div>
        )}

        {successMessage && !error && (
          <div className="rounded-lg bg-lime-400/20 border border-lime-400/40 
                  px-4 py-3 text-sm text-lime-300">
            {successMessage}
          </div>
        )}

      </div>

      <Button>
        {loading ? 'Logging in...' : 'Login'}
      </Button>
    </form>
  )
}
