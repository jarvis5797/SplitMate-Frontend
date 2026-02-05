// src/api/authApi.js
export async function signUp(payload) {
  const res = await fetch('http://localhost:8080/auth/signUp', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    let message = 'Signup failed'

    if (res.status === 409) {
      message = 'Email is already associated with another account'
    }

    throw new Error(message)
  }

  return res.json()
}

export async function login(payload) {
  const res = await fetch('http://localhost:8080/auth/logIn', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  })

  if (!res.ok) {
    let message = 'Login failed'

    if (res.status === 401) {
      message = 'Email address or password is incorrect'
    } else if (res.status === 404) {
      message = 'No account found with this email address'
    } else if (res.status === 403) {
      message = 'Account is not verified. Please verify your email address.'
    } else {
      message = 'Server error. Please try again later.'
    }

    throw new Error(message)
  }

  return res.json()
}
