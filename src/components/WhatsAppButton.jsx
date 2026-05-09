export default function WhatsAppButton() {
  const phone = '212776773950' // 0776773950 → format international Maroc
  const message = encodeURIComponent("Bonjour Ayoub, j'ai visité votre portfolio et je souhaite vous contacter.")

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-btn"
      aria-label="Contacter sur WhatsApp"
      title="Contacter sur WhatsApp"
    >
      <i className="fa-brands fa-whatsapp"></i>
      <span className="whatsapp-tooltip">WhatsApp</span>
    </a>
  )
}
