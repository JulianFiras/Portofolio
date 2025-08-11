import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container text-center">
        <small>© {new Date().getFullYear()} My Portofolio — M. Aldi Julian Firas</small>
      </div>
    </footer>
  )
}