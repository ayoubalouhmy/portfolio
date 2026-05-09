const frontendSkills = [
  { icon: 'fa-brands fa-html5', label: 'Html' },
  { icon: 'fa-brands fa-css3-alt', label: 'Css' },
  { icon: 'fa-brands fa-js', label: 'JavaScript' },
  { icon: 'fa-brands fa-bootstrap', label: 'Bootstrap' },
  { icon: 'fa-brands fa-python', label: 'Python' },
  { icon: 'fa-brands fa-php', label: 'Php' },
  { icon: 'fa-solid fa-database', label: 'Mysql' },
]

const tools = [
  { icon: 'fa-brands fa-github', label: 'GitHub' },
  { icon: 'fa-brands fa-figma', label: 'Figma' },
  { icon: 'fa-brands fa-git', label: 'Git' },
  { icon: 'fa-solid fa-infinity', label: 'InfinityFree' },
]

function SkillCard({ icon, label, imgSrc }) {
  return (
    <div className="col-lg-3 col-md-4 col-6" data-aos="fade">
      <div className="skills-contents p-3 shadow-sm rounded text-center">
        <div className="skills-text pt-3 pb-3">
          {imgSrc ? (
            <img src={imgSrc} alt={label} style={{ width: '50%' }} />
          ) : (
            <i className={`${icon} fs-2`}></i>
          )}
          <p className="mt-2 mb-0">{label}</p>
        </div>
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section>
      <div className="container" id="Skills">
        <h3 className="mt-5 text-center">
          My Professionels <span>Skills</span>
        </h3>
        <hr className="hr-skils" data-aos="fade" />

        <h5 className="skills-h5 fw-bold mt-5">
          Frontend <span>&amp;</span>
          <span className="back"> Backend</span>
        </h5>
        <hr className="hr-skills" data-aos="fade" />

        <div className="row g-4 justify-content-between mt-4">
          {frontendSkills.map((skill) => (
            <SkillCard key={skill.label} icon={skill.icon} label={skill.label} />
          ))}
          <SkillCard
            label="Tailwind Css"
            imgSrc="/images/3920388-middle-removebg-preview.png"
          />
        </div>

        <h5 className="skills-h5 fw-bold mt-5">My Tools</h5>
        <hr className="hr-skills" data-aos="fade" />

        <div className="row g-4 justify-content-between mt-4">
          {tools.map((tool) => (
            <SkillCard key={tool.label} icon={tool.icon} label={tool.label} />
          ))}
        </div>
      </div>
    </section>
  )
}
