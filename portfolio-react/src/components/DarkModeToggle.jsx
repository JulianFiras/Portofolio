import React, { useState, useEffect } from 'react'
import { SunFill, MoonFill } from 'react-bootstrap-icons'

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
  if (isDark) {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark') // <- tambahkan ini
  } else {
    document.documentElement.classList.remove('dark')
    document.body.classList.remove('dark') // <- tambahkan ini
  }
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
}, [isDark])


  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="btn btn-outline-light btn-sm"
      aria-pressed={isDark}
      aria-label="Toggle dark mode"
      style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
    >
      {isDark ? <SunFill size={18} /> : <MoonFill size={18} />}
    </button>
  )
}

