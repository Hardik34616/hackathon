import React from 'react'
import { MessageCircle, FileText, Share2, Sparkles } from 'lucide-react'

export default function ValueProps() {
  const props = [
    {
      icon: MessageCircle,
      title: 'An agent that asks',
      description: 'Understands your idea and asks relevant follow-up questions.',
      tag: 'Contextual Dialogue'
    },
    {
      icon: FileText,
      title: 'Requirements that evolve',
      description: 'Builds a complete BRD as you share more details.',
      tag: 'Live Synthesis'
    },
    {
      icon: Share2,
      title: 'A BRD ready to share',
      description: 'Export a structured, professional document in minutes.',
      tag: 'Zero Friction'
    }
  ]

  return (
    <section className="py-12 bg-cream-100 border-b border-cream-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {props.map((p, idx) => {
            const Icon = p.icon
            return (
              <div 
                key={idx}
                className="group relative bg-white/70 hover:bg-white p-6 rounded-2xl border border-cream-300/80 shadow-xs hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-cream-200/80 group-hover:bg-forest-100 text-forest-800 flex items-center justify-center shrink-0 border border-cream-300/60 transition-colors">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-base sm:text-lg text-ink-900 group-hover:text-forest-800 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                    {p.description}
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
