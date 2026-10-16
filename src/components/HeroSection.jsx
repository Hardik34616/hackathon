import React from 'react'
import { ArrowRight, Sparkles, MessageSquare, FileCheck } from 'lucide-react'
import InteractiveAppMockup from './InteractiveAppMockup'

export default function HeroSection({ onOpenDemo, onExportClick }) {
  return (
    <section className="relative pt-8 pb-20 md:pt-14 md:pb-28 overflow-hidden bg-warm-canvas">
      
      {/* Background ambient decorative shapes & subtle organic glows */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-forest-100/40 via-lilac-100/30 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Hero Header Area */}
        <div className="relative text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-forest-800 uppercase relative">
              YOUR INTERACTIVE BRD AGENT
              {/* Hand-drawn green wavy underline */}
              <svg 
                className="absolute -bottom-2 left-0 w-full h-2 text-forest-600 overflow-visible" 
                viewBox="0 0 160 8" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M1 5.5C25 2 55 7.5 80 4C105 0.5 135 6 159 3.5" 
                  stroke="currentColor" 
                  strokeWidth="2.5" 
                  strokeLinecap="round" 
                />
              </svg>
            </span>
          </div>

          {/* Left Hand-Drawn Annotation (Just Tell Your Ideas) */}
          <div className="hidden xl:block absolute -left-20 top-4 w-48 text-left pointer-events-none select-none">
            {/* Doodle Speech Bubbles */}
            <div className="relative mb-2">
              <svg className="w-24 h-20 text-forest-800" viewBox="0 0 100 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Bubble 1 */}
                <path d="M10 20C10 10 20 5 45 5C70 5 80 10 80 25C80 38 70 45 50 45C42 45 35 48 25 55C27 48 25 45 18 43C12 40 10 32 10 20Z" stroke="#161917" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="#FAF7FF" />
                <path d="M25 20H65M25 28H55M25 36H45" stroke="#285933" strokeWidth="2" strokeLinecap="round" />
                {/* Sparkle */}
                <path d="M88 12L90 18L96 20L90 22L88 28L86 22L80 20L86 18L88 12Z" fill="#387A42" />
              </svg>
            </div>
            <div className="font-handwriting text-2xl font-bold text-ink-900 tracking-wide rotate-[-6deg] leading-none">
              JUST<br />TELL<br />YOUR IDEAS
            </div>
            {/* Curved arrow pointing to the app */}
            <svg className="w-16 h-14 mt-1 ml-6 text-forest-700" viewBox="0 0 70 60" fill="none">
              <path d="M5 5C15 25 25 45 55 48M55 48L42 40M55 48L47 56" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Right Hand-Drawn Annotation (Get a Structured BRD) */}
          <div className="hidden xl:block absolute -right-24 top-2 w-52 text-right pointer-events-none select-none">
            {/* Doodle Document with BRD */}
            <div className="relative inline-block mb-1">
              <svg className="w-28 h-28 text-forest-800" viewBox="0 0 110 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Document Paper */}
                <path d="M25 15C25 10 30 8 35 8H80C85 8 90 12 90 17V85C90 90 85 93 80 93H35C30 93 25 89 25 85V15Z" stroke="#161917" strokeWidth="2.2" fill="#FFFFFF" />
                <text x="43" y="32" fill="#1B4332" fontSize="13" fontWeight="bold" fontFamily="sans-serif">BRD</text>
                <path d="M36 42H78M36 52H78M36 62H70M36 72H60" stroke="#8A918B" strokeWidth="2" strokeLinecap="round" />
                {/* Sun rays around doc */}
                <path d="M18 10L10 5M95 10L104 5M98 30L106 32M96 55L105 58M20 30L10 32" stroke="#387A42" strokeWidth="2" strokeLinecap="round" />
                <path d="M98 70L103 76L97 82L92 76L98 70Z" fill="#CEB2FC" />
              </svg>
            </div>
            <div className="font-handwriting text-2xl font-bold text-ink-900 tracking-wide rotate-[5deg] leading-tight text-right pr-2">
              GET A<br />STRUCTURED<br />BRD
            </div>
            {/* Curved arrow pointing to live preview */}
            <svg className="w-20 h-16 ml-auto mr-4 text-forest-700" viewBox="0 0 80 60" fill="none">
              <path d="M65 5C50 25 35 40 10 48M10 48L22 40M10 48L19 55" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Main Headline (Editorial Serif from landing.png) */}
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-ink-900 leading-[1.08] mb-6">
            Your idea deserves<br className="hidden sm:inline" /> to be understood.
          </h1>

          {/* Subheading */}
          <p className="text-base sm:text-lg md:text-xl text-ink-700 max-w-2xl mx-auto leading-relaxed mb-8">
            Talk through your vision. BhashaBRD asks the right questions and turns your conversation into a developer-ready BRD.
          </p>

          {/* Hero CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <button
              onClick={onOpenDemo}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-ink-900 text-white font-semibold text-base shadow-lg hover:bg-forest-800 active:scale-95 transition-all duration-200"
            >
              <span>Build your first BRD</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a
              href="#demo"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-cream-200/80 hover:bg-cream-300 text-ink-800 font-semibold text-base border border-cream-300/80 transition-all duration-200"
            >
              <span>See how it works</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform text-ink-500" />
            </a>
          </div>

          {/* Micro trust line */}
          <p className="text-xs sm:text-sm text-ink-500 font-medium tracking-wide">
            Speak naturally. &bull; Clarify requirements. &bull; Create with confidence.
          </p>

        </div>

        {/* Central Product Hero Mockup (The App Showcase from landing.png) */}
        <div className="mt-8 relative z-10">
          <InteractiveAppMockup onExportClick={onExportClick} />
        </div>

      </div>
    </section>
  )
}
