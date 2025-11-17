import React from 'react'
import { Mic, FileText, Shield, BarChart3, Clock, Tags, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Mic,
    title: 'Record & Transcribe',
    desc: 'Capture sessions securely and get accurate transcripts in minutes.'
  },
  {
    icon: FileText,
    title: 'AI Summaries',
    desc: 'Generate structured, approach-specific notes ready for your EHR.'
  },
  {
    icon: Shield,
    title: 'Encrypted Storage',
    desc: 'Data encrypted in transit and at rest with modern best practices.'
  },
  {
    icon: BarChart3,
    title: 'Progress Tracking',
    desc: 'See themes and changes over time to support treatment planning.'
  },
  {
    icon: Clock,
    title: 'Session Timeline',
    desc: 'Jump to key moments and highlights directly from the transcript.'
  },
  {
    icon: Tags,
    title: 'Tags & Themes',
    desc: 'Organize sessions with customizable tags and smart topic detection.'
  },
  {
    icon: Smartphone,
    title: 'Multi-device Access',
    desc: 'Use it on phone, tablet, or desktop — wherever you work.'
  }
]

function Features() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Designed to fit every therapeutic approach</h2>
          <p className="mt-3 text-lg text-slate-600">Secure, encrypted, and built for therapists.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <Icon className="h-6 w-6 text-emerald-600" />
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
