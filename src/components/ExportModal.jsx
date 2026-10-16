import React, { useState } from 'react'
import { X, Copy, Check, Download, FileText, ExternalLink, Code2 } from 'lucide-react'

export default function ExportModal({ isOpen, onClose, scenario }) {
  const [copied, setCopied] = useState(false)
  const [activeFormat, setActiveFormat] = useState('markdown')

  if (!isOpen || !scenario) return null

  // Generate complete Markdown text
  const markdownContent = `# Business Requirements Document (BRD)
## Project: ${scenario.name}
**Generated via BhashaBRD (Voice-First AI Discovery)**
**Date:** ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
**Readiness Score:** ${scenario.readiness || 85}%
**Status:** Approved for Technical Architecture & Sprint Grooming

---

### 1. Executive Summary & Objective
${scenario.sections?.objective || 'Comprehensive functional requirements generated from stakeholder voice discovery.'}

---

### 2. Functional Requirements & Acceptance Criteria
${scenario.sections?.coreRequirements?.map((req, i) => `#### FR-${i + 1}: ${req.split(':')[0] || 'Feature ' + (i + 1)}
- **Description:** ${req}
- **Given:** A registered user in the active tenant session
- **When:** The transaction action triggers via mobile client or web portal
- **Then:** System validates payload against compliance rules and records state with audit hash
`).join('\n') || '- Requirements logged in system.'}

---

### 3. Open Questions & Risk Mitigation
${scenario.sections?.openQuestions?.map((q, i) => `- [ ] **OQ-${i + 1}:** ${q}`).join('\n') || '- No pending blockers identified.'}

---

### 4. Technical Non-Functional Requirements (NFR)
- **Voice Pipeline:** Sarvam AI Indic STT WebSocket streaming with < 250ms target latency.
- **Data Compliance:** DPDP Act 2023 compliant data residency in Mumbai (ap-south-1).
- **Authentication:** Phone number + OTP with biometric device keychain fallback.
`

  const handleCopy = () => {
    navigator.clipboard.writeText(markdownContent)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownload = () => {
    const element = document.createElement('a')
    const file = new Blob([markdownContent], { type: 'text/markdown' })
    element.href = URL.createObjectURL(file)
    element.download = `${scenario.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}-brd.md`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-cream-300 shadow-2xl max-w-3xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-6 border-b border-cream-200 flex items-center justify-between bg-cream-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-forest-800 text-white flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg text-ink-900">
                Export BRD: {scenario.name}
              </h3>
              <p className="text-xs text-ink-500">
                Ready for Jira, Notion, GitHub or local archive
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-cream-200 hover:bg-cream-300 text-ink-700 flex items-center justify-center transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Format Selector */}
        <div className="px-6 py-3 bg-white border-b border-cream-200 flex items-center justify-between">
          <div className="flex gap-2">
            {['markdown', 'jira-ready', 'json'].map((fmt) => (
              <button
                key={fmt}
                onClick={() => setActiveFormat(fmt)}
                className={`px-3 py-1 rounded-lg text-xs font-semibold capitalize transition-colors ${
                  activeFormat === fmt
                    ? 'bg-forest-800 text-white'
                    : 'bg-cream-100 text-ink-600 hover:bg-cream-200'
                }`}
              >
                {fmt === 'markdown' ? 'Markdown (.md)' : fmt === 'jira-ready' ? 'Jira Gherkin' : 'Raw JSON'}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopy}
              className="px-3 py-1.5 rounded-lg border border-cream-300 hover:bg-cream-100 text-xs font-semibold text-ink-800 flex items-center gap-1.5 transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-700">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy</span>
                </>
              )}
            </button>

            <button
              onClick={handleDownload}
              className="px-4 py-1.5 rounded-lg bg-forest-800 hover:bg-forest-900 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>
          </div>
        </div>

        {/* Modal Code Viewer */}
        <div className="p-6 overflow-y-auto flex-1 font-mono text-xs bg-cream-50/70 text-ink-800 leading-relaxed whitespace-pre-wrap select-all">
          {activeFormat === 'markdown' && markdownContent}
          {activeFormat === 'jira-ready' && (
            `EPIC: [BRD] ${scenario.name}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${scenario.sections?.coreRequirements?.map((r, i) => `
STORY ${i + 1}: Implement ${r.split(':')[0]}
Description: As a user, I want ${r.toLowerCase()}
Acceptance Criteria:
  GIVEN valid user session
  WHEN the request executes
  THEN persist changes and trigger notification
`).join('\n')}
`
          )}
          {activeFormat === 'json' && JSON.stringify(scenario, null, 2)}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-cream-200 bg-cream-50 flex items-center justify-between text-xs text-ink-500">
          <span>Compliant with IEEE 830 Specification Standard</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-cream-200 hover:bg-cream-300 text-ink-800 font-semibold"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  )
}
