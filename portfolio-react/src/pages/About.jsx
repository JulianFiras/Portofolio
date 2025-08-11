import React from 'react'
import './About.css'

export default function About(){
  return (
    <main className="container-main about-page">
      <header>
        <h1>About Me</h1>
      </header>

      <section className="bio">
        <figure className="profile">
          <img 
          src={new URL('../assets/Me2.jpg', import.meta.url).href} 
          alt="profile" 
          style={{width:400,borderRadius:12}} 
          />
          <figcaption>Muhammad Aldi Julian Firas — Programmer/Front-end Developer</figcaption>
        </figure>
        <article className="info">
          <h2>Bio</h2>
          <p>Saya adalah seorang pengembang pemula yang menciptakan antarmuka pengguna yang mudah untuk diakses dengan rekayasa yang tangguh. Pekerjaan favorit saya terletak pada desain dan pengembangan, menciptakan experience yang baik dan dirancang dengan cermat untuk performa dan kegunaan.

Saat ini, saya merupakan mahasiswa semester 9 Teknik Informatika Universitas Mataram, dengan penjurusan sistem informasi. Saya ingin menjadi web programmer yang mampu memenuhi standar aksesibilitas web dan praktik terbaik untuk menghadirkan pengalaman pengguna yang inklusif.

Sebelumnya, saya pernah berkesempatan mengembangkan front-end web milik Diskominfo Kota Mataram semasa PKL.</p>

          <h3>Skills</h3>
          <ul>
            <li>HTML5 & semantic markup</li>
            <li>CSS3 (Flexbox, Grid) — manual styling</li>
            <li>JavaScript (ES6+), React</li>
            <li>Bootstrap</li>
          </ul>
        </article>
      </section>

      <footer className="about-footer">
        <br />
        <p>Ingin bekerja sama? Klik halaman Contact.</p>
      </footer>
    </main>
  )
}
