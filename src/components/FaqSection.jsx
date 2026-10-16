import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { FAQS } from '../data/mockData'

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section className="py-20 md:py-28 bg-[#FAF9F5] border-b border-cream-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200 mb-3 inline-block">
            FREQUENTLY ASKED QUESTIONS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight mt-2">
            Everything you need to know.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4">
            Have questions about how BhashaBRD transforms voice conversations into software requirements? We've got answers.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-cream-300 overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 hover:bg-cream-50/50 transition-colors"
                >
                  <span className="font-bold text-base text-ink-900 pr-4">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-cream-200 text-ink-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-forest-100 text-forest-800' : ''
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-ink-600 leading-relaxed border-t border-cream-100 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
