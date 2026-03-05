import { useEffect, useRef } from 'react'
import { TypeAnimation } from 'react-type-animation'
import { Link } from 'react-scroll'
import { FiArrowDown, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi'
import { motion } from 'framer-motion'
import { personalInfo } from '../data/portfolioData'
import './Hero.css'

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animFrameId
    let particles = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        dx: (Math.random() - 0.5) * 0.3,
        dy: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.5 + 0.1,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,212,255,${p.alpha})`
        ctx.fill()
        p.x += p.dx
        p.y += p.dy
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1
      })

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dist = Math.hypot(particles[i].x - particles[j].x, particles[i].y - particles[j].y)
          if (dist < 120) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(0,212,255,${0.08 * (1 - dist / 120)})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animFrameId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(animFrameId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Glowing orbs */}
      <div className="orb orb-cyan" />
      <div className="orb orb-purple" />

      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <p className="hero-greeting mono-label">// hello world, I'm</p>
          <h1 className="hero-name">{personalInfo.name}</h1>
          <div className="hero-typewriter">
            <TypeAnimation
              sequence={personalInfo.taglines.flatMap(t => [t, 2000])}
              wrapper="span"
              cursor
              repeat={Infinity}
              className="typewriter-text"
            />
          </div>
          <p className="hero-bio">{personalInfo.bio[0]}</p>

          <div className="hero-actions">
            <Link to="projects" smooth duration={600} offset={-80}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <a href={personalInfo.resume} download className="btn btn-outline">
              <FiDownload /> Download Resume
            </a>
          </div>

          <div className="hero-socials">
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiGithub />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-icon">
              <FiLinkedin />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="hero-badge-grid">
            {['LLM Fine-tuning', 'RAG Pipelines', 'β-VAE / MLOps', 'Agentic AI', 'Computer Vision', 'Voice Cloning'].map((tag, i) => (
              <motion.div
                key={tag}
                className="hero-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                {tag}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <Link to="about" smooth duration={600} offset={-80} className="hero-scroll">
        <span className="mono-label">scroll</span>
        <FiArrowDown className="scroll-arrow" />
      </Link>
    </section>
  )
}
