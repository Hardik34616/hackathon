import React from 'react'
import { ArrowRight, Sparkles, Mic, FileCheck2 } from 'lucide-react'

export default function CtaBanner({ onOpenDemo }) {
  return (
    <section className="py-20 md:py-24 bg-forest-900 text-white relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-forest-700/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-forest-800/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800 border border-forest-700 text-xs font-bold text-emerald-300 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>INTERACTIVE DISCOVERY • ZERO SETUP</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-tight mb-6">
            Stop staring at blank PRDs.<br />Just start talking.
          </h2>

          <p className="text-forest-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-10">
            Join thousands of product managers, startup founders, and engineering teams using BhashaBRD to transform messy voice thoughts into structured, developer-ready requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-cream-100 text-forest-950 font-bold text-base hover:bg-white active:scale-95 shadow-xl transition-all"
            >
              <Mic className="w-5 h-5 text-forest-700" />
              <span>Start your first voice session</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-forest-800/80 hover:bg-forest-800 text-cream-100 font-semibold text-base border border-forest-700 transition-all"
            >
              <span>Explore interactive sandbox</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-forest-300">
            <span className="flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              Free tier includes 3 full BRD exports
            </span>
            <span>&bull;</span>
            <span>10+ Indian Languages</span>
            <span>&bull;</span>
            <span>1-Click Jira / Notion handoff</span>
          </div>

        </div>
      </div>
    </section>
  )
}
