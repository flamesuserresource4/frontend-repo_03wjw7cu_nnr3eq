import React from 'react'

function Solution() {
  const bullets = [
    'Automatic transcription',
    'AI-generated summaries (CBT, psychodynamic, coaching, etc.)',
    'Secure cloud storage',
    'One-click export and search',
    'Works on phone, tablet, and computer'
  ]

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Let AI do the writing</h2>
          <p className="mt-3 text-lg text-slate-600">Focus on your clients while SouLink captures, organizes, and secures your notes.</p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-3 rounded-xl bg-emerald-50 p-4 text-emerald-900 ring-1 ring-inset ring-emerald-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 mt-0.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Solution
