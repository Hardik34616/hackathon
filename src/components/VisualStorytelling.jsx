import React from 'react'
import { Sparkles, Mic, Cpu, Code2, ArrowRight } from 'lucide-react'

export default function VisualStorytelling({ onOpenDemo }) {
  return (
    <section className="py-20 bg-cream-100 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1: Hero Art Showcase (Voice Wave to Blueprint) */}
        <div className="mb-24">
          <div className="relative rounded-3xl overflow-hidden border border-cream-300 shadow-xl bg-white group">
            {/* 3D Generated Hero Image */}
            <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden">
              <img 
                src="/images/hero_sculpture.jpg" 
                alt="Voice Waves Transforming into Structured Architecture Blueprints"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-900/80 via-ink-900/20 to-transparent flex items-end p-6 sm:p-12">
                <div className="max-w-2xl text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-800/80 backdrop-blur-md text-emerald-300 border border-emerald-500/30 text-xs font-bold mb-3">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>THE VISUAL ENGINE</span>
                  </div>
                  <h3 className="font-serif text-2xl sm:text-4xl font-bold tracking-tight mb-2">
                    Spoken thoughts seamlessly shaped into system architecture.
                  </h3>
                  <p className="text-sm sm:text-base text-cream-200 font-light max-w-xl">
                    No blank pages. No rigid templates. Just talk through your vision while BhashaBRD continuously compiles the technical blueprint.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Visual Pillars (Image + Minimal Punchy Copy) */}
        <div className="space-y-20">
          
          {/* Pillar 1: Multilingual Voice First */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
                01 &bull; SARVAM AI INDIC VOICE
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
                Speak your native language.<br />We translate it into tech specs.
              </h3>
              <p className="text-sm sm:text-base text-ink-600 leading-relaxed max-w-lg">
                Hindi, Tamil, Telugu, Hinglish or Indian English. Sarvam AI models capture domain vocabulary and colloquial business logic with 99% accuracy.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-cream-300 text-ink-800 shadow-xs">
                  10+ Indian Languages
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-cream-300 text-forest-800 shadow-xs">
                  Zero Jargon Needed
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-lg bg-white group">
                <img 
                  src="/images/indic_voice.jpg" 
                  alt="Multilingual Voice Resonance"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Pillar 2: Socratic Discovery & Gap Detection */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 lg:order-2 space-y-4">
              <span className="text-xs font-bold tracking-widest text-purple-900 uppercase bg-lilac-100 px-3 py-1 rounded-full border border-purple-200">
                02 &bull; SOCRATIC DISCOVERY
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
                An active business analyst,<br />not a passive chatbot.
              </h3>
              <p className="text-sm sm:text-base text-ink-600 leading-relaxed max-w-lg">
                BhashaBRD flags missing payment edge cases, unstated compliance rules, and architectural blindspots before engineers start coding.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-cream-300 text-purple-900 shadow-xs">
                  Real-Time Readiness Meter
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-cream-300 text-ink-800 shadow-xs">
                  Edge-Case Detection
                </span>
              </div>
            </div>

            <div className="lg:col-span-6 lg:order-1">
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-lg bg-white group">
                <img 
                  src="/images/socratic_discovery.jpg" 
                  alt="AI Requirement Discovery and Gap Analysis"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

          {/* Pillar 3: Clean Developer-Ready Delivery */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200">
                03 &bull; INSTANT HANDOFF
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 leading-tight">
                Developer-ready on day one.<br />1-Click Jira & Notion sync.
              </h3>
              <p className="text-sm sm:text-base text-ink-600 leading-relaxed max-w-lg">
                Generates complete user stories formatted in Gherkin (Given-When-Then) with security, compliance, and SLA checklists.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-cream-300 text-forest-800 shadow-xs">
                  Jira &bull; Notion &bull; Confluence
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white border border-cream-300 text-ink-800 shadow-xs">
                  Markdown &bull; PDF
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden border border-cream-300 shadow-lg bg-white group">
                <img 
                  src="/images/developer_spec.jpg" 
                  alt="Software Requirements to Clean Architecture and Code Modules"
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
