const projects = [
  {
    id: 1,
    title: 'E-Commerce Website',
    image: "/images/Capture d'écran 2025-06-30 004847.png",
    imageLeft: true,
    aos: 'fade-right',
  },
  {
    id: 2,
    title: 'E-Commerce Website',
    image: "/images/Capture d'écran 2025-06-30 005005.png",
    imageLeft: false,
    aos: '',
  },
  {
    id: 3,
    title: 'E-Commerce Website',
    image: "/images/Capture d'écran 2025-06-30 005146.png",
    imageLeft: true,
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
              <div className="row g-4">
                {project.imageLeft ? (
                  <>
                    <div className="col-lg-6">
                      <img src={project.image} alt={project.title} />
                    </div>
                    <div className="col-lg-6">
                      <h5>{project.title}</h5>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="col-lg-6">
                      <h5>{project.title}</h5>
                    </div>
                    <div className="col-lg-6">
                      <img src={project.image} alt={project.title} />
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
