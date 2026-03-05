import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiGithub, FiLinkedin, FiArrowUpRight } from 'react-icons/fi'
import { personalInfo } from '../data/portfolioData'
import './Contact.css'

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <p className="section-label">// contact</p>
          <h2 className="section-title">Let's <span className="gradient-text">Build Together</span></h2>
          <p className="section-subtitle">Open to exciting AI/ML opportunities, collaborations, and freelance projects.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="contact-info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {[
              { icon: <FiMail />, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
              { icon: <FiPhone />, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
              { icon: <FiMapPin />, label: 'Location', value: personalInfo.location, href: null },
            ].map(({ icon, label, value, href }) => (
              <motion.a
                key={label}
                href={href || undefined}
                className="contact-item card"
                variants={fadeUp}
                transition={{ duration: 0.4 }}
              >
                <div className="contact-icon">{icon}</div>
                <div>
                  <p className="contact-label mono-label">{label}</p>
                  <p className="contact-value">{value}</p>
                </div>
                {href && <FiArrowUpRight className="contact-arrow" />}
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="contact-socials"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="socials-title">Find me online</h3>
            <div className="socials-list">
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link card">
                <FiGithub className="social-link-icon" />
                <div>
                  <p className="social-link-name">GitHub</p>
                  <p className="social-link-sub mono-label">@Shreyxpatil</p>
                </div>
                <FiArrowUpRight className="contact-arrow" />
              </a>
              <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link card">
                <FiLinkedin className="social-link-icon" />
                <div>
                  <p className="social-link-name">LinkedIn</p>
                  <p className="social-link-sub mono-label">in/shreypatil</p>
                </div>
                <FiArrowUpRight className="contact-arrow" />
              </a>
            </div>
            <div className="available-badge">
              <span className="badge-dot" />
              Available for select opportunities
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <div className="container footer-inner">
          <p className="footer-logo mono-label">&lt;SP /&gt;</p>
          <p className="footer-copy">© 2026 Shreyas Patil · Built with React &amp; ❤️</p>
          <div className="footer-links">
            {['home', 'work', 'experience', 'contact'].map(l => (
              <a key={l} href={`#${l}`} className="footer-link mono-label">// {l}</a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
