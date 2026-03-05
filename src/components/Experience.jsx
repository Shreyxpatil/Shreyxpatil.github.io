import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { experiences } from '../data/portfolioData'
import './Experience.css'

export default function Experience() {
  const [open, setOpen] = useState(0)

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// experience</p>
          <h2 className="section-title">Professional <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">Where I've built, shipped, and learned</p>
        </motion.div>

        <div className="exp-list">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className={`exp-item ${open === i ? 'open' : ''}`}
              style={{ '--exp-color': exp.color }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <button className="exp-header" onClick={() => setOpen(open === i ? -1 : i)}>
                <div className="exp-left">
                  <div className="exp-dot" />
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                </div>
                <div className="exp-right">
                  <span className="exp-period mono-label">{exp.period}</span>
                  <span className="exp-type">{exp.type}</span>
                  <FiChevronDown className={`exp-chevron ${open === i ? 'rotated' : ''}`} />
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    className="exp-body"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                  >
                    <ul className="exp-highlights">
                      {exp.highlights.map((h, j) => (
                        <li key={j}><span className="bullet">▸</span>{h}</li>
                      ))}
                    </ul>
                    <p className="exp-tech mono-label">{exp.tech}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
