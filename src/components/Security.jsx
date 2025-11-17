import React from 'react'

function Security() {
  const items = [
    'Data encrypted in transit and at rest',
    'Secure cloud infrastructure meeting ISO-27001, SOC2, GDPR principles, HIPAA-aligned practices',
    'Therapists control their data',
    'No patient data processed without consent',
    'Transparent privacy practices'
  ]

  return (
    <section className="py-16 sm:py-24 bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Security & Compliance</h2>
          <p className="mt-3 text-lg text-slate-600">Professional, transparent, and built to protect sensitive information.</p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 ring-1 ring-slate-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5 mt-0.5 text-emerald-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
              <span className="text-slate-700">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default Security
