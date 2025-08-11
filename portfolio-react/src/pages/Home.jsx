import React from 'react'
import bgImage from '../assets/bghome.jpg'

export default function Home() {
  return (
    <main>
      {/* Hero Section Full Width */}
      <section
        className="text-center text-white d-flex flex-column justify-content-center"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '120px 20px',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
          margin: 0,
          borderRadius: 0,
        }}
      >
        {/* Overlay gelap */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.5)',
            zIndex: 1,
          }}
        ></div>

        {/* Konten teks */}
        <div style={{ position: 'relative', zIndex: 2 }}>
          <h1>Halo, Saya <strong>M. Aldi Julian Firas</strong></h1>
          <p className="lead">Programmer / Frontend Developer</p>
          <p>
            Selamat datang di web portofolio saya — anda dapat menemukan proyek dan kontak saya di sini.
          </p>
        </div>
      </section>

      {/* Section berikutnya */}
      <section className="container-main section">
        <div className="row align-items-center">
          <div className="col-md-6">
            <h3>What I do</h3>
            <p>
              Saya membangun aplikasi web kecil dan menengah menggunakan React dan tools modern
              yang berfokus pada aksesibilitas dan desain yang responsif.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <img
              src={new URL('../assets/Me.jpg', import.meta.url).href}
              alt="profile"
              style={{ width: 400, borderRadius: 12 }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
