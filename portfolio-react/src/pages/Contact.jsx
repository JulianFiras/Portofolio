import React, { useState } from 'react'
import { Envelope, GeoAlt, Telephone, Globe } from 'react-bootstrap-icons'
import githubIcon from '../assets/icons8-github-30.png' 

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  function validate(values) {
    const e = {}
    if (!values.name.trim()) e.name = 'Nama wajib diisi'
    if (!values.email.trim()) e.email = 'Email wajib diisi'
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) e.email = 'Email tidak valid'
    if (!values.message.trim()) e.message = 'Pesan wajib diisi'
    return e
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 3000)
    }
  }

  return (
    <main className="container-main">
      <section className="section">
        <h1>Contact</h1>
        <p>Jika Anda memiliki proyek atau hanya ingin menyapa, kirimkan pesan<br />
        melalui form berikut.</p>

        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} noValidate style={{ maxWidth: '100%' }}>
              <div className="mb-3">
                <label className="form-label">Nama</label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                />
                {errors.name && <div className="invalid-feedback">{errors.name}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Pesan</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                  rows={5}
                ></textarea>
                {errors.message && <div className="invalid-feedback">{errors.message}</div>}
              </div>

              <button type="submit" className="btn btn-primary">Send</button>
              {sent && <div className="alert alert-success mt-3">Pesan Terkirim</div>}
            </form>
          </div>

          <div className="col-md-6">
            <ul className="list-unstyled ps-5">
              <li className="mb-3 d-flex align-items-center">
                <GeoAlt className="me-2 text-primary" />
                Mataram, Nusa Tenggara Barat, Indonesia
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Telephone className="me-2 text-primary" />
                081949649111
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Envelope className="me-2 text-primary" />
                julianfiras13@gmail.com
              </li>
              <li className="mb-3 d-flex align-items-center">
                <Globe className="me-2 text-primary" />
                http://localhost:5173
              </li>
              <li className="mb-3 d-flex align-items-center">
                <img src={githubIcon} alt="GitHub" style={{width:20, marginRight:8}} />
                <a href="https://github.com/JulianFiras" target="_blank" rel="noopener noreferrer">
                  github.com/JulianFiras
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

