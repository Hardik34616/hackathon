import React from 'react'
import { Download, FileCode, Check, ArrowRight, ExternalLink } from 'lucide-react'

export default function ExportIntegrations({ onOpenDemo }) {
  const integrations = [
    {
      name: 'Atlassian Jira',
      category: 'Agile Epics & Stories',
      desc: 'Converts your BRD into nested Jira Epics, Stories, and Acceptance Criteria with Gherkin syntax (Given-When-Then).',
      badge: '1-Click Sync',
      icon: '🔷'
    },
    {
      name: 'Notion Workspace',
      category: 'Product Requirements',
      desc: 'Creates a connected Notion PRD database complete with status tags, priority ratings, and user persona matrices.',
      badge: 'Template Sync',
      icon: '⬛'
    },
    {
      name: 'Atlassian Confluence',
      category: 'Engineering Architecture',
      desc: 'Publishes an enterprise-grade software specification page with system diagrams, API contracts, and security checklists.',
      badge: 'Enterprise RFC',
      icon: '📘'
    },
    {
      name: 'GitHub Issues & Milestones',
      category: 'Sprint Backlog',
      desc: 'Directly pushes backlog tickets with pre-filled checkboxes and technical constraints to your repository.',
      badge: 'Dev Pipeline',
      icon: '🐙'
    },
    {
      name: 'Structured Markdown (.md)',
      category: 'Docs-as-Code',
      desc: 'Pure clean Markdown formatted according to IEEE 830 standards, ready for version control in Git repositories.',
      badge: 'Universal',
      icon: '📝'
    },
    {
      name: 'Executive PDF Report',
      category: 'Stakeholder Sign-Off',
      desc: 'Generates a styled, branded PDF report featuring the project overview, readiness score, and executive summary.',
      badge: 'Board Ready',
      icon: '📑'
    }
  ]

  return (
    <section id="features" className="py-20 md:py-28 bg-white border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-forest-800 uppercase bg-forest-100 px-3 py-1 rounded-full border border-forest-200 mb-3 inline-block">
            DEVELOPER-READY ON DAY ONE
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight mt-2">
            No more manual translation into Jira tickets.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4 max-w-xl mx-auto">
            Once your conversation concludes and the readiness score hits green, export the completed specification straight to your team's existing toolchain.
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {integrations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl border border-cream-300 bg-cream-50/50 hover:bg-white hover:border-forest-600 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-cream-200 text-ink-700">
                    {item.badge}
                  </span>
                </div>
                <h3 className="font-bold text-lg text-ink-900 mb-1">
                  {item.name}
                </h3>
                <span className="text-xs font-semibold text-forest-800 block mb-2">
                  {item.category}
                </span>
                <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-cream-200/80 flex items-center justify-between text-xs font-semibold text-forest-800">
                <span>Instant Export</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
