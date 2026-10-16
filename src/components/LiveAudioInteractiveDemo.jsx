import React, { useState, useEffect } from 'react'
import { 
  Mic, MicOff, Play, Pause, RotateCcw, Download, 
  Sparkles, Globe, CheckCircle2, AlertCircle, ArrowRight,
  Volume2, ShieldCheck, FileCheck2, Share2
} from 'lucide-react'
import { INDIC_LANGUAGES } from '../data/mockData'

export default function LiveAudioInteractiveDemo({ onExportClick }) {
  const [selectedLanguage, setSelectedLanguage] = useState('hi')
  const [isPlaying, setIsPlaying] = useState(false)
  const [transcriptText, setTranscriptText] = useState('')
  const [stepIndex, setStepIndex] = useState(0)
  const [readiness, setReadiness] = useState(65)
  const [activeTab, setActiveTab] = useState('stories') // stories, nfr, architecture

  const demoScenarios = {
    hi: {
      lang: 'Hindi (हिंदी)',
      speech: 'हम एक ऐसा मोबाइल ऐप बनाना चाहते हैं जिससे गाँव और छोटे कस्बों के किसान अपनी फसल का सीधा फोटो खींचकर और बोलकर सही दाम जान सकें और पास की मंडी में सीधे व्यापारी से सौदा कर सकें बिना किसी दलाल के।',
      clarification: 'किसान भाई सीधे व्यापारी से संपर्क करेंगे। क्या भुगतान (Payment) बैंक खाते में सीधा ट्रांसफर होगा, या मंडी में नकद (Cash on Delivery)? और भाषा के लिए क्या केवल वॉयस सपोर्ट रखना है?',
      stories: [
        'US-1: किसान फसल की फोटो खींचकर AI ग्रेडिंग और अनुमानित मंडी भाव देख सके।',
        'US-2: वॉयस कमांड से सीधे बोली (Live Bidding) दर्ज करने की सुविधा।',
        'US-3: सत्यापित व्यापारियों के साथ डायरेक्ट एस्क्रो पेमेंट (Escrow Wallet)।'
      ],
      nfr: [
        'ऑफ़लाइन कैशे: बिना इंटरनेट के 3 दिन का पुराना मंडी भाव देखा जा सके।',
        'Sarvam AI STT: भोजपुरी, हरियाणवी और अवधी लहजे (Accents) में 98% सटीकता।'
      ],
      openQuestions: [
        'क्या मंडी से माल उठाने के लिए लॉजिस्टिक्स (ट्रैक्टर/पिकअप) पार्टनर API जोड़नी है?',
        'विवाद (Dispute) की स्थिति में मध्यस्थता (Arbitration) की क्या व्यवस्था होगी?'
      ]
    },
    ta: {
      lang: 'Tamil (தமிழ்)',
      speech: 'விவசாயிகள் தங்கள் விளைபொருட்களை இடைத்தரகர்கள் இல்லாமல் நேரடியாக வியாபாரிகளுக்கு விற்க உதவும் ஒரு குரல்வழி மொபைல் செயலி வேண்டும்.',
      clarification: 'வியாபாரிகளுடன் நேரடி வர்த்தகம் செய்யும்போது பணம் பாதுகாப்பாக சென்றடைய Escrow Wallet முறை தேவைப்படுமா? மற்றும் உள்ளூர் சந்தை விலைகள் எவ்வாறு ஒப்பிடப்படும்?',
      stories: [
        'US-1: விவசாயிகள் குரல் மூலம் பயிர் விவரங்களை பதிவேற்றம் செய்தல்.',
        'US-2: நேரடி வர்த்தகர்களுடன் பேசி விலை நிர்ணயம் செய்யும் முறை.',
        'US-3: உடனடி வங்கி கணக்கு பரிமாற்றம் (Instant UPI Settlement).'
      ],
      nfr: [
        'குறைந்த இணைய வேகத்திலும் (2G/3G) தடையின்றி செயல்பட வேண்டும்.',
        'தமிழ் பேச்சு அங்கீகாரம் (Sarvam Speech-to-Text).'
      ],
      openQuestions: [
        'போக்குவரத்து ஏற்பாடு யாரால் செய்யப்படும்?'
      ]
    },
    'en-IN': {
      lang: 'Indian English',
      speech: 'We want to build a decentralized EV two-wheeler roadside repair dispatch system where stranded riders can tap one button or speak their location, and the nearest certified mechanic on an electric bike is routed with emergency battery packs.',
      clarification: 'Understood. Will spare parts inventory be pre-stocked in the technician mobile kit, and what is the target response SLA for metro vs tier-2 cities?',
      stories: [
        'US-1: Stranded rider voice emergency SOS with GPS coordinate auto-capture.',
        'US-2: Real-time telemetry dispatch algorithm matching nearest certified EV technician.',
        'US-3: Digital job card with parts warranty logging on blockchain/cloud.'
      ],
      nfr: [
        'SLA: Dispatch confirmation within 120 seconds of voice SOS.',
        'Security: Aadhaar verification of mechanics with background checks.'
      ],
      openQuestions: [
        'Who covers battery salvage liability if the vehicle has third-party modifications?'
      ]
    }
  }

  const activeData = demoScenarios[selectedLanguage] || demoScenarios['hi']

  // Handle Play simulation
  const startSimulation = () => {
    setIsPlaying(true)
    setTranscriptText('')
    setReadiness(65)
    setStepIndex(1)

    // Stream transcript text
    const fullText = activeData.speech
    let currentIdx = 0
    const interval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setTranscriptText(fullText.slice(0, currentIdx))
        currentIdx += 3
      } else {
        clearInterval(interval)
        setIsPlaying(false)
        setStepIndex(2)
        setReadiness(94)
      }
    }, 40)
  }

  const resetSimulation = () => {
    setIsPlaying(false)
    setTranscriptText('')
    setStepIndex(0)
    setReadiness(65)
  }

  return (
    <section id="demo" className="py-20 md:py-28 bg-cream-50 border-b border-cream-200 relative overflow-hidden">
      
      {/* Glow elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-lilac-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-forest-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-lilac-100 border border-purple-200 text-xs font-bold text-purple-900 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-purple-700" />
            <span>WISPR-GRADE INTERACTIVE PLAYGROUND</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight">
            Try the voice-first experience.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            Select an Indic language, tap the microphone to simulate a live voice interview, and watch how conversational answers turn into formal specifications.
          </p>
        </div>

        {/* The Interactive Sandbox Container */}
        <div className="bg-white rounded-3xl border border-cream-300 shadow-xl overflow-hidden max-w-5xl mx-auto">
          
          {/* Top Bar with Language Selector */}
          <div className="bg-cream-100/90 border-b border-cream-300/80 px-6 py-4 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold uppercase tracking-wider text-ink-600 flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-forest-700" />
                Language Engine:
              </span>
              <div className="flex gap-1.5 flex-wrap">
                {[
                  { id: 'hi', label: 'Hindi (हिंदी)' },
                  { id: 'en-IN', label: 'Indian English' },
                  { id: 'ta', label: 'Tamil (தமிழ்)' },
                ].map((l) => (
                  <button
                    key={l.id}
                    onClick={() => {
                      setSelectedLanguage(l.id)
                      resetSimulation()
                    }}
                    className={`px-3 py-1 rounded-full text-xs font-semibold transition-all ${
                      selectedLanguage === l.id
                        ? 'bg-forest-800 text-white shadow-xs'
                        : 'bg-white hover:bg-cream-200 text-ink-700 border border-cream-300'
                    }`}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Live Status indicator */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-medium text-ink-600">Model:</span>
              <span className="font-mono text-xs font-bold text-forest-800 bg-forest-50 border border-forest-200 px-2.5 py-0.5 rounded-full">
                sarvam-indic-stt-v2
              </span>
            </div>
          </div>

          {/* Sandbox Body: Split Left (Audio & Dialogue) / Right (Live Spec Compilation) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
            
            {/* Left Column: Voice Interaction Simulator (6 cols) */}
            <div className="lg:col-span-6 p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-cream-300 flex flex-col justify-between bg-white">
              <div>
                
                {/* Voice Capsule Bar (Wispr Flow style) */}
                <div className="p-4 rounded-2xl bg-cream-100 border border-cream-300 mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-ink-700 flex items-center gap-1.5">
                      <Volume2 className="w-3.5 h-3.5 text-forest-700" />
                      Voice Input Controller
                    </span>
                    <span className="text-[11px] font-mono text-ink-500">
                      {isPlaying ? 'Streaming Audio (48kHz)...' : 'Ready to record'}
                    </span>
                  </div>

                  {/* Mic & Waveform action row */}
                  <div className="flex items-center gap-4">
                    <button
                      onClick={isPlaying ? resetSimulation : startSimulation}
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-md ${
                        isPlaying
                          ? 'bg-rose-500 text-white ring-4 ring-rose-200 animate-pulse'
                          : 'bg-forest-800 text-white hover:bg-forest-900 active:scale-95'
                      }`}
                      title={isPlaying ? 'Stop' : 'Start Voice Simulation'}
                    >
                      {isPlaying ? <MicOff className="w-6 h-6" /> : <Mic className="w-6 h-6" />}
                    </button>

                    {/* Animated Sound Wave bars */}
                    <div className="flex-1 h-12 bg-white rounded-xl border border-cream-300 px-4 flex items-center gap-1 justify-center overflow-hidden">
                      {[15, 35, 75, 45, 90, 60, 30, 85, 40, 95, 65, 30, 80, 50, 20, 60, 90, 45, 70, 30].map((h, i) => (
                        <span
                          key={i}
                          className={`w-1 rounded-full transition-all duration-150 ${
                            isPlaying ? 'bg-forest-600' : 'bg-cream-400'
                          }`}
                          style={{
                            height: isPlaying ? `${h}%` : '20%',
                            animationDelay: `${i * 45}ms`
                          }}
                        />
                      ))}
                    </div>

                    <button
                      onClick={resetSimulation}
                      className="p-2.5 rounded-xl border border-cream-300 hover:bg-cream-200 text-ink-600 transition-colors"
                      title="Reset"
                    >
                      <RotateCcw className="w-4 h-4" />
                    </button>
                  </div>

                  <p className="text-[11px] text-ink-500 mt-2 text-center">
                    Tap the green microphone to run sample voice input in <strong>{activeData.lang}</strong>
                  </p>
                </div>

                {/* Live Transcription Box */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-forest-800 uppercase tracking-wide">
                      Live Streamed Transcript:
                    </span>
                    {isPlaying && (
                      <span className="text-[10px] text-forest-700 bg-forest-100 px-2 py-0.5 rounded font-mono animate-pulse">
                        Transcribing...
                      </span>
                    )}
                  </div>
                  <div className="p-4 rounded-xl bg-cream-50 border border-cream-300 min-h-[90px] text-xs sm:text-sm text-ink-800 leading-relaxed font-sans">
                    {transcriptText || (
                      <span className="text-ink-400 italic">
                        No audio captured yet. Tap the microphone above to begin speech recognition...
                      </span>
                    )}
                  </div>
                </div>

                {/* Socratic Agent Follow-Up Response */}
                {stepIndex >= 2 && (
                  <div className="p-4 rounded-xl bg-forest-50/70 border border-forest-200 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-2 mb-2 text-xs font-bold text-forest-900">
                      <span>🤖 BhashaBRD Business Analyst:</span>
                    </div>
                    <p className="text-xs sm:text-sm text-forest-950 leading-relaxed">
                      "{activeData.clarification}"
                    </p>
                    <div className="mt-2 flex items-center gap-1.5 text-[11px] text-forest-700 font-semibold">
                      <Sparkles className="w-3 h-3" />
                      <span>Uncovered 2 unstated business assumptions</span>
                    </div>
                  </div>
                )}

              </div>

              {/* Bottom hint */}
              <div className="pt-4 border-t border-cream-200 text-xs text-ink-500 flex items-center justify-between">
                <span>Natural Code-Switching Supported</span>
                <span className="font-mono text-[11px] text-forest-700 font-bold">Latency: 180ms</span>
              </div>
            </div>

            {/* Right Column: Dynamic Structured BRD Output (6 cols) */}
            <div className="lg:col-span-6 bg-[#FAF9F6] p-6 sm:p-8 flex flex-col justify-between">
              <div>
                {/* Header with Readiness Score */}
                <div className="flex items-center justify-between pb-4 border-b border-cream-300 mb-5">
                  <div>
                    <h3 className="font-bold text-base text-ink-900">
                      Generated BRD Artifact
                    </h3>
                    <p className="text-[11px] text-ink-500">
                      Auto-compiled from voice inputs
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      <div className="text-xs font-bold text-forest-800">
                        {readiness}% Complete
                      </div>
                      <div className="text-[10px] text-ink-500">
                        {readiness >= 90 ? 'Ready for dev handoff' : 'Gathering context'}
                      </div>
                    </div>
                    <div className="w-12 h-12 rounded-full border-4 border-cream-300 border-t-forest-600 flex items-center justify-center font-bold text-xs text-forest-800 bg-white">
                      {readiness}%
                    </div>
                  </div>
                </div>

                {/* Sub-tabs for BRD sections */}
                <div className="flex items-center gap-2 mb-4">
                  {[
                    { id: 'stories', label: 'User Stories & Scope' },
                    { id: 'nfr', label: 'NFRs & Compliance' },
                    { id: 'gaps', label: 'Open Gaps' },
                  ].map((tb) => (
                    <button
                      key={tb.id}
                      onClick={() => setActiveTab(tb.id)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-colors ${
                        activeTab === tb.id
                          ? 'bg-forest-800 text-white'
                          : 'bg-white text-ink-600 hover:bg-cream-200 border border-cream-300'
                      }`}
                    >
                      {tb.label}
                    </button>
                  ))}
                </div>

                {/* Content Panel */}
                <div className="bg-white rounded-2xl p-5 border border-cream-300 shadow-xs min-h-[220px]">
                  {activeTab === 'stories' && (
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
                        Epics & Functional Requirements
                      </div>
                      {activeData.stories.map((st, sIdx) => (
                        <div key={sIdx} className="flex items-start gap-2.5 text-xs text-ink-800">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                          <span className="leading-snug">{st}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'nfr' && (
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-ink-800 uppercase tracking-wider mb-2">
                        Non-Functional Requirements & SLAs
                      </div>
                      {activeData.nfr.map((nf, nIdx) => (
                        <div key={nIdx} className="flex items-start gap-2.5 text-xs text-ink-800">
                          <ShieldCheck className="w-4 h-4 text-forest-600 mt-0.5 shrink-0" />
                          <span className="leading-snug">{nf}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === 'gaps' && (
                    <div className="space-y-3">
                      <div className="text-xs font-bold text-purple-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-purple-600" />
                        <span>Active Socratic Gap Clarifications</span>
                      </div>
                      {activeData.openQuestions.map((oq, oIdx) => (
                        <div key={oIdx} className="p-3 bg-lilac-50 rounded-xl border border-purple-200 text-xs text-purple-950">
                          {oq}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

              </div>

              {/* Bottom Actions Row */}
              <div className="pt-4 flex items-center justify-between border-t border-cream-300 mt-4">
                <span className="text-[11px] text-ink-500">
                  Formatted in Agile Gherkin + IEEE 830
                </span>
                <button
                  onClick={() => onExportClick && onExportClick({
                    name: `BhashaBRD - ${activeData.lang} Spec`,
                    sections: {
                      objective: activeData.speech,
                      coreRequirements: activeData.stories,
                      openQuestions: activeData.openQuestions
                    }
                  })}
                  className="px-4 py-2 rounded-xl bg-forest-800 hover:bg-forest-900 text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Download Structured BRD</span>
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
