import React from 'react'
import { Globe, Heart, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-cream-100 border-t border-cream-300/80 pt-16 pb-12 text-ink-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-cream-300/70">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-forest-800 text-white flex items-center justify-center font-bold text-sm shadow-xs">
                B
              </div>
              <span className="font-extrabold text-xl tracking-tight text-ink-900">
                Bhasha<span className="text-forest-700">BRD</span>
              </span>
            </div>
            
            <p className="text-xs sm:text-sm text-ink-600 max-w-sm leading-relaxed">
              The voice-first interactive agent that interviews product builders in their native Indian language and synthesizes developer-ready Business Requirement Documents.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-forest-100 text-forest-800 border border-forest-200">
                <Globe className="w-3 h-3" />
                <span>Powered by Sarvam AI</span>
              </span>
            </div>
          </div>

          {/* Col 2: Product */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-ink-900">
              Product
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ink-600">
              <li><a href="#how-it-works" className="hover:text-forest-800 transition-colors">How It Works</a></li>
              <li><a href="#demo" className="hover:text-forest-800 transition-colors">Interactive Voice Demo</a></li>
              <li><a href="#languages" className="hover:text-forest-800 transition-colors">Indic Language Engine</a></li>
              <li><a href="#features" className="hover:text-forest-800 transition-colors">Jira & Notion Exports</a></li>
              <li><a href="#pricing" className="hover:text-forest-800 transition-colors">Pricing & Plans</a></li>
            </ul>
          </div>

          {/* Col 3: Documentation & Specs */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-ink-900">
              Standards & Formats
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ink-600">
              <li><span className="text-ink-500">IEEE 830 SRS Specs</span></li>
              <li><span className="text-ink-500">Agile Gherkin Stories</span></li>
              <li><span className="text-ink-500">Non-Functional Matrix (NFR)</span></li>
              <li><span className="text-ink-500">CDSCO / RBI Compliance Checks</span></li>
              <li><span className="text-ink-500">Sarvam STT WebSocket API</span></li>
            </ul>
          </div>

          {/* Col 4: Hackathon & Team */}
          <div className="space-y-3">
            <h4 className="font-bold text-xs uppercase tracking-wider text-ink-900">
              Contributors
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-ink-600">
              <li className="font-medium text-ink-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                <span>Shivansh</span>
              </li>
              <li className="font-medium text-ink-900 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                <span>Hardik</span>
              </li>
              <li className="pt-2 text-xs text-ink-500">
                Built for the Hackathon with passion for Indian language computing.
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-500">
          <p>
            &copy; {new Date().getFullYear()} BhashaBRD. All rights reserved.
          </p>
          <p className="flex items-center gap-1">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
            <span>for Bharat's next generation of builders.</span>
          </p>
        </div>

      </div>
    </footer>
  )
}
