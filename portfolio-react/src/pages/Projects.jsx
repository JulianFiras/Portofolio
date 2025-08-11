import React from 'react'
import projects from '../data/projects'

export default function Projects(){
  return (
    <main className="container-main">
      <section className="section">
        <h1 className="mb-4">Projects</h1>
        <figcaption>List proyek oleh M. Aldi Julian Firas.</figcaption>
        <br></br>
        <div className="row">
          {projects.map(p => (
            <div key={p.id} className="col-12 mb-4"> 
              <div className="card shadow-sm">
                <img 
                src={p.image} 
                className="card-img-top" 
                alt={p.title} 
                style={{
                  maxHeight: 300, 
                  objectFit: 'contain',
                  backgroundColor: '#34495E' 
                }}
                 />
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                  <a href={p.url} className="btn btn-primary btn-sm">View</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

