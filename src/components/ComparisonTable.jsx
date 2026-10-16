import React from 'react'
import { Check, X, Sparkles, HelpCircle } from 'lucide-react'
import { COMPARISON_DATA } from '../data/mockData'

export default function ComparisonTable() {
  return (
    <section id="comparison" className="py-20 md:py-28 bg-[#FAF9F5] border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200 mb-3 inline-block">
            THE ARCHITECTURAL DIFFERENCE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight mt-2">
            Why a conversation beats a 40-page questionnaire.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Traditional forms cause mental fatigue. Generic prompt bots hallucinate without asking what you forgot. BhashaBRD is an active business partner.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="overflow-hidden rounded-3xl border border-cream-300 shadow-sm bg-white">
              <table className="min-w-full divide-y divide-cream-200 text-left">
                
                {/* Table Header */}
                <thead>
                  <tr className="bg-cream-100/90 text-xs font-bold text-ink-700 uppercase tracking-wider">
                    <th scope="col" className="py-4 px-6 w-1/4">Feature</th>
                    <th scope="col" className="py-4 px-6 w-1/4 text-ink-500">Traditional BRDs</th>
                    <th scope="col" className="py-4 px-6 w-1/4 text-ink-500">Generic Chatbots</th>
                    <th scope="col" className="py-4 px-6 w-1/4 bg-forest-800 text-white rounded-t-xl">
                      <div className="flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-emerald-300" />
                        <span>BhashaBRD Agent</span>
                      </div>
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-cream-200 text-xs sm:text-sm">
                  {COMPARISON_DATA.map((row, idx) => (
                    <tr key={idx} className="hover:bg-cream-50/60 transition-colors">
                      
                      {/* Feature Name */}
                      <td className="py-4 px-6 font-semibold text-ink-900 bg-white">
                        {row.feature}
                      </td>

                      {/* Traditional */}
                      <td className="py-4 px-6 text-ink-500 bg-white">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>

                      {/* ChatGPT */}
                      <td className="py-4 px-6 text-ink-500 bg-white">
                        <div className="flex items-start gap-2">
                          <X className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                          <span>{row.chatgpt}</span>
                        </div>
                      </td>

                      {/* BhashaBRD (Highlighted) */}
                      <td className="py-4 px-6 bg-forest-50/40 font-medium text-forest-950 border-l border-r border-forest-100">
                        <div className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-forest-700 font-bold shrink-0 mt-0.5" />
                          <span className="font-semibold text-forest-900">{row.bhasha}</span>
                        </div>
                      </td>

                    </tr>
                  ))}
                </tbody>

              </table>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
