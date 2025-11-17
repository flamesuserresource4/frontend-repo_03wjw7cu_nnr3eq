import React from 'react'

function FAQ() {
  const faqs = [
    {
      q: 'Is it secure?',
      a: 'Yes. Data is encrypted in transit and at rest. We follow industry standards and HIPAA-aligned practices.'
    },
    {
      q: 'How does the recording work?',
      a: 'With consent, you can record sessions from your device. Audio is processed securely to produce transcripts.'
    },
    {
      q: 'Can I choose the summary style?',
      a: 'Yes. Select styles like CBT, psychodynamic, coaching, or customize your own template.'
    },
    {
      q: 'What devices are supported?',
      a: 'Phone, tablet, and desktop are supported through a modern web app.'
    },
    {
      q: 'Can I delete sessions anytime?',
      a: 'You control your data. Sessions can be deleted at any time.'
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">FAQ</h2>
          <p className="mt-3 text-lg text-slate-600">Short, clear answers for common questions.</p>
        </div>

        <dl className="mt-12 grid gap-6 sm:grid-cols-2">
          {faqs.map((item) => (
            <div key={item.q} className="rounded-2xl border border-slate-200 p-6">
              <dt className="text-lg font-semibold text-slate-900">{item.q}</dt>
              <dd className="mt-2 text-slate-600">{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

export default FAQ
