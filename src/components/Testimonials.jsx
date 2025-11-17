import React from 'react'

function Testimonials() {
  const quotes = [
    {
      name: 'CBT Therapist, NYC',
      text: 'I save at least 4 hours a week. The summaries are accurate and compassionate.'
    },
    {
      name: 'Social Worker, SF',
      text: 'Finally a tool that respects privacy and actually reduces my admin work.'
    },
    {
      name: 'Coach, Remote',
      text: 'I can focus fully in session knowing the notes will be ready afterwards.'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Trusted by early users</h2>
          <p className="mt-3 text-lg text-slate-600">Warm, supportive, therapist-friendly.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quotes.map((q) => (
            <figure key={q.name} className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
              <blockquote className="text-slate-700">“{q.text}”</blockquote>
              <figcaption className="mt-4 text-sm font-medium text-slate-500">— {q.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
