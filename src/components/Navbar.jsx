import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Home', href: '#Home' },
  { label: 'About me', href: '#About-us' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact me', href: '#Contact-us' },
]

export default function Navbar({ darkMode, toggleDarkMode }) {
  const [activeLink, setActiveLink] = useState('Home')

  useEffect(() => {
    const handleScroll = () => {
      // Offset de 200px pour détecter la section un peu avant qu'elle ne touche le haut
      const scrollPosition = window.scrollY + 200;

      navLinks.forEach(link => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveLink(link.label);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="/" style={{ fontWeight: 'bold' }}>
          A<span style={{ color: '#4ACA99', fontWeight: 'bold' }}>A.</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {navLinks.map(({ label, href }) => (
              <li className="nav-item" key={label}>
                <a
                  className={`text-decoration-none nav-link ${activeLink === label ? 'active' : ''}`}
                  href={href}
                  onClick={() => setActiveLink(label)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="icons-nav">
            <i
              className={`dark-mode bi ${darkMode ? 'bi-sun-fill' : 'bi-moon-stars'} me-2`}
              onClick={toggleDarkMode}
            ></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>
      </div>
    </nav>
  )
}
