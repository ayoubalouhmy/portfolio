const projects = [
  {
    id: 1,
    title: 'Modern Learning Academy',
    description: "A comprehensive educational platform designed for a school or academy. It features course management, student registration, and an intuitive dashboard for tutors to manage educational content.",
    image: "/images/Capture d'écran 2025-06-30 004847.png",
    imageLeft: true,
    url: "#",
    aos: 'fade-right',
  },
  {
    id: 2,
    title: 'Delicious Donuts Shop',
    description: "A colorful and interactive website for a specialty donut shop. Features include a sweet-themed visual layout, an interactive flavor menu, and a simple ordering system for local customers.",
    image: "/images/Capture d'écran 2025-06-30 005005.png",
    imageLeft: false,
    url: "#",
    aos: 'fade-left',
  },
  {
    id: 3,
    title: 'E-Commerce Dashboard',
    description: "A professional administration panel for managing online stores. Provides real-time data visualization of sales, inventory control, and customer management tools to streamline business operations.",
    image: "/images/Capture d'écran 2025-06-30 005146.png",
    imageLeft: true,
    url: "#",
    aos: 'fade-right',
  },
]

export default function Projects() {
  return (
    <section className="section" id="Projects" style={{ margin: '100px 0' }}>
      <div className="container">
        <h3 className="mt-5 text-center" data-aos="fade">
          My <span>Projects</span>
        </h3>
        <hr className="hr-project" data-aos="fade" />
        <p className="text-center" data-aos="fade">
          Featured work I've built and designed
        </p>

        <div className="row">
          {projects.map((project) => (
            <div
              className="projet-content"
              key={project.id}
              data-aos={project.aos || undefined}
            >
              <div className="row g-4 align-items-center">
                {project.imageLeft ? (
                  <>
                    <div className="col-lg-6">
                      <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '15px' }} />
                    </div>
                    <div className="col-lg-6">
                      <h5 className="fw-bold">{project.title}</h5>
                      <p className="mt-3 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                      <a href={project.url} className="btn btn-project mt-3 px-4 py-2">
                        View Project <i className="bi bi-box-arrow-up-right ms-2"></i>
                      </a>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-6 order-2 order-lg-1">
                      <h5 className="fw-bold">{project.title}</h5>
                      <p className="mt-3 text-muted" style={{ fontSize: '0.95rem', lineHeight: '1.6' }}>
                        {project.description}
                      </p>
                      <a href={project.url} className="btn btn-outline-primary mt-3 px-4 py-2" style={{ borderRadius: '25px', fontWeight: '500' }}>
                        View Project <i className="bi bi-box-arrow-up-right ms-2"></i>
                      </a>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2">
                      <img src={project.image} alt={project.title} style={{ width: '100%', borderRadius: '15px' }} />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
