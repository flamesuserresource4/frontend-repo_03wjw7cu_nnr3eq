import React from 'react'
import Spline from '@splinetool/react-spline'

function Hero({ onCTAClick }) {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-24 sm:pb-20 lg:flex lg:items-center lg:gap-10 lg:px-8 lg:pt-28">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-auto lg:text-left">
          <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-200 mb-4">
            Secure AI for Therapy Notes
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Spend More Time With Your Clients — Not With Your Notes.
          </h1>
          <p className="mt-4 text-lg leading-7 text-slate-600">
            SouLink automatically records, transcribes, and summarizes your sessions — safely and accurately. Save hours every week on session documentation.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start">
            <button onClick={onCTAClick} className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-white font-semibold shadow-sm shadow-emerald-400/30 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
              Join the Free Pilot
            </button>
            <a href="#how-it-works" className="w-full sm:w-auto inline-flex items-center justify-center rounded-xl border border-slate-300 px-5 py-3 text-slate-700 font-semibold hover:bg-slate-50">
              Learn more
            </a>
          </div>
          <p className="mt-3 text-sm text-slate-500">
            Secure, encrypted, and built for therapists. Designed to fit every therapeutic approach.
          </p>
        </div>

        <div className="relative mt-12 aspect-[4/3] w-full max-w-3xl lg:mt-0 lg:flex-1 lg:aspect-[16/10]">
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-200 via-sky-100 to-amber-100" />
          <div className="absolute inset-0 rounded-3xl ring-1 ring-black/5" />
          <div className="relative h-full w-full rounded-3xl overflow-hidden">
            <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -bottom-24 h-48 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}

export default Hero
