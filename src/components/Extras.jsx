import { motion } from 'framer-motion'
import { achievements, leadership } from '../data/portfolioData'
import { FiAward, FiUsers } from 'react-icons/fi'
import './Extras.css'

const fadeUp = { hidden: { opacity: 0, y: 25 }, visible: { opacity: 1, y: 0 } }

export default function Extras() {
  return (
    <>
      {/* Achievements */}
      <section id="achievements" className="section extras-section">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">// achievements</p>
            <h2 className="section-title">Key <span className="gradient-text">Wins</span></h2>
          </motion.div>

          <div className="achievements-grid">
            {achievements.map(({ stat, desc }, i) => (
              <motion.div
                key={i}
                className="achievement-card card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <span className="achievement-stat gradient-text">{stat}</span>
                <p className="achievement-desc">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="section leadership-section">
        <div className="container leadership-inner">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label">// leadership</p>
            <h2 className="section-title">Leadership &amp; <span className="gradient-text">Community</span></h2>
          </motion.div>

          <ul className="leadership-list">
            {leadership.map((item, i) => (
              <motion.li
                key={i}
                className="leadership-item"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <FiUsers className="leadership-icon" />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
