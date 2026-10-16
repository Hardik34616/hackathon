import React, { useState } from 'react'
import { Plus, FolderGit2, FileText, Download, Settings, Mic, Edit3, CheckCircle2, HelpCircle, Target } from 'lucide-react'

export default function InteractiveAppMockup({ onExportClick }) {
  const [currentScenario, setCurrentScenario] = useState('pharmacy')

  return (
    <div className="w-full relative">
      {/* Scenario Filter Pills */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="text-xs font-semibold text-ink-500 uppercase tracking-wider mr-1">
          Preset Ideas:
        </span>
        {[
          { id: 'pharmacy', label: 'Pharmacy Delivery', lang: 'English' },
          { id: 'edtech', label: 'Vernacular LMS', lang: 'हिंदी' },
          { id: 'pos', label: 'Voice Khata POS', lang: 'Hinglish' },
        ].map((item) => (
          <button
            key={item.id}
            onClick={() => setCurrentScenario(item.id)}
            className={`px-3.5 py-1.5 rounded-full text-xs transition-all ${
              currentScenario === item.id
                ? 'bg-forest-800 text-white font-semibold shadow-sm'
                : 'bg-white text-ink-700 hover:bg-cream-200 border border-cream-300'
            }`}
          >
            <span>{item.label}</span>
            <span className="ml-1.5 text-[10px] opacity-75">({item.lang})</span>
          </button>
        ))}
      </div>

      {/* Main App Container Card */}
      <div className="bg-white rounded-3xl border border-cream-300/80 shadow-[0_25px_60px_-15px_rgba(27,67,50,0.08)] overflow-hidden">
        
        {/* Browser / App Header */}
        <div className="bg-cream-100 border-b border-cream-300/70 px-5 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-rose-400"></div>
            <div className="w-3 h-3 rounded-full bg-amber-400"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            <span className="text-xs text-ink-500 font-mono ml-2 hidden sm:inline">
              bhasha-brd.app/workspace
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-medium text-forest-800 bg-forest-50 border border-forest-200 px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Sarvam Voice Active</span>
          </div>
        </div>

        {/* Interior Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          
          {/* Left Mini Sidebar (2 cols) */}
          <div className="lg:col-span-2 bg-[#F9F8F5] border-r border-cream-300/70 p-4 flex flex-col justify-between hidden md:flex">
            <div>
              {/* Logo */}
              <div className="flex items-center gap-2 mb-6 px-1">
                <div className="w-7 h-7 rounded-lg bg-forest-800 text-white flex items-center justify-center font-bold text-xs">
                  B
                </div>
                <span className="font-extrabold text-sm tracking-tight text-ink-900">
                  Bhasha<span className="text-forest-700">BRD</span>
                </span>
              </div>

              {/* + New Chat */}
              <button className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-lilac-100 text-purple-900 text-xs font-bold transition-colors mb-6 shadow-sm border border-purple-200">
                <Plus className="w-3.5 h-3.5" />
                <span>New Chat</span>
              </button>

              {/* Navigation */}
              <nav className="space-y-1 text-xs font-medium text-ink-700">
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg bg-cream-200 text-forest-900 font-semibold">
                  <FolderGit2 className="w-4 h-4 text-forest-700" />
                  <span>Projects</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-ink-600">
                  <FileText className="w-4 h-4" />
                  <span>Templates</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-ink-600">
                  <Download className="w-4 h-4" />
                  <span>Exports</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-ink-600">
                  <Settings className="w-4 h-4" />
                  <span>Settings</span>
                </div>
              </nav>
            </div>
          </div>

          {/* Center Chat Panel (5 cols) */}
          <div className="lg:col-span-5 p-5 md:p-6 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-cream-300/70 bg-white">
            <div>
              {/* Header */}
              <div className="mb-6">
                <h3 className="font-serif font-bold text-2xl text-ink-900 tracking-tight">
                  Let's shape your idea
                </h3>
                <p className="text-xs text-ink-500 mt-1">
                  I'll ask a few questions to understand your requirements and create a detailed BRD.
                </p>
              </div>

              {/* Message Feed */}
              <div className="space-y-4">
                {/* User Message */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-cream-300 text-ink-700 flex items-center justify-center shrink-0 text-xs font-semibold">
                    👤
                  </div>
                  <div className="bg-cream-100 text-ink-800 text-xs sm:text-[13px] leading-relaxed p-3.5 rounded-2xl rounded-tl-sm border border-cream-300/70 max-w-[90%]">
                    {currentScenario === 'pharmacy' && 'I want to build an app for local pharmacies where customers can search medicines and get them delivered at home.'}
                    {currentScenario === 'edtech' && 'हम टियर-2 और 3 स्टूडेंट्स के लिए लो-इंटरनेट वीडियो कोर्स ऐप बनाना चाहते हैं जिसमें वॉयस से डाउट पूछ सकें।'}
                    {currentScenario === 'pos' && 'Chhote dukaandaaron ke liye ek simple voice billing app jisme bolte hi item add ho jaye aur WhatsApp par bill chala jaye.'}
                  </div>
                </div>

                {/* Agent Response */}
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-full bg-forest-700 text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-xs">
                    🤖
                  </div>
                  <div className="bg-forest-50/60 text-forest-950 text-xs sm:text-[13px] leading-relaxed p-3.5 rounded-2xl rounded-tl-sm border border-forest-100 max-w-[90%]">
                    {currentScenario === 'pharmacy' && 'Great! That\'s a valuable idea. Who will use the app most often? Is it mainly for customers, pharmacy owners, or both?'}
                    {currentScenario === 'edtech' && 'बहुत बढ़िया विज़न! क्या कोर्सेस पहले से रिकॉर्डेड होंगे या लाइव? और क्या ऑफलाइन डाउनलोड एनक्रिप्टेड फॉर्मेट में रखना है?'}
                    {currentScenario === 'pos' && 'Shandar! Kya dukaandaar ke local bolchal ke shabdon (jaise "aadha kilo daal") ke liye voice recognition customize karni hai?'}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Voice Capsule */}
            <div className="pt-4 mt-6 border-t border-cream-200">
              <div className="flex items-center gap-2 p-1.5 rounded-full bg-cream-100 border border-cream-300">
                <button className="w-10 h-10 rounded-full bg-forest-800 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mic className="w-5 h-5" />
                </button>

                {/* Animated Waveform */}
                <div className="flex items-center gap-1 px-2 h-6 overflow-hidden shrink-0">
                  {[30, 60, 95, 45, 80, 25, 70, 40, 85, 30].map((h, i) => (
                    <span
                      key={i}
                      className="w-[3px] bg-forest-700 rounded-full animate-pulse"
                      style={{ height: `${h}%`, animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>

                <span className="text-xs text-ink-400 italic px-2 flex-1">
                  Speak or type your answer...
                </span>

                <div className="w-7 h-7 rounded-full bg-cream-300 text-ink-600 flex items-center justify-center text-xs">
                  &rarr;
                </div>
              </div>
            </div>
          </div>

          {/* Right Live BRD Preview (5 cols) */}
          <div className="lg:col-span-5 bg-[#FAF9F6] p-5 md:p-6 flex flex-col justify-between">
            <div>
              {/* Status & Readiness */}
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-cream-300/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span className="text-[11px] font-bold tracking-wider text-ink-600 uppercase">
                    LIVE BRD PREVIEW
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-ink-700">
                    BRD readiness <strong className="text-forest-800 font-bold">82%</strong>
                  </span>
                  <div className="w-20 h-2 bg-cream-300 rounded-full overflow-hidden">
                    <div className="h-full bg-forest-600 rounded-full w-[82%]" />
                  </div>
                </div>
              </div>

              {/* Document Sheet */}
              <div className="bg-white rounded-2xl p-4 sm:p-5 border border-cream-300/90 shadow-xs mb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-base">📄</span>
                    <h4 className="font-bold text-base text-ink-900 tracking-tight">
                      {currentScenario === 'pharmacy' && 'Pharmacy Delivery Platform'}
                      {currentScenario === 'edtech' && 'Vernacular Learning Hub'}
                      {currentScenario === 'pos' && 'Voice POS & Udhar Khata'}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-2.5 py-1 rounded-lg border border-cream-300 text-ink-700 text-xs font-semibold flex items-center gap-1">
                      <Edit3 className="w-3 h-3 text-ink-500" />
                      <span>Edit</span>
                    </button>
                    <button 
                      onClick={onExportClick}
                      className="px-3 py-1 rounded-lg bg-forest-800 hover:bg-forest-900 text-white text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors"
                    >
                      <Download className="w-3 h-3" />
                      <span>Export</span>
                    </button>
                  </div>
                </div>

                {/* Section 1 */}
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-xs font-bold text-forest-800 uppercase mb-1">
                    <Target className="w-3 h-3" />
                    <span>1. Project Objective</span>
                  </div>
                  <p className="text-xs text-ink-600 leading-relaxed pl-4">
                    Hyper-local ordering & fulfillment ecosystem with compliant Rx sign-off and 45-min delivery.
                  </p>
                </div>

                {/* Section 2 */}
                <div className="mb-3">
                  <div className="flex items-center gap-1 text-xs font-bold text-forest-800 uppercase mb-1.5">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>2. Core Requirements</span>
                  </div>
                  <ul className="space-y-1 pl-4 text-xs text-ink-700">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                      <span>Patient App: Camera prescription upload & OTC search</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                      <span>Pharmacist Portal: Digital Rx audit & inventory sync</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-forest-600"></span>
                      <span>CDSCO Schedule H Compliance safeguards</span>
                    </li>
                  </ul>
                </div>

                {/* Section 3: Open Questions */}
                <div className="p-3 rounded-xl bg-lilac-50/70 border border-purple-200/80">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-1 text-xs font-bold text-purple-900">
                      <HelpCircle className="w-3 h-3 text-purple-700" />
                      <span>3. Open Questions</span>
                    </div>
                    <span className="text-[10px] font-semibold bg-purple-200/70 text-purple-900 px-1.5 py-0.5 rounded-full">
                      2 pending
                    </span>
                  </div>
                  <ul className="space-y-1 pl-4 text-xs text-purple-950">
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>Pharmacist sign-off turnaround SLA?</span>
                    </li>
                    <li className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                      <span>Insulin cold-chain tracking requirements?</span>
                    </li>
                  </ul>
                </div>

              </div>
            </div>

            <div className="text-[11px] text-ink-500 flex items-center justify-between px-1">
              <span>Auto-saved</span>
              <span className="font-mono text-[10px] text-ink-400">Jira Gherkin Ready</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}
