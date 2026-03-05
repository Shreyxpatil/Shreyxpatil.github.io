import { motion } from 'framer-motion'
import { FiAward } from 'react-icons/fi'
import { FaMedal, FaCloud, FaPython, FaDatabase } from 'react-icons/fa'
import { certifications } from '../data/portfolioData'
import './Certifications.css'

const iconMap = {
  oracle: { icon: FiAward, color: '#f80000' },
  ibm: { icon: FaMedal, color: '#1d7fe5' },
  nvidia: { icon: FaMedal, color: '#76b900' },
  cisco: { icon: FaMedal, color: '#1ba0d7' },
}

const fadeUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }

export default function Certifications() {
  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// certifications</p>
          <h2 className="section-title">Professional <span className="gradient-text">Credentials</span></h2>
          <p className="section-subtitle">Certifications in AI, Cloud Infrastructure, and Data Science</p>
        </motion.div>

        <div className="cert-grid">
          {certifications.map(({ title, issuer, icon, color }, i) => {
            const Icon = iconMap[icon] || FaMedal
            return (
              <motion.div
                key={i}
                className="cert-card card"
                style={{ '--cert-color': color }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="cert-icon" style={{ color }}>
                  <FiAward />
                </div>
                <div>
                  <h3 className="cert-title">{title}</h3>
                  <p className="cert-issuer mono-label">{issuer}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
