import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring, useInView, animate, AnimatePresence } from 'framer-motion'
import {
  profile,
  stats,
  experience,
  projects,
  skills,
  education,
  certs,
  languages,
  flowLedgerPro,
  trackPilotAI,
  socialRocketAI,
  proAdvisorCoach,
  wholesaleEZ,
} from './data.js'
import { MobileLab, Marquee } from './MobileLab.jsx'



/* 3D tilt wrapper: card rotates toward the pointer with a moving glare */
function Tilt({ children, className = '', max = 12, glow = '#22d3ee' }) {
  const ref = useRef(null)
  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width
    const y = (e.clientY - r.top) / r.height
    el.style.transform = `perspective(900px) rotateY(${(x - 0.5) * max * 2}deg) rotateX(${(0.5 - y) * max * 2}deg) scale3d(1.02,1.02,1.02)`
    el.style.setProperty('--gx', `${x * 100}%`)
    el.style.setProperty('--gy', `${y * 100}%`)
  }
  const onLeave = () => {
    if (!ref.current) return
    ref.current.style.transform = 'perspective(900px) rotateX(0) rotateY(0) scale3d(1,1,1)'
  }
  return (
    <div ref={ref} className={`tilt ${className}`} style={{ '--glow': glow }} onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

function Reveal({ children, delay = 0, y = 40, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

function Heading({ no, title }) {
  return (
    <Reveal className="heading">
      <span className="no">{no}</span>
      <h2>{title}</h2>
      <span className="line" />
    </Reveal>
  )
}

function Typer({ words }) {
  const [i, setI] = useState(0)
  const [text, setText] = useState('')
  const [del, setDel] = useState(false)
  useEffect(() => {
    const w = words[i]
    const t = setTimeout(
      () => {
        if (!del) {
          setText(w.slice(0, text.length + 1))
          if (text.length + 1 === w.length) setTimeout(() => setDel(true), 1200)
        } else {
          setText(w.slice(0, text.length - 1))
          if (text.length - 1 === 0) {
            setDel(false)
            setI((i + 1) % words.length)
          }
        }
      },
      del ? 35 : 70
    )
    return () => clearTimeout(t)
  }, [text, del, i, words])
  return (
    <span className="typer">
      {text}
      <i className="caret" />
    </span>
  )
}

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (inView) animate(0, value, { duration: 1.6, onUpdate: (v) => setN(Math.round(v)) })
  }, [inView, value])
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  )
}

function Nav({ theme, toggleTheme }) {
  const links = ['About', 'Experience', 'Showcase', 'Mobile', 'Projects', 'Skills', 'Contact']
  return (
    <nav className="nav">
      <div className="nav-left">
        <a href="#top" className="logo">
          HK<span>.</span>
        </a>
        <div className="links">
          {links.map((l) => (
            <a key={l} href={`#${l.toLowerCase()}`}>
              {l}
            </a>
          ))}
        </div>
      </div>
      <div className="nav-actions">
        <a className="nav-resume" href="/Hafiz_Khalid_Saeed_Resume.pdf" download="Hafiz_Khalid_Saeed_Resume.pdf">
          ⬇ Resume
        </a>
        <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          <span className="theme-icon">{theme === 'dark' ? '☀️' : '🌙'}</span>
          <span className="theme-label">{theme === 'dark' ? 'Light' : 'Dark'}</span>
        </button>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <header id="top" className="hero">
      <div className="hero-bg-grid" />
      <div className="hero-inner">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="status-pill">
            <span className="status-dot" />
            <span>Available for Mobile & Cross-Platform Roles</span>
          </div>

          <h1 className="hero-title">
            Hafiz Khalid Saeed
          </h1>

          <div className="hero-role-wrapper">
            <Typer words={profile.roles} />
          </div>

          <p className="hero-summary">
            Software Engineer specializing in production cross-platform systems — engineering native desktop applications (Tauri + Rust), React Native mobile ecosystems published across commercial stores, and cloud double-entry ERP financial suites.
          </p>

          <div className="hero-metrics-strip">
            <div className="hms-item">
              <span className="hms-val">4</span>
              <span className="hms-lbl">Stores Published</span>
            </div>
            <div className="hms-divider" />
            <div className="hms-item">
              <span className="hms-val">6+</span>
              <span className="hms-lbl">Production Products</span>
            </div>
            <div className="hms-divider" />
            <div className="hms-item">
              <span className="hms-val">3+</span>
              <span className="hms-lbl">Years Experience</span>
            </div>
            <div className="hms-divider" />
            <div className="hms-item">
              <span className="hms-val">100%</span>
              <span className="hms-lbl">Production Ready</span>
            </div>
          </div>

          <div className="cta">
            <a className="btn primary" href="#showcase">
              Featured Flagships →
            </a>
            <a className="btn ghost" href="#experience">
              Experience
            </a>
            <a className="btn ghost" href="#projects">
              Key Projects
            </a>
            <a
              className="btn ghost"
              href="https://wa.me/923004471275"
              target="_blank"
              rel="noreferrer"
              style={{ borderColor: 'rgba(16, 185, 129, 0.35)', color: '#10b981' }}
            >
              💬 WhatsApp
            </a>
            <a className="btn ghost" href="#contact">
              Get in Touch
            </a>
          </div>

          <div className="hero-stores-strip">
            <span className="hss-label">Published Across:</span>
            <div className="hss-pills">
              <span className="hss-pill">▶ Google Play Store</span>
              <span className="hss-pill">🪟 Microsoft Store</span>
              <span className="hss-pill">🐧 Snap Store</span>
              <span className="hss-pill">🍎 macOS App Store</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
        >
          <div className="hero-photo-card">
            <div className="photo-frame">
              <img src="/khalid.jpg" alt="Hafiz Khalid Saeed" />
            </div>
            <div className="photo-card-footer">
              <div className="pcf-status">
                <span className="status-dot" />
                <span className="pcf-name">Hafiz Khalid Saeed</span>
              </div>
              <span className="pcf-role">Associate Software Engineer</span>
              <div className="pcf-tags">
                <span>React Native</span>
                <span>Tauri + Rust</span>
                <span>Cloud ERP</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </header>
  )
}

function About() {
  return (
    <section id="about" className="section">
      <Heading no="01" title="About me" />
      <div className="about-grid">
        <Reveal>
          <p className="big">{profile.summary}</p>
          <p className="muted">{profile.summary2}</p>
          <div className="meta">
            <span>📍 {profile.location}</span>
            <span>🗣 {languages.join(' · ')}</span>
          </div>
        </Reveal>
        <div className="stats">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.12}>
              <Tilt className="stat" max={10}>
                <b>
                  <Counter value={s.value} suffix={s.suffix} />
                </b>
                <span>{s.label}</span>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Experience() {
  return (
    <section id="experience" className="section">
      <Heading no="02" title="Professional Experience" />
      <div className="exp-timeline">
        {experience.map((e, i) => (
          <Reveal key={e.company} delay={i * 0.1} className="exp-timeline-item">
            <Tilt max={3} className="exp-main-card">
              {/* Header */}
              <div className="exp-header">
                <div className="exp-header-left">
                  <div className="exp-role-row">
                    <h4>{e.role}</h4>
                    {e.current && (
                      <span className="exp-current-badge">
                        <span className="status-dot" /> Current Role
                      </span>
                    )}
                  </div>
                  <div className="exp-company-row">
                    <span className="exp-company-name">{e.company}</span>
                    <span className="exp-type-tag">· {e.type}</span>
                    <span className="exp-place-tag">· 📍 {e.place}</span>
                  </div>
                </div>

                <div className="exp-header-right">
                  <span className="exp-period-pill">{e.period}</span>
                </div>
              </div>

              {/* Summary */}
              {e.summary && <p className="exp-summary-text">{e.summary}</p>}

              {/* Structured Deliverables Grid */}
              {e.deliverables && (
                <div className="exp-deliverables-grid">
                  {e.deliverables.map((d) => (
                    <div key={d.title} className="exp-deliverable-card">
                      <div className="exp-deliv-header">
                        <span className="exp-deliv-icon">{d.icon}</span>
                        <div className="exp-deliv-titles">
                          <h5>{d.title}</h5>
                          <span className="exp-deliv-badge">{d.badge}</span>
                        </div>
                      </div>
                      <p className="exp-deliv-desc">{d.desc}</p>
                      {d.tech && (
                        <div className="exp-deliv-chips">
                          {d.tech.map((t) => (
                            <span key={t}>{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

/* =========================================================
   FLAGSHIP SHOWCASE: 5 PRODUCTION ECOSYSTEMS
   ========================================================= */
function FeaturedShowcase() {
  const [selectedProduct, setSelectedProduct] = useState('socialrocket') // 'socialrocket' | 'flowledger' | 'trackpilot' | 'proadvisor' | 'wholesaleez'

  // Sub-tab states for multi-platform products
  const [flTab, setFlTab] = useState('mobile') // 'mobile' | 'web'
  const [flSsIndex, setFlSsIndex] = useState(0)

  const [tpTab, setTpTab] = useState('desktop') // 'desktop' | 'web'
  const [tpSsIndex, setTpSsIndex] = useState(0)

  // Single slider states for mobile apps
  const [srSsIndex, setSrSsIndex] = useState(0)
  const [pacSsIndex, setPacSsIndex] = useState(0)
  const [wzSsIndex, setWzSsIndex] = useState(0)

  const flScreenshots = flowLedgerPro.mobile.screenshots
  const tpScreenshots = trackPilotAI.desktop.screenshots
  const srScreenshots = socialRocketAI.screenshots
  const pacScreenshots = proAdvisorCoach.screenshots
  const wzScreenshots = wholesaleEZ.screenshots

  return (
    <section id="showcase" className="section">
      <Heading no="03" title="Flagship Showcase: Live Apps & Ecosystems" />

      {/* Product Switcher Bar */}
      <div className="product-switcher-bar">
        <button
          type="button"
          className={`product-switch-btn ${selectedProduct === 'socialrocket' ? 'active' : ''}`}
          onClick={() => setSelectedProduct('socialrocket')}
        >
          <span>🚀 Social Rocket AI</span>
          <span className="tag-mini">AI Social & Uptime</span>
        </button>

        <button
          type="button"
          className={`product-switch-btn ${selectedProduct === 'flowledger' ? 'active' : ''}`}
          onClick={() => setSelectedProduct('flowledger')}
        >
          <span>💼 FlowLedger Pro</span>
          <span className="tag-mini">Google Play + ERP</span>
        </button>

        <button
          type="button"
          className={`product-switch-btn ${selectedProduct === 'trackpilot' ? 'active' : ''}`}
          onClick={() => setSelectedProduct('trackpilot')}
        >
          <span>⏱️ TrackPilot AI</span>
          <span className="tag-mini">Microsoft Store + Tauri</span>
        </button>

        <button
          type="button"
          className={`product-switch-btn ${selectedProduct === 'proadvisor' ? 'active' : ''}`}
          onClick={() => setSelectedProduct('proadvisor')}
        >
          <span>🎓 ProAdvisorCoach</span>
          <span className="tag-mini">Gamified EdTech</span>
        </button>

        <button
          type="button"
          className={`product-switch-btn ${selectedProduct === 'wholesaleez' ? 'active' : ''}`}
          onClick={() => setSelectedProduct('wholesaleez')}
        >
          <span>📦 Wholesale EZ</span>
          <span className="tag-mini">B2B + QuickBooks</span>
        </button>
      </div>

      <Reveal>
        <AnimatePresence mode="wait">
          {/* ================= 1. SOCIAL ROCKET AI ================= */}
          {selectedProduct === 'socialrocket' && (
            <motion.div
              key="sr-showcase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="showcase-wrap"
            >
              <div className="showcase-topbar">
                <div className="showcase-header-left">
                  <img src={socialRocketAI.icon} alt="Social Rocket AI Icon" className="app-header-icon" />
                  <div>
                    <h3>{socialRocketAI.title}</h3>
                    <span className="showcase-pill" style={{ color: 'var(--sr-rose)', borderColor: 'rgba(244,63,94,.3)' }}>
                      <span className="pulse-dot" style={{ background: '#f43f5e', boxShadow: '0 0 10px #f43f5e' }} /> Live on Google Play Store
                    </span>
                  </div>
                </div>

                <div className="store-tag" style={{ color: '#fda4af' }}>
                  ID: {socialRocketAI.packageId}
                </div>
              </div>

              <div className="fl-mobile-grid">
                {/* Left: Overview, CTAs, Tech */}
                <div className="fl-app-meta">
                  <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
                    {socialRocketAI.tagline}
                  </h4>
                  <p className="fl-overview">{socialRocketAI.overview}</p>

                  <div className="cta" style={{ marginBottom: '22px' }}>
                    <a
                      className="btn play-btn"
                      href={socialRocketAI.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186A2.43 2.43 0 0 1 3 20.468V3.532c0-.663.226-1.286.609-1.718zm11.598 11.599l2.42 2.42-12.213 6.942 9.793-9.362zm0-2.826L5.414 1.225l12.213 6.942-2.42 2.42zm1.414 1.413l3.659 2.083c1.026.584 1.026 1.536 0 2.12l-3.659 2.083-2.122-2.121 2.122-2.165z" />
                      </svg>
                      Get on Google Play Store
                    </a>
                  </div>

                  <div className="chips">
                    {socialRocketAI.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                {/* Right: Phone Mockup Slider */}
                <div className="phone-mockup-wrap">
                  <div className="phone-mockup" style={{ borderColor: 'rgba(244,63,94,.4)', boxShadow: '0 30px 70px rgba(0,0,0,.75), 0 0 45px rgba(244,63,94,.25)' }}>
                    <div className="phone-camera" />
                    <div className="phone-screen">
                      <img
                        src={srScreenshots[srSsIndex].src}
                        alt={srScreenshots[srSsIndex].label}
                        key={srScreenshots[srSsIndex].src}
                      />
                    </div>
                  </div>

                  <div className="screen-caption" style={{ color: '#fda4af' }}>
                    {srScreenshots[srSsIndex].label}
                  </div>

                  <div className="phone-controls">
                    <button
                      type="button"
                      className="p-nav-btn"
                      onClick={() => setSrSsIndex((i) => (i === 0 ? srScreenshots.length - 1 : i - 1))}
                      aria-label="Previous Screenshot"
                    >
                      ‹
                    </button>
                    <div className="p-dots">
                      {srScreenshots.map((s, idx) => (
                        <button
                          key={s.label}
                          type="button"
                          className={`p-dot ${idx === srSsIndex ? 'active' : ''}`}
                          style={idx === srSsIndex ? { background: 'var(--sr-rose)' } : {}}
                          onClick={() => setSrSsIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      className="p-nav-btn"
                      onClick={() => setSrSsIndex((i) => (i === srScreenshots.length - 1 ? 0 : i + 1))}
                      aria-label="Next Screenshot"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>

              {/* HOW FUNCTIONALITY WORKS: 5-STEP ARCHITECTURE */}
              <div className="workflow-section-title">
                <span>⚙️</span> How the Social Rocket AI Workflow Works
              </div>
              <div className="workflow-grid">
                {socialRocketAI.workflowSteps.map((ws) => (
                  <div key={ws.step} className="workflow-card">
                    <div className="workflow-step-no">{ws.step}</div>
                    <span className="workflow-tag">{ws.tag}</span>
                    <h5>{ws.title}</h5>
                    <p>{ws.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* ================= 2. FLOWLEDGER PRO ================= */}
          {selectedProduct === 'flowledger' && (
            <motion.div
              key="fl-showcase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="showcase-wrap"
            >
              <div className="showcase-topbar">
                <div className="showcase-header-left">
                  <img
                    src="/flowledger/logo.png"
                    alt="Flow Ledger Pro Logo"
                    className="fl-logo"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none'
                    }}
                  />
                  <div>
                    <span className="showcase-pill">
                      <span className="pulse-dot" /> Live on Google Play & Web
                    </span>
                  </div>
                </div>

                <div className="showcase-tabs">
                  <button
                    type="button"
                    className={`tab-btn ${flTab === 'mobile' ? 'active' : ''}`}
                    onClick={() => setFlTab('mobile')}
                  >
                    <span>📱</span> Mobile App (Google Play)
                  </button>
                  <button
                    type="button"
                    className={`tab-btn ${flTab === 'web' ? 'active' : ''}`}
                    onClick={() => setFlTab('web')}
                  >
                    <span>🌐</span> Cloud ERP Web App
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {flTab === 'mobile' ? (
                  <motion.div
                    key="fl-mobile-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="fl-mobile-grid"
                  >
                    <div className="fl-app-meta">
                      <div className="fl-app-header">
                        <img src={flowLedgerPro.mobile.icon} alt="Flow Ledger Pro Icon" className="fl-app-icon" />
                        <div className="fl-app-titles">
                          <h4>{flowLedgerPro.mobile.title}</h4>
                          <p>By {flowLedgerPro.mobile.developer} · Official Mobile Companion</p>
                          <div className="fl-store-badges">
                            <span className="store-tag">Google Play</span>
                            <span className="store-tag">ID: {flowLedgerPro.mobile.packageId}</span>
                            <span className="store-tag">⭐ 5.0 Rated</span>
                          </div>
                        </div>
                      </div>

                      <p className="fl-overview">{flowLedgerPro.mobile.tagline}</p>

                      <ul className="fl-highlights">
                        {flowLedgerPro.mobile.highlights.map((h) => (
                          <li key={h}>
                            <span className="chk">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="cta" style={{ marginBottom: '22px' }}>
                        <a
                          className="btn play-btn"
                          href={flowLedgerPro.mobile.storeUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3.609 1.814L13.793 12 3.61 22.186A2.43 2.43 0 0 1 3 20.468V3.532c0-.663.226-1.286.609-1.718zm11.598 11.599l2.42 2.42-12.213 6.942 9.793-9.362zm0-2.826L5.414 1.225l12.213 6.942-2.42 2.42zm1.414 1.413l3.659 2.083c1.026.584 1.026 1.536 0 2.12l-3.659 2.083-2.122-2.121 2.122-2.165z" />
                          </svg>
                          Get on Google Play Store
                        </a>
                        <a
                          className="btn ghost"
                          href={flowLedgerPro.web.appUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Open Web Companion ↗
                        </a>
                      </div>

                      <div className="chips">
                        {flowLedgerPro.mobile.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="phone-mockup-wrap">
                      <div className="phone-mockup">
                        <div className="phone-camera" />
                        <div className="phone-screen">
                          <img
                            src={flScreenshots[flSsIndex].src}
                            alt={flScreenshots[flSsIndex].label}
                            key={flScreenshots[flSsIndex].src}
                          />
                        </div>
                      </div>

                      <div className="screen-caption">{flScreenshots[flSsIndex].label}</div>

                      <div className="phone-controls">
                        <button
                          type="button"
                          className="p-nav-btn"
                          onClick={() => setFlSsIndex((i) => (i === 0 ? flScreenshots.length - 1 : i - 1))}
                          aria-label="Previous Screenshot"
                        >
                          ‹
                        </button>
                        <div className="p-dots">
                          {flScreenshots.map((s, idx) => (
                            <button
                              key={s.label}
                              type="button"
                              className={`p-dot ${idx === flSsIndex ? 'active' : ''}`}
                              onClick={() => setFlSsIndex(idx)}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          className="p-nav-btn"
                          onClick={() => setFlSsIndex((i) => (i === flScreenshots.length - 1 ? 0 : i + 1))}
                          aria-label="Next Screenshot"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="fl-web-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="fl-web-wrap"
                  >
                    <div className="fl-web-intro">
                      <h4>{flowLedgerPro.web.title}</h4>
                      <p>{flowLedgerPro.web.tagline}</p>
                    </div>

                    <div className="web-metrics-grid">
                      {flowLedgerPro.web.metrics.map((m) => (
                        <div key={m.label} className="metric-box">
                          <span className="metric-val">{m.val}</span>
                          <span className="metric-label">{m.label}</span>
                          <span className="metric-change">{m.change}</span>
                        </div>
                      ))}
                    </div>

                    <div className="erp-cards-grid">
                      {flowLedgerPro.web.capabilities.map((c) => (
                        <div key={c.title} className="erp-card">
                          <div className="erp-card-icon">{c.icon}</div>
                          <div>
                            <h5>{c.title}</h5>
                            <p>{c.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '10px' }}>
                      <div className="cta">
                        <a
                          className="btn web-btn"
                          href={flowLedgerPro.web.appUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          🚀 Launch Web App (app.flowledgerpro.com)
                        </a>
                        <a
                          className="btn ghost"
                          href={flowLedgerPro.web.siteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          🌐 Explore Platform (flowledgerpro.com)
                        </a>
                      </div>

                      <div className="chips">
                        {flowLedgerPro.web.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ================= 3. TRACKPILOT AI ================= */}
          {selectedProduct === 'trackpilot' && (
            <motion.div
              key="tp-showcase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="showcase-wrap"
            >
              <div className="showcase-topbar">
                <div className="showcase-header-left">
                  <img src="/trackpilot/logo.png" alt="TrackPilot AI Logo" className="app-header-icon" />
                  <div>
                    <h3>TrackPilot AI</h3>
                    <span className="showcase-pill">
                      <span className="pulse-dot" /> Live on Microsoft Store · Snap · macOS
                    </span>
                  </div>
                </div>

                <div className="showcase-tabs">
                  <button
                    type="button"
                    className={`tab-btn ${tpTab === 'desktop' ? 'active' : ''}`}
                    onClick={() => setTpTab('desktop')}
                  >
                    <span>💻</span> Desktop App (Tauri + Rust)
                  </button>
                  <button
                    type="button"
                    className={`tab-btn ${tpTab === 'web' ? 'active' : ''}`}
                    onClick={() => setTpTab('web')}
                  >
                    <span>🌐</span> Web Tracker Dashboard
                  </button>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {tpTab === 'desktop' ? (
                  <motion.div
                    key="tp-desktop-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="tp-desktop-grid"
                  >
                    <div className="tp-app-meta">
                      <div className="store-ribbon">
                        {trackPilotAI.desktop.stores.map((st) => (
                          <span
                            key={st.name}
                            className={`store-ribbon-item ${
                              st.name.includes('Microsoft')
                                ? 'ms'
                                : st.name.includes('Snap')
                                ? 'snap'
                                : 'mac'
                            }`}
                          >
                            <span>{st.icon}</span> {st.name} · <b>{st.status}</b>
                          </span>
                        ))}
                      </div>

                      <h4 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '6px' }}>
                        {trackPilotAI.desktop.title}
                      </h4>
                      <p style={{ color: 'var(--mu)', fontSize: '.9rem', marginBottom: '14px' }}>
                        Store ID: <b>{trackPilotAI.desktop.msStoreId}</b> · Windows 10/11, Ubuntu/Linux, macOS
                      </p>

                      <p className="fl-overview">{trackPilotAI.desktop.tagline}</p>

                      <ul className="fl-highlights">
                        {trackPilotAI.desktop.highlights.map((h) => (
                          <li key={h}>
                            <span className="chk">✓</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="cta" style={{ marginBottom: '22px' }}>
                        <a
                          className="btn ms-btn"
                          href={trackPilotAI.desktop.msStoreUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.949-1.801" />
                          </svg>
                          Get on Microsoft Store
                        </a>
                        <a
                          className="btn ghost"
                          href={trackPilotAI.web.trackerUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Launch Web Tracker ↗
                        </a>
                        <a
                          className="btn ghost"
                          href={trackPilotAI.web.siteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Official Site ↗
                        </a>
                      </div>

                      <div className="chips">
                        {trackPilotAI.desktop.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>

                    <div className="desktop-mockup-wrap">
                      <div className="desktop-window">
                        <div className="window-titlebar">
                          <div className="window-dots">
                            <span className="win-dot red" />
                            <span className="win-dot yellow" />
                            <span className="win-dot green" />
                          </div>
                          <span className="window-title-text">TrackPilot AI Desktop (Tauri + Rust)</span>
                          <span style={{ width: '40px' }} />
                        </div>
                        <div className="window-screen">
                          <img
                            src={tpScreenshots[tpSsIndex].src}
                            alt={tpScreenshots[tpSsIndex].label}
                            key={tpScreenshots[tpSsIndex].src}
                          />
                        </div>
                      </div>

                      <div className="screen-caption">{tpScreenshots[tpSsIndex].label}</div>

                      <div className="phone-controls">
                        <button
                          type="button"
                          className="p-nav-btn"
                          onClick={() => setTpSsIndex((i) => (i === 0 ? tpScreenshots.length - 1 : i - 1))}
                          aria-label="Previous Screenshot"
                        >
                          ‹
                        </button>
                        <div className="p-dots">
                          {tpScreenshots.map((s, idx) => (
                            <button
                              key={s.label}
                              type="button"
                              className={`p-dot ${idx === tpSsIndex ? 'active' : ''}`}
                              onClick={() => setTpSsIndex(idx)}
                              aria-label={`Go to slide ${idx + 1}`}
                            />
                          ))}
                        </div>
                        <button
                          type="button"
                          className="p-nav-btn"
                          onClick={() => setTpSsIndex((i) => (i === tpScreenshots.length - 1 ? 0 : i + 1))}
                          aria-label="Next Screenshot"
                        >
                          ›
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="tp-web-tab"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.35 }}
                    className="fl-web-wrap"
                  >
                    <div className="fl-web-intro">
                      <h4>{trackPilotAI.web.title}</h4>
                      <p>{trackPilotAI.web.tagline}</p>
                    </div>

                    <div className="web-metrics-grid">
                      {trackPilotAI.web.metrics.map((m) => (
                        <div key={m.label} className="metric-box">
                          <span className="metric-val">{m.val}</span>
                          <span className="metric-label">{m.label}</span>
                          <span className="metric-change">{m.change}</span>
                        </div>
                      ))}
                    </div>

                    <div className="erp-cards-grid">
                      {trackPilotAI.web.capabilities.map((c) => (
                        <div key={c.title} className="erp-card">
                          <div className="erp-card-icon">{c.icon}</div>
                          <div>
                            <h5>{c.title}</h5>
                            <p>{c.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginTop: '10px' }}>
                      <div className="cta">
                        <a
                          className="btn web-btn"
                          href={trackPilotAI.web.trackerUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          🚀 Launch Web Tracker (tracker.trackpilotai.com)
                        </a>
                        <a
                          className="btn ghost"
                          href={trackPilotAI.web.siteUrl}
                          target="_blank"
                          rel="noreferrer"
                        >
                          🌐 Explore Platform (trackpilotai.com)
                        </a>
                      </div>

                      <div className="chips">
                        {trackPilotAI.web.tech.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )}

          {/* ================= 4. PROADVISOR COACH ================= */}
          {selectedProduct === 'proadvisor' && (
            <motion.div
              key="pac-showcase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="showcase-wrap"
            >
              <div className="showcase-topbar">
                <div className="showcase-header-left">
                  <img src={proAdvisorCoach.icon} alt="ProAdvisorCoach Icon" className="app-header-icon" />
                  <div>
                    <h3>{proAdvisorCoach.title}</h3>
                    <span className="showcase-pill" style={{ color: 'var(--pac-purple)', borderColor: 'rgba(139,92,246,.3)' }}>
                      <span className="pulse-dot" style={{ background: '#8b5cf6', boxShadow: '0 0 10px #8b5cf6' }} /> Live on Google Play Store
                    </span>
                  </div>
                </div>

                <div className="store-tag" style={{ color: '#c4b5fd' }}>
                  ID: {proAdvisorCoach.packageId}
                </div>
              </div>

              <div className="fl-mobile-grid">
                <div className="fl-app-meta">
                  <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
                    {proAdvisorCoach.tagline}
                  </h4>
                  <p className="fl-overview">{proAdvisorCoach.overview}</p>

                  <ul className="fl-highlights">
                    {proAdvisorCoach.highlights.map((h) => (
                      <li key={h}>
                        <span className="chk" style={{ color: 'var(--pac-purple)' }}>✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="cta" style={{ marginBottom: '22px' }}>
                    <a
                      className="btn play-btn"
                      href={proAdvisorCoach.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186A2.43 2.43 0 0 1 3 20.468V3.532c0-.663.226-1.286.609-1.718zm11.598 11.599l2.42 2.42-12.213 6.942 9.793-9.362zm0-2.826L5.414 1.225l12.213 6.942-2.42 2.42zm1.414 1.413l3.659 2.083c1.026.584 1.026 1.536 0 2.12l-3.659 2.083-2.122-2.121 2.122-2.165z" />
                      </svg>
                      Get on Google Play Store
                    </a>
                  </div>

                  <div className="chips">
                    {proAdvisorCoach.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="phone-mockup-wrap">
                  <div className="phone-mockup" style={{ borderColor: 'rgba(139,92,246,.4)', boxShadow: '0 30px 70px rgba(0,0,0,.75), 0 0 45px rgba(139,92,246,.25)' }}>
                    <div className="phone-camera" />
                    <div className="phone-screen">
                      <img
                        src={pacScreenshots[pacSsIndex].src}
                        alt={pacScreenshots[pacSsIndex].label}
                        key={pacScreenshots[pacSsIndex].src}
                      />
                    </div>
                  </div>

                  <div className="screen-caption" style={{ color: '#c4b5fd' }}>
                    {pacScreenshots[pacSsIndex].label}
                  </div>

                  <div className="phone-controls">
                    <button
                      type="button"
                      className="p-nav-btn"
                      onClick={() => setPacSsIndex((i) => (i === 0 ? pacScreenshots.length - 1 : i - 1))}
                      aria-label="Previous Screenshot"
                    >
                      ‹
                    </button>
                    <div className="p-dots">
                      {pacScreenshots.map((s, idx) => (
                        <button
                          key={s.label}
                          type="button"
                          className={`p-dot ${idx === pacSsIndex ? 'active' : ''}`}
                          style={idx === pacSsIndex ? { background: 'var(--pac-purple)' } : {}}
                          onClick={() => setPacSsIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      className="p-nav-btn"
                      onClick={() => setPacSsIndex((i) => (i === pacScreenshots.length - 1 ? 0 : i + 1))}
                      aria-label="Next Screenshot"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* ================= 5. WHOLESALE EZ ================= */}
          {selectedProduct === 'wholesaleez' && (
            <motion.div
              key="wz-showcase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="showcase-wrap"
            >
              <div className="showcase-topbar">
                <div className="showcase-header-left">
                  <img src={wholesaleEZ.icon} alt="Wholesale EZ Icon" className="app-header-icon" />
                  <div>
                    <h3>{wholesaleEZ.title}</h3>
                    <span className="showcase-pill" style={{ color: 'var(--wz-emerald)', borderColor: 'rgba(16,185,129,.3)' }}>
                      <span className="pulse-dot" style={{ background: '#10b981', boxShadow: '0 0 10px #10b981' }} /> Live on Google Play Store
                    </span>
                  </div>
                </div>

                <div className="store-tag" style={{ color: '#6ee7b7' }}>
                  ID: {wholesaleEZ.packageId}
                </div>
              </div>

              <div className="fl-mobile-grid">
                <div className="fl-app-meta">
                  <h4 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '8px' }}>
                    {wholesaleEZ.tagline}
                  </h4>
                  <p className="fl-overview">{wholesaleEZ.overview}</p>

                  <ul className="fl-highlights">
                    {wholesaleEZ.highlights.map((h) => (
                      <li key={h}>
                        <span className="chk" style={{ color: 'var(--wz-emerald)' }}>✓</span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="cta" style={{ marginBottom: '22px' }}>
                    <a
                      className="btn play-btn"
                      href={wholesaleEZ.storeUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.609 1.814L13.793 12 3.61 22.186A2.43 2.43 0 0 1 3 20.468V3.532c0-.663.226-1.286.609-1.718zm11.598 11.599l2.42 2.42-12.213 6.942 9.793-9.362zm0-2.826L5.414 1.225l12.213 6.942-2.42 2.42zm1.414 1.413l3.659 2.083c1.026.584 1.026 1.536 0 2.12l-3.659 2.083-2.122-2.121 2.122-2.165z" />
                      </svg>
                      Get on Google Play Store
                    </a>
                  </div>

                  <div className="chips">
                    {wholesaleEZ.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>

                <div className="phone-mockup-wrap">
                  <div className="phone-mockup" style={{ borderColor: 'rgba(16,185,129,.4)', boxShadow: '0 30px 70px rgba(0,0,0,.75), 0 0 45px rgba(16,185,129,.25)' }}>
                    <div className="phone-camera" />
                    <div className="phone-screen">
                      <img
                        src={wzScreenshots[wzSsIndex].src}
                        alt={wzScreenshots[wzSsIndex].label}
                        key={wzScreenshots[wzSsIndex].src}
                      />
                    </div>
                  </div>

                  <div className="screen-caption" style={{ color: '#6ee7b7' }}>
                    {wzScreenshots[wzSsIndex].label}
                  </div>

                  <div className="phone-controls">
                    <button
                      type="button"
                      className="p-nav-btn"
                      onClick={() => setWzSsIndex((i) => (i === 0 ? wzScreenshots.length - 1 : i - 1))}
                      aria-label="Previous Screenshot"
                    >
                      ‹
                    </button>
                    <div className="p-dots">
                      {wzScreenshots.map((s, idx) => (
                        <button
                          key={s.label}
                          type="button"
                          className={`p-dot ${idx === wzSsIndex ? 'active' : ''}`}
                          style={idx === wzSsIndex ? { background: 'var(--wz-emerald)' } : {}}
                          onClick={() => setWzSsIndex(idx)}
                          aria-label={`Go to slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                    <button
                      type="button"
                      className="p-nav-btn"
                      onClick={() => setWzSsIndex((i) => (i === wzScreenshots.length - 1 ? 0 : i + 1))}
                      aria-label="Next Screenshot"
                    >
                      ›
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Reveal>
    </section>
  )
}

function Projects() {
  return (
    <section id="projects" className="section">
      <Heading no="04" title="Key projects" />
      <div className="proj-grid">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.1}>
            <Tilt className="proj" glow="var(--c1)" max={8}>
              <span className="tag">
                {p.tag}
              </span>
              <h4>{p.title}</h4>
              <p>{p.desc}</p>

              {p.stores && (
                <div className="proj-stores-tag">
                  {p.stores.map((s) => (
                    <span key={s}>{s}</span>
                  ))}
                </div>
              )}

              <ul className="feats">
                {p.feats.map((f) => (
                  <li key={f}>
                    {f}
                  </li>
                ))}
              </ul>
              <div className="chips">
                {p.tech.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>

              {p.links && (
                <div className="proj-action-bar">
                  {p.links.play && (
                    <a href={p.links.play} target="_blank" rel="noreferrer" className="proj-link-btn">
                      ▶ Google Play Store
                    </a>
                  )}
                  {p.links.msStore && (
                    <a href={p.links.msStore} target="_blank" rel="noreferrer" className="proj-link-btn">
                      🪟 Microsoft Store
                    </a>
                  )}
                  {p.links.tracker && (
                    <a href={p.links.tracker} target="_blank" rel="noreferrer" className="proj-link-btn">
                      🌐 Web Tracker
                    </a>
                  )}
                  {p.links.app && (
                    <a href={p.links.app} target="_blank" rel="noreferrer" className="proj-link-btn">
                      🌐 Web App
                    </a>
                  )}
                  {p.links.web && (
                    <a href={p.links.web} target="_blank" rel="noreferrer" className="proj-link-btn">
                      ↗ Platform Site
                    </a>
                  )}
                  {p.links.site && (
                    <a href={p.links.site} target="_blank" rel="noreferrer" className="proj-link-btn">
                      ↗ Platform Site
                    </a>
                  )}
                </div>
              )}
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id="skills" className="section">
      <Heading no="05" title="Technical skills" />
      <div className="skill-grid">
        {skills.map((g, i) => (
          <Reveal key={g.group} delay={(i % 4) * 0.08}>
            <Tilt className="skill" max={9}>
              <h5>{g.group}</h5>
              <div className="chips">
                {g.items.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </Tilt>
          </Reveal>
        ))}
      </div>
      <div className="edu">
        <Reveal>
          <Tilt className="card" max={5}>
            <h5>🎓 Education</h5>
            <h4>{education.degree}</h4>
            <p className="company">{education.school}</p>
            <p className="muted">{education.period}</p>
          </Tilt>
        </Reveal>
        <Reveal delay={0.1}>
          <Tilt className="card" max={5}>
            <h5>🏅 Certifications & achievements</h5>
            <ul>
              {certs.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </Tilt>
        </Reveal>
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="section contact">
      <Heading no="06" title="Let's work together" />
      <Reveal>
        <p className="big center">Have a project, full-time role, or an opportunity in mind? Let's build something great.</p>
        <div className="cta center">
          <a className="btn primary" href="/Hafiz_Khalid_Saeed_Resume.pdf" download="Hafiz_Khalid_Saeed_Resume.pdf">
            ⬇ Download Resume
          </a>
          <a className="btn ghost" href={profile.phoneHref}>
            📞 Call {profile.phone}
          </a>
          <a
            className="btn ghost"
            href="https://wa.me/923004471275"
            target="_blank"
            rel="noreferrer"
            style={{ borderColor: 'rgba(34, 197, 94, 0.4)', color: '#22c55e' }}
          >
            💬 WhatsApp Chat ↗
          </a>
          <a className="btn ghost" href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn Profile ↗
          </a>
        </div>
      </Reveal>
      <footer>© {new Date().getFullYear()} Hafiz Khalid Saeed · Associate Software Engineer · Lahore, Pakistan</footer>
    </section>
  )
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved === 'light' || saved === 'dark') return saved
    return window.matchMedia?.('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const { scrollYProgress, scrollY } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 })
  const glow = useRef(null)
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setShowTopBtn(latest > 350)
    })
  }, [scrollY])

  useEffect(() => {
    const m = (e) => glow.current && (glow.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`)
    window.addEventListener('mousemove', m)
    return () => window.removeEventListener('mousemove', m)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <motion.div className="progress" style={{ scaleX }} />
      <div className="cursor-glow" ref={glow} />
      <Nav theme={theme} toggleTheme={toggleTheme} />
      <Hero />
      <main>
        <Marquee />
        <About />
        <Experience />
        <FeaturedShowcase />
        <MobileLab />
        <Projects />
        <Skills />
        <Contact />
      </main>

      {showTopBtn && (
        <motion.button
          type="button"
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          title="Scroll to Top"
          aria-label="Scroll to Top"
        >
          ↑
        </motion.button>
      )}
    </>
  )
}
