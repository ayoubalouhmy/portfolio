export default function About() {
  return (
    <section id="About-us" style={{ marginTop: '50px' }}>
      <div className="container">
        <div className="text-center">
          <h3 className="m-0" data-aos="fade">
            <span>A</span>bout <span>Me</span>
          </h3>
          <hr className="custom-hr mb-5" data-aos="fade" />
        </div>

        <div className="row position-relative g-2 justify-content-between about">
          {/* Image */}
          <div className="about-content col-lg-3 col-md-6" data-aos="fade">
            <div className="about-image rounded-2 mt-5">
              <img
                src="/images/file_00000000a3b061f8a18f32522fbdcef2.png"
                alt="Ayoub Alouhmy"
              />
            </div>
          </div>

          {/* Text */}
          <div className="about-text col-lg-3 col-md-6 mt-5" data-aos="fade">
            <h5 className="text-center fw-bold">Full Stack Developer based in Morocco</h5>
            <p className="pt-3 pe-2 ps-2">
              Hi, I'm Ayoub Alouhmy, a 19-year-old web developer from Morocco. Passionate about
              technology and problem-solving, I dive into web development to tackle challenges and
              innovate. Whether it's front-end design or back-end logic, I thrive on pushing
              boundaries and creating inspiring solutions.
            </p>
            <h3 className="number pe-2 ps-2 fw-bold">+5</h3>
            <p className="pe-2 ps-2">Projects Completed</p>
          </div>

          {/* Decoration */}
          <div className="col d-flex decoration2" data-aos="fade">
            <div className="d-flex flex-column align-items-center position-relative lifih-dwaara">
              <div className="rounded-circle"></div>
              <div className="vertical-ligne position-absolute"></div>
              <div className="rounded-circle circle2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
