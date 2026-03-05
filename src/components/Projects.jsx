import { motion } from 'framer-motion'
import {
  FaBrain, FaBriefcase, FaTrain, FaMicrophone, FaGraduationCap,
  FaDatabase, FaSatellite, FaSmile, FaChartLine, FaCode, FaRobot,
  FaComments, FaFilm, FaLanguage
} from 'react-icons/fa'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import { professionalProjects, personalProjects, academicProjects } from '../data/portfolioData'
import './Projects.css'

const iconMap = {
  FaBrain, FaBriefcase, FaTrain, FaMicrophone, FaGraduationCap,
  FaDatabase, FaSatellite, FaSmile, FaChartLine, FaCode, FaRobot,
  FaComments, FaFilm, FaLanguage,
}

const sectionConfig = [
  {
    key: 'professional',
    label: '// professional',
    title: 'Professional Projects',
    subtitle: 'Systems built at Cloud Analogy and GateTutor InfoEdge — production-grade, real-world impact',
    accent: 'var(--accent-cyan)',
    projects: professionalProjects,
  },
  {
    key: 'personal',
    label: '// personal',
    title: 'Personal Projects',
    subtitle: 'Side projects built out of curiosity and passion — full-stack AI systems and tools',
    accent: 'var(--accent-violet)',
    projects: personalProjects,
  },
  {
    key: 'academic',
    label: '// academic',
    title: 'Academic Projects',
    subtitle: 'Projects built during B.Tech — real ML models across healthcare, finance, and NLP',
    accent: '#10b981',
    projects: academicProjects,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

function ProjectCard({ proj, accent }) {
  const Icon = iconMap[proj.icon] || FaBrain
  return (
    <motion.div
      className={`project-card card ${proj.featured ? 'featured' : ''} ${proj.mini ? 'mini' : ''}`}
      style={{ '--card-accent': accent }}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4 }}
    >
      {proj.featured && <span className="featured-badge">Featured</span>}
      {proj.mini && <span className="mini-badge">Mini Build</span>}
      <div className="project-top">
        <div className="project-icon-wrap" style={{ background: `${accent}18`, borderColor: `${accent}44`, color: accent }}>
          <Icon />
        </div>
        {proj.github && (
          <a href={proj.github} target="_blank" rel="noopener noreferrer" className="project-github-btn" title="View on GitHub">
            <FiGithub />
          </a>
        )}
      </div>
      {proj.company && <p className="project-company mono-label">{proj.company}</p>}
      <h3 className="project-title">{proj.title}</h3>
      <p className="project-period mono-label">{proj.period}</p>
      <p className="project-desc">{proj.description}</p>
      <div className="project-tags">
        {proj.tech.map(t => <span key={t} className="tech-tag">{t}</span>)}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// work</p>
          <h2 className="section-title">My <span className="gradient-text">Projects</span></h2>
          <p className="section-subtitle">From railway AI pipelines to Chrome extensions — real systems, real impact</p>
        </motion.div>

        {sectionConfig.map(({ key, label, title, subtitle, accent, projects }) => (
          <div key={key} className="project-section">
            <motion.div
              className="project-section-header"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              transition={{ duration: 0.5 }}
            >
              <div className="section-accent-bar" style={{ background: accent }} />
              <div>
                <span className="mono-label" style={{ color: accent }}>{label}</span>
                <h3 className="project-section-title">{title}</h3>
                <p className="project-section-subtitle">{subtitle}</p>
              </div>
            </motion.div>

            <div className={`projects-grid ${key === 'academic' ? 'grid-4' : 'grid-3'}`}>
              {projects.map(proj => (
                <ProjectCard key={proj.id} proj={proj} accent={accent} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
