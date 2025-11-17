import React from 'react'

function CTA({ onCTAClick }) {
  return (
    <section className="py-16 sm:py-24 bg-emerald-600">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Start Saving Hours Every Week</h2>
        <p className="mt-3 text-lg text-emerald-100">Join the free pilot and let AI do the writing so you can focus on your clients.</p>
        <button onClick={onCTAClick} className="mt-8 inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-emerald-700 font-semibold shadow-sm hover:bg-emerald-50">
          Join the Free Pilot
        </button>
      </div>
    </section>
  )
}

export default CTA
