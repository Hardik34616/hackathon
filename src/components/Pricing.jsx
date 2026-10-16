import React, { useState } from 'react'
import { Check, Sparkles, ArrowRight } from 'lucide-react'

export default function Pricing({ onOpenDemo }) {
  const [billingCycle, setBillingCycle] = useState('monthly')

  const tiers = [
    {
      name: 'Starter',
      badge: 'Hackathon & Solo Builders',
      price: '₹0',
      period: 'forever free',
      desc: 'Perfect for exploring new product ideas and turning voice notes into quick functional specifications.',
      features: [
        '3 Active BRD Projects per month',
        'Sarvam AI Indic STT (10+ Indian Languages)',
        'Basic Socratic gap detection',
        'Standard Markdown (.md) and PDF export',
        'Community Discord support'
      ],
      cta: 'Start for Free',
      popular: false
    },
    {
      name: 'Pro Leader',
      badge: 'Product Teams & Agencies',
      price: billingCycle === 'monthly' ? '₹1,999' : '₹1,599',
      period: 'per seat / month',
      desc: 'For product managers, startup founders, and agile squads who ship software every week.',
      features: [
        'Unlimited Interactive Voice Sessions',
        'Deep Gap & Edge-Case Discovery Engine',
        'Direct 1-Click Sync to Jira, Notion & Confluence',
        'Export to Gherkin Given-When-Then Acceptance Criteria',
        'Team Collaboration & Real-Time Shared Workspaces',
        'Priority Sarvam High-Speed STT Model'
      ],
      cta: 'Upgrade to Pro',
      popular: true
    },
    {
      name: 'Enterprise',
      badge: 'Custom Governance',
      price: 'Custom',
      period: 'billed annually',
      desc: 'For enterprises needing on-prem Sarvam AI hosting, SOC2 compliance, and dedicated custom models.',
      features: [
        'Dedicated Sarvam AI Indic STT Cluster',
        'On-Prem / Private VPC Deployment',
        'Custom Company PRD / Architecture Templates',
        'SSO (SAML, Okta) & Audit Trail Logs',
        'Dedicated Technical Account Manager & SLA'
      ],
      cta: 'Contact Enterprise Sales',
      popular: false
    }
  ]

  return (
    <section id="pricing" className="py-20 md:py-28 bg-white border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200 mb-3 inline-block">
            TRANSPARENT PRICING
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight mt-2">
            Build better specifications. Faster.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Start with our generous free tier today. Upgrade only when you want unlimited voice discovery and direct Jira/Notion pipelines.
          </p>

          {/* Billing cycle toggle */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-ink-900' : 'text-ink-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
              className="w-12 h-6 rounded-full bg-cream-300 p-1 flex items-center transition-colors relative"
            >
              <div className={`w-4 h-4 rounded-full bg-forest-800 transition-transform ${
                billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
              }`} />
            </button>
            <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-ink-900' : 'text-ink-500'}`}>
              <span>Annual</span>
              <span className="text-[10px] bg-forest-100 text-forest-800 font-bold px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {tiers.map((t, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between relative ${
                t.popular
                  ? 'bg-cream-50 border-2 border-forest-700 shadow-xl shadow-forest-900/5'
                  : 'bg-white border border-cream-300 shadow-xs hover:shadow-md'
              }`}
            >
              {/* Popular Badge */}
              {t.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-forest-800 text-white text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              <div>
                <span className="text-xs font-bold text-forest-800 uppercase tracking-wider block mb-1">
                  {t.badge}
                </span>
                <h3 className="font-serif text-2xl font-bold text-ink-900 mb-2">
                  {t.name}
                </h3>
                <p className="text-xs text-ink-600 mb-6 leading-relaxed">
                  {t.desc}
                </p>

                {/* Price Display */}
                <div className="flex items-baseline gap-1.5 mb-6 pb-6 border-b border-cream-200">
                  <span className="font-serif text-4xl sm:text-5xl font-bold text-ink-900">
                    {t.price}
                  </span>
                  <span className="text-xs text-ink-500 font-medium">
                    /{t.period}
                  </span>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-wider text-ink-700 block mb-2">
                    What's included:
                  </span>
                  {t.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-ink-700">
                      <Check className="w-4 h-4 text-forest-700 shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={onOpenDemo}
                className={`w-full py-3.5 rounded-full text-xs font-bold transition-all flex items-center justify-center gap-2 ${
                  t.popular
                    ? 'bg-forest-800 hover:bg-forest-900 text-white shadow-md active:scale-95'
                    : 'bg-ink-900 hover:bg-forest-800 text-white'
                }`}
              >
                <span>{t.cta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
