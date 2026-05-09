const dots = Array(64).fill('•')

export default function Home() {
  return (
    <>
      <section className="d-flex align-items-center" id="Home">
        <div className="d-flex decoration" data-aos="fade-right">
          <div className="d-flex flex-column align-items-center position-relative lifih-dwaara">
            <div className="rounded-circle"></div>
            <div className="vertical-ligne position-absolute"></div>
            <div className="rounded-circle circle2"></div>
          </div>
        </div>

        <div className="container">
          <div className="row mb-5">
            <div className="content col-lg-6 col-md-6" data-aos="fade-right">
              <h6 className="mt-3">
                hello ,<span>my name is</span>
              </h6>
              <h1 className="mt-3">
                <span>Alouhmy </span>
                <span className="ayoub">Ayoub</span>
              </h1>
              <h5 className="mt-3">
                Full-Stack <span>Developer</span> &amp; Freelancer
              </h5>
              <p className="mt-3">
                I'm full stack web developer with a passion for developing websites that combine
                powerful backend performance with an excellent user experience.
              </p>
              <div className="icons">
                <a href=""><i className="bi bi-instagram"></i></a>
                <a href=""><i className="bi bi-linkedin"></i></a>
                <a href=""><i className="bi bi-github"></i></a>
              </div>
              <div className="button mt-2">
                <button className="get-in-touch rounded-2">
                  Get in Touch <i className="bi bi-arrow-right"></i>
                </button>
                <button className="github rounded-2">
                  Gith-Hub <i className="bi bi-arrow-right"></i>
                </button>
              </div>
              <div className="dot-grid d-grid g-2 mt-5 position-absolute">
                {dots.map((dot, i) => (
                  <span className="dot" key={i}>{dot}</span>
                ))}
              </div>
            </div>

            <div className="circle col-lg-6 col-md-6 ms-auto" data-aos="fade-up">
              <img
                src="/images/file_00000000a3b061f8a18f32522fbdcef2-removebg-preview.png"
                alt="Ayoub Alouhmy"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="dot-grids d-grid g-2 mt-5 position-absolute">
        {dots.map((dot, i) => (
          <span className="dot" key={i}>{dot}</span>
        ))}
      </div>
    </>
  )
}
