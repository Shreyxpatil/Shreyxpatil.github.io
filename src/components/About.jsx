import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import './About.css'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-grid">
          <motion.div
            className="about-text"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">// about me</p>
            <h2 className="section-title">Passionate About <span className="gradient-text">Building AI</span> That Matters</h2>
            {personalInfo.bio.map((para, i) => (
              <p key={i} className="about-para">{para}</p>
            ))}
            <div className="about-tags">
              {['Python', 'LangChain', 'FastAPI', 'Docker', 'PyTorch'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="about-stats"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {personalInfo.stats.map(({ value, label }) => (
              <motion.div key={label} className="stat-card card" variants={fadeUp} transition={{ duration: 0.5 }}>
                <h3 className="stat-value gradient-text">{value}</h3>
                <p className="stat-label">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
