import React, { useRef } from 'react'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solution from './components/Solution'
import Features from './components/Features'
import Security from './components/Security'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  const signupRef = useRef(null)
  const handleCTAClick = () => {
    signupRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Simple top nav */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-emerald-600" />
            <span className="font-semibold text-slate-900">SouLink</span>
          </div>
          <div className="hidden sm:flex items-center gap-6 text-sm text-slate-600">
            <a href="#problem" className="hover:text-slate-900">Problem</a>
            <a href="#how-it-works" className="hover:text-slate-900">Solution</a>
            <a href="#features" className="hover:text-slate-900">Features</a>
            <a href="#security" className="hover:text-slate-900">Security</a>
            <button onClick={handleCTAClick} className="rounded-lg bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Join the Free Pilot</button>
          </div>
        </div>
      </header>

      <main>
        <Hero onCTAClick={handleCTAClick} />
        <section id="problem"><Problem /></section>
        <Solution />
        <section id="features"><Features /></section>
        <section id="security"><Security /></section>
        <Testimonials />

        {/* Inline email capture CTA */}
        <section ref={signupRef} className="py-16 sm:py-24 bg-gradient-to-b from-emerald-600 to-emerald-700">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join the Free Pilot</h2>
              <p className="mt-3 text-lg text-emerald-100">Be among the first to try SouLink. Well reach out with access details.</p>
            </div>
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
              <input type="email" required placeholder="Your email" className="w-full rounded-xl border border-emerald-300/60 bg-white/95 px-4 py-3 text-slate-900 placeholder-slate-400 shadow-sm focus:border-white focus:ring-2 focus:ring-white/70" />
              <button type="submit" className="rounded-xl bg-white px-6 py-3 font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50">Request Access</button>
            </form>
            <p className="mt-3 text-xs text-emerald-100">No spam. Unsubscribe anytime.</p>
          </div>
        </section>

        <CTA onCTAClick={handleCTAClick} />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

export default App
