import React, { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ValueProps from './components/ValueProps'
import HowItWorks from './components/HowItWorks'
import VisualStorytelling from './components/VisualStorytelling'
import SarvamLanguageGrid from './components/SarvamLanguageGrid'
import ComparisonTable from './components/ComparisonTable'
import ExportIntegrations from './components/ExportIntegrations'
import Pricing from './components/Pricing'
import FaqSection from './components/FaqSection'
import CtaBanner from './components/CtaBanner'
import Footer from './components/Footer'
import ExportModal from './components/ExportModal'
import InteractiveVoiceModal from './components/InteractiveVoiceModal'
import { SCENARIOS } from './data/mockData'

export default function App() {
  const [exportModalOpen, setExportModalOpen] = useState(false)
  const [selectedExportScenario, setSelectedExportScenario] = useState(SCENARIOS[0])
  const [voiceModalOpen, setVoiceModalOpen] = useState(false)

  const handleExportClick = (scenario) => {
    setSelectedExportScenario(scenario || SCENARIOS[0])
    setExportModalOpen(true)
  }

  const handleOpenDemo = () => {
    setVoiceModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-cream-100 text-ink-900 flex flex-col font-sans selection:bg-forest-100 selection:text-forest-900">
      
      {/* Sticky Glass Navbar */}
      <Navbar onOpenDemo={handleOpenDemo} />

      <main className="flex-1">
        {/* Hero Section with hand-drawn annotations and clean App Mockup */}
        <HeroSection 
          onOpenDemo={handleOpenDemo} 
          onExportClick={() => handleExportClick(SCENARIOS[0])} 
        />

        {/* 3 Value Props below the Hero Mockup (from landing.png) */}
        <ValueProps />

        {/* 3-Step Pipeline: Listen, Clarify, Generate */}
        <HowItWorks />

        {/* Visual Storytelling with Custom Generated 3D Images */}
        <VisualStorytelling onOpenDemo={handleOpenDemo} />

        {/* Sarvam AI Indic Language Engine */}
        <SarvamLanguageGrid />

        {/* Why BhashaBRD Architectural Comparison */}
        <ComparisonTable />

        {/* 1-Click Developer Exports (Jira, Notion, Confluence, GitHub) */}
        <ExportIntegrations onOpenDemo={handleOpenDemo} />

        {/* Transparent Pricing */}
        <Pricing onOpenDemo={handleOpenDemo} />

        {/* Frequently Asked Questions */}
        <FaqSection />

        {/* Closing Voice-First CTA Banner */}
        <CtaBanner onOpenDemo={handleOpenDemo} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Export BRD Document Modal */}
      <ExportModal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        scenario={selectedExportScenario}
      />

      {/* Interactive Discovery Session Modal */}
      <InteractiveVoiceModal
        isOpen={voiceModalOpen}
        onClose={() => setVoiceModalOpen(false)}
      />

    </div>
  )
}
