import React from 'react'

function Problem() {
  const points = [
    {
      title: 'Too much time on notes',
      text: 'Evenings disappear into typing. Piles of unfinished documentation create stress.'
    },
    {
      title: 'Hard to remember details',
      text: 'Nuances get lost between sessions. Finding key moments later is frustrating.'
    },
    {
      title: 'Emotional fatigue',
      text: 'After a full day of sessions, writing detailed notes can feel overwhelming.'
    }
  ]

  return (
    <section id="problem" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">The documentation burden is real</h2>
          <p className="mt-3 text-lg text-slate-600">Therapists routinely spend hours each week writing, organizing, and searching through session notes.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-2 text-slate-600">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Problem
