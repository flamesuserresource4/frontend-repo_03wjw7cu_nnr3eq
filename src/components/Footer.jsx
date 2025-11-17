import React from 'react'

function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-6 lg:px-8 py-12">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold">SouLink</h3>
            <p className="mt-2 text-sm text-slate-400">AI for therapists. Thoughtful, secure, and supportive.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold">Legal</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold">Contact</h4>
            <ul className="mt-2 space-y-2 text-sm">
              <li><a href="mailto:hello@soulink.app" className="hover:text-white">hello@soulink.app</a></li>
              <li className="text-slate-400">Twitter • LinkedIn</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-xs text-slate-500">© {new Date().getFullYear()} SouLink. All rights reserved.</div>
      </div>
    </footer>
  )
}

export default Footer
