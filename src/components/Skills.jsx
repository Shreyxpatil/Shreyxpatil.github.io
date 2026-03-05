import { motion } from 'framer-motion'
import { FaBrain, FaRobot, FaCloud, FaCode } from 'react-icons/fa'
import { skillCategories } from '../data/portfolioData'
import './Skills.css'

const iconMap = { FaBrain, FaRobot, SiHuggingface: FaCode, FaCloud }

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
}

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// expertise</p>
          <h2 className="section-title">My Technical <span className="gradient-text">Skill Set</span></h2>
          <p className="section-subtitle">Technologies and frameworks I use to build production-grade AI systems</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map(({ label, title, icon, skills }, idx) => {
            const Icon = iconMap[icon] || FaBrain
            return (
              <motion.div
                key={title}
                className="skill-card card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="skill-card-header">
                  <div className="skill-icon-wrap">
                    <Icon />
                  </div>
                  <div>
                    <p className="mono-label skill-mono-label">{label}</p>
                    <h3 className="skill-title">{title}</h3>
                  </div>
                </div>
                <div className="skill-tags">
                  {skills.map(s => <span key={s} className="tech-tag">{s}</span>)}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
