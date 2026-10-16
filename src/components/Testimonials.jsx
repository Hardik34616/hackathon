import React from 'react'
import { Quote, Star } from 'lucide-react'
import { TESTIMONIALS } from '../data/mockData'

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-[#FBFBFA] border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200 mb-3 inline-block">
            BUILT FOR INDIAN BUILDERS
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight mt-2">
            Loved by product leaders and founders.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            See how forward-thinking teams are shaving weeks off requirement discovery and shipping with total clarity.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-7 border border-cream-300 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center gap-1 mb-4 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-ink-700 leading-relaxed font-sans italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              {/* Author footer */}
              <div className="flex items-center gap-3 pt-4 border-t border-cream-200">
                <div className="w-10 h-10 rounded-full bg-forest-800 text-white font-bold text-xs flex items-center justify-center shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-ink-900 leading-tight">
                    {t.author}
                  </h4>
                  <p className="text-xs text-ink-500 leading-tight">
                    {t.role}, <span className="text-forest-800 font-medium">{t.company}</span>
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
