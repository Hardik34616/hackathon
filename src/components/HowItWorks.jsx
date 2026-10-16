import React from 'react'
import { Mic, Sparkles, FileText } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      title: 'Listen',
      icon: Mic,
      summary: 'Share your idea in your own words through voice or text, in your language.',
    },
    {
      num: '02',
      title: 'Clarify',
      icon: Sparkles,
      summary: 'BhashaBRD asks the right questions to fill gaps and understand your needs.',
    },
    {
      num: '03',
      title: 'Generate',
      icon: FileText,
      summary: 'Get a structured, developer-ready BRD that you can review, edit and export.',
    }
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-20 bg-[#FBFBFA] border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-ink-900 tracking-tight">
            From first conversation to a clear plan.
          </h2>
        </div>

        {/* 3 Step Cards (Exact layout from landing.png) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((st, idx) => {
            const Icon = st.icon
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-cream-300 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-11 h-11 rounded-xl bg-forest-50 text-forest-800 flex items-center justify-center shrink-0 border border-forest-100 font-serif font-bold text-sm">
                  {st.num}
                </div>
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Icon className="w-4 h-4 text-forest-700" />
                    <h3 className="font-bold text-base text-ink-900">
                      {st.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                    {st.summary}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
