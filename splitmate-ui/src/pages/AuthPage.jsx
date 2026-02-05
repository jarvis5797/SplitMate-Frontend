import { useState } from 'react'
import AuthLayout from '../auth/AuthLayout'
import AuthTabs from '../auth/AuthTabs'
import SignupForm from '../auth/SignupForm'
import LoginForm from '../auth/LoginForm'

export default function AuthPage() {
  const [activeTab, setActiveTab] = useState('signup')
  const [signupSuccess, setSignupSuccess] = useState(null)
  const [prefillEmail, setPrefillEmail] = useState('')


  return (
    <AuthLayout
      left={
        <div className="flex gap-4">
          <Stat label="I'm Owed" value="Rs.425.00" highlight />
          <Stat label="My Costs" value="Rs.225.00" />
          <Stat label="Total Costs" value="Rs.225.00" />
        </div>
      }
      right={
        <>
          <h2 className="text-2xl font-bold text-center mb-6">
            Track. Split. Settle.
          </h2>

          <AuthTabs active={activeTab} onChange={setActiveTab} />

          <div className="mt-6">
            {activeTab === 'signup' ? <SignupForm
              onSuccess={(email) => {
                setSignupSuccess('Account created successfully. Please log in.')
                setPrefillEmail(email)
                setActiveTab('login')
              }}
            /> : <LoginForm
              prefillEmail={prefillEmail}
              successMessage={signupSuccess}
            />}
          </div>
        </>
      }
    />
  )
}

function Stat({ label, value, highlight }) {
  return (
    <div
      className={`w-40 rounded-xl p-4 ${highlight ? 'bg-lime-400 text-black' : 'bg-slate-900'
        }`}
    >
      <p className="text-sm opacity-70">{label}</p>
      <p className="mt-1 font-bold">{value}</p>
    </div>
  )
}
