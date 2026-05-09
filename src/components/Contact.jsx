import { useState } from 'react'
import axios from 'axios'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null) // 'success' | 'error' | null

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validation
    if (!form.name.trim() || !form.email.trim() || !form.message.trim() || !form.email.includes('@')) {
      setStatus('error')
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/send-email', form);

      if (response.data.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        // Cache le message de succès après 5 secondes
        setTimeout(() => setStatus(null), 5000);
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi", error);
      setStatus('error')
    }
  }

  return (
    <section className="section2" id="Contact-us">
      <div className="container">
        <h3 className="mt-5 text-center" data-aos="fade">
          Get in <span>Touch</span>
        </h3>
        <hr className="hr-contact" data-aos="fade" />

        <div className="row">
          {/* Contact icons column */}
          <div className="col-lg-2" data-aos="fade">
            <div className="position-relative round">
              <div className="rounded-circle circle-contact mt-5 d-flex justify-content-center align-items-center">
                <i className="bi bi-envelope fs-5"></i>
              </div>
              <div className="ligne"></div>
            </div>
            <div className="position-relative round">
              <div className="rounded-circle circle-contact mt-5 d-flex justify-content-center align-items-center">
                <i className="bi bi-instagram fs-5"></i>
              </div>
              <div className="ligne"></div>
            </div>
            <div className="position-relative round">
              <div className="rounded-circle circle-contact mt-5 d-flex justify-content-center align-items-center">
                <i className="bi bi-telephone fs-5"></i>
              </div>
              <div className="ligne"></div>
            </div>
          </div>

          {/* Contact info */}
          <div className="information-contact col-lg-4 mt-5" data-aos="fade">
            <h4 className="fw-bold">Email</h4>
            <p>ayoubalouhmy02@gmail.com</p>
            <h4 className="fw-bold mt-5">Instagram</h4>
            <p>
              <a href="" className="insta text-decoration-none">
                eyouuub_02
              </a>
            </p>
            <h4 className="fw-bold mt-5">Telephone</h4>
            <p>
              <a href="" className="phone text-decoration-none">
                +212776773950
              </a>
            </p>
          </div>

          {/* Contact form */}
          <div className="form-contact col-lg-6 text-center mt-5" data-aos="fade">
            {status === 'success' && (
              <div className="alert alert-success mb-3" role="alert" style={{ fontSize: '14px', padding: '10px' }}>
                ✅ Votre message a été envoyé avec succès !
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger mb-3" role="alert" style={{ fontSize: '14px', padding: '10px' }}>
                ❌ Une erreur est survenue ou la clé est manquante.
              </div>
            )}
            <form className="form ms-auto" onSubmit={handleSubmit}>
              <div className="text mb-3">
                <input
                  type="text"
                  placeholder="name :"
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div className="text mb-3">
                <input
                  type="text"
                  placeholder="Email :"
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <textarea
                  name="message"
                  placeholder="message :"
                  required
                  value={form.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="send btn-contact">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
