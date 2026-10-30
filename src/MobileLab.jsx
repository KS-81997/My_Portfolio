import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { flowLedgerPro } from './data.js'

const RN_CODE = [
  'const useLedger = create<LedgerStore>()(',
  '  persist((set, get) => ({',
  '    queue: [],',
  '    post: (entry) => {',
  '      set((s) => ({ queue: [...s.queue, entry] }))',
  '      syncEngine.flush() // offline-first',
  '    },',
  "  }), { name: 'ledger', storage: mmkv })",
  ')',
]

const MOBILE_SKILLS = [
  { icon: '⚡', t: 'Offline-first sync', d: 'Queued mutations, conflict resolution, auto-flush on reconnect' },
  { icon: '🔐', t: 'Secure auth', d: 'Keychain/Keystore tokens, biometrics, role-based access' },
  { icon: '🚀', t: '60fps UI', d: 'Reanimated worklets, FlashList, memoised renders' },
  { icon: '📦', t: 'Store releases', d: 'Play Console, app signing, OTA updates, CI/CD pipelines' },
  { icon: '🔔', t: 'Push & realtime', d: 'FCM, Pusher WebSockets, deep links' },
  { icon: '🧩', t: 'Native modules', d: 'Kotlin/Swift bridging, Tauri + Rust parity on desktop' },
]

const MARQUEE = ['React Native', 'TypeScript', 'Redux Toolkit', 'Reanimated', 'Tauri', 'Rust', 'React', 'REST APIs', 'Pusher', 'Stripe', 'QuickBooks', 'Play Store', 'CI/CD']

function Reveal({ children, delay = 0, y = 40 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Marquee() {
  return (
    <div className="marquee" aria-hidden="true">
      <div className="mq-track">
        {[...MARQUEE, ...MARQUEE].map((t, k) => (
          <span key={k}>{t}</span>
        ))}
      </div>
    </div>
  )
}

export function MobileLab() {
  const shots = flowLedgerPro.mobile.screenshots
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const [code, setCode] = useState(0)
  const [battery, setBattery] = useState(100)
  const phoneRef = useRef(null)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((x) => (x + 1) % shots.length), 2800)
    return () => clearInterval(t)
  }, [paused, shots.length])

  useEffect(() => {
    const t = setInterval(() => setCode((c) => (c >= RN_CODE.length + 4 ? 0 : c + 1)), 650)
    return () => clearInterval(t)
  }, [])

  useEffect(() => {
    const t = setInterval(() => setBattery((b) => (b <= 62 ? 100 : b - 1)), 1500)
    return () => clearInterval(t)
  }, [])

  const onMove = (e) => {
    const el = phoneRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width - 0.5
    const y = (e.clientY - r.top) / r.height - 0.5
    el.style.transform = `perspective(1000px) rotateY(${x * 18}deg) rotateX(${-y * 14}deg)`
  }
  const onLeave = () => {
    if (phoneRef.current) phoneRef.current.style.transform = ''
  }

  return (
    <section id="mobile" className="section mlab">
      <Reveal>
        <div className="heading">
          <span className="no">03.5</span>
          <h2>Mobile Lab</h2>
          <span className="line" />
        </div>
      </Reveal>
      <Reveal>
        <p className="mlab-sub">
          Production React Native apps, not demos. Tap the phone to flip through real screens from my live Play Store app.
        </p>
      </Reveal>
      <div className="mlab-grid">
        <Reveal y={60}>
          <div className="phone-stage" onMouseMove={onMove} onMouseLeave={onLeave}>
            <div className="phone-orb" />
            <div className="phone" ref={phoneRef}>
              <div className="phone-notch" />
              <div className="phone-status">
                <span>9:41</span>
                <span>5G ▮▮▮ {battery}%</span>
              </div>
              <div className="phone-screen" onClick={() => setI((x) => (x + 1) % shots.length)}>
                <AnimatePresence mode="wait">
                  <motion.img
                    key={i}
                    src={shots[i].src}
                    alt={shots[i].label}
                    initial={{ opacity: 0, x: 60, scale: 0.96 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -60 }}
                    transition={{ duration: 0.4 }}
                  />
                </AnimatePresence>
              </div>
              <div className="phone-home" />
            </div>
            <motion.div className="float-chip fc1" animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 4 }}>
              ⚛️ React Native
            </motion.div>
            <motion.div className="float-chip fc2" animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 5 }}>
              ▶ Google Play
            </motion.div>
            <motion.div className="float-chip fc3" animate={{ y: [0, -8, 0] }} transition={{ repeat: Infinity, duration: 3.5 }}>
              🔄 Offline Sync
            </motion.div>
          </div>
          <div className="phone-label">
            <b>{shots[i].label}</b>
            <div className="dots">
              {shots.map((_, k) => (
                <button
                  key={k}
                  type="button"
                  aria-label={`Screen ${k + 1}`}
                  className={k === i ? 'on' : ''}
                  onClick={() => {
                    setI(k)
                    setPaused(true)
                  }}
                />
              ))}
            </div>
          </div>
        </Reveal>
        <div>
          <Reveal delay={0.1}>
            <div className="codewin">
              <div className="codebar">
                <i /> <i /> <i />
                <span>ledger.store.ts</span>
              </div>
              <pre>
                {RN_CODE.map((l, k) => (
                  <div key={k} className={k < code ? 'ln show' : 'ln'}>
                    <em>{k + 1}</em>
                    {l}
                  </div>
                ))}
                <span className="caret" />
              </pre>
            </div>
          </Reveal>
          <div className="mskills">
            {MOBILE_SKILLS.map((m, k) => (
              <Reveal key={m.t} delay={0.08 * k} y={24}>
                <div className="mskill">
                  <span className="mi">{m.icon}</span>
                  <div>
                    <h4>{m.t}</h4>
                    <p>{m.d}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
