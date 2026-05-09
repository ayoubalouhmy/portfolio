const footerLinks = [
  { label: 'Home', href: '#Home' },
  { label: 'About', href: '#About-us' },
  { label: 'Skills', href: '#Skills' },
  { label: 'Projects', href: '#Projects' },
  { label: 'Contact', href: '#Contact-us' },
]

export default function Footer() {
  return (
    <footer style={{ marginTop: '110px' }}>
      <ul className="nav-foot navbar-nav d-flex justify-content-center flex-row gap-2">
        {footerLinks.map(({ label, href }) => (
          <li className="nav-item" key={label}>
            <a href={href} className="nav-link">
              {label}
            </a>
          </li>
        ))}
      </ul>

      <div className="icons text-center mt-3 pb-2">
        <a href=""><i className="bi bi-instagram"></i></a>
        <a href=""><i className="bi bi-linkedin"></i></a>
        <a href=""><i className="bi bi-github"></i></a>
        <a href=""><i className="bi bi-envelope fs-5"></i></a>
        <a href=""><i className="bi bi-telephone fs-5"></i></a>
      </div>
    </footer>
  )
}
