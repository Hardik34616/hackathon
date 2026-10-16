import React, { useState } from 'react'
import { 
  X, Mic, MicOff, Send, Sparkles, Target, 
  CheckCircle2, Download, RefreshCw, Volume2, Globe 
} from 'lucide-react'
import { INDIC_LANGUAGES } from '../data/mockData'

export default function InteractiveVoiceModal({ isOpen, onClose }) {
  const [selectedLanguage, setSelectedLanguage] = useState('Hindi (हिंदी)')
  const [sessionStep, setSessionStep] = useState(1) // 1, 2, 3
  const [isRecording, setIsRecording] = useState(false)
  const [userInput, setUserInput] = useState('')
  const [chatHistory, setChatHistory] = useState([
    {
      role: 'agent',
      text: 'नमस्ते! मैं BhashaBRD हूँ। आप किस प्रोजेक्ट या बिजनेस विचार पर काम कर रहे हैं? आप हिंदी, English, या अपनी भाषा में बोलकर या लिखकर बता सकते हैं।'
    }
  ])
  const [readiness, setReadiness] = useState(35)

  if (!isOpen) return null

  const handleSend = () => {
    if (!userInput.trim() && !isRecording) return

    const message = userInput.trim() || 'हम एक हाइपरलोकल सेवा शुरू कर रहे हैं।'
    const newHistory = [...chatHistory, { role: 'user', text: message }]
    setUserInput('')
    setChatHistory(newHistory)

    // Simulate smart agent response
    setTimeout(() => {
      if (sessionStep === 1) {
        setChatHistory([
          ...newHistory,
          {
            role: 'agent',
            text: 'शानदार विचार! इस ऐप के मुख्य यूज़र्स कौन होंगे? क्या इसमें कस्टमर ऐप के अलावा वेंडर या डिलीवरी पार्टनर के लिए भी अलग पोर्टल या ऐप की आवश्यकता है?'
          }
        ])
        setSessionStep(2)
        setReadiness(70)
      } else if (sessionStep === 2) {
        setChatHistory([
          ...newHistory,
          {
            role: 'agent',
            text: 'बहुत खूब। भुगतान (Payment) और सुरक्षा को लेकर क्या आवश्यकताएं हैं? क्या UPI ऑटो-पे और कैश ऑन डिलीवरी दोनों सपोर्ट करने हैं?'
          }
        ])
        setSessionStep(3)
        setReadiness(95)
      } else {
        setChatHistory([
          ...newHistory,
          {
            role: 'agent',
            text: 'सारे प्राथमिक विवरण एकत्र हो चुके हैं! आपका BRD 95% रेडी है और इंजीनियरिंग टीम के लिए तैयार है। आप नीचे दिए गए बटन से इसे डाउनलोड कर सकते हैं।'
          }
        ])
        setReadiness(98)
      }
    }, 800)
  }

  const simulateVoice = () => {
    setIsRecording(true)
    setTimeout(() => {
      setIsRecording(false)
      setUserInput('हम चाहते हैं कि ग्राहक आसानी से UPI से पे कर सकें और वेंडर को तुरंत नोटिफिकेशन जाए।')
    }, 2000)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-ink-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white rounded-3xl border border-cream-300 shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
        
        {/* Top Header */}
        <div className="px-6 py-4 bg-cream-100 border-b border-cream-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-forest-800 text-white flex items-center justify-center font-bold text-sm">
              B
            </div>
            <div>
              <h3 className="font-bold text-base text-ink-900 flex items-center gap-2">
                <span>Interactive Discovery Session</span>
                <span className="text-[10px] font-bold bg-forest-100 text-forest-800 px-2 py-0.5 rounded-full border border-forest-200">
                  Sarvam Indic Active
                </span>
              </h3>
              <p className="text-xs text-ink-500">
                Talk naturally • BhashaBRD extracts software architecture
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Readiness counter */}
            <div className="flex items-center gap-2 bg-white px-3 py-1 rounded-full border border-cream-300 text-xs font-semibold text-forest-800">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Readiness: {readiness}%</span>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-cream-200 hover:bg-cream-300 text-ink-700 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Interior: Split 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 flex-1 overflow-hidden">
          
          {/* Left: Chat & Voice dialogue (7 cols) */}
          <div className="md:col-span-7 p-5 flex flex-col justify-between border-b md:border-b-0 md:border-r border-cream-200 overflow-y-auto">
            {/* Chat message stream */}
            <div className="space-y-4 mb-4 overflow-y-auto max-h-[360px] pr-2">
              {chatHistory.map((msg, i) => (
                <div key={i} className={`flex items-start gap-2.5 ${msg.role === 'user' ? 'justify-end' : ''}`}>
                  {msg.role === 'agent' && (
                    <div className="w-7 h-7 rounded-full bg-forest-800 text-white flex items-center justify-center shrink-0 text-xs font-bold">
                      🤖
                    </div>
                  )}
                  <div className={`p-3.5 rounded-2xl text-xs sm:text-sm leading-relaxed max-w-[85%] ${
                    msg.role === 'user'
                      ? 'bg-ink-900 text-white rounded-tr-sm'
                      : 'bg-forest-50/80 text-forest-950 border border-forest-100 rounded-tl-sm'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-cream-300 text-ink-700 flex items-center justify-center shrink-0 text-xs font-semibold">
                      👤
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Input & Voice Controller */}
            <div className="pt-3 border-t border-cream-200">
              {/* Voice button row */}
              <div className="flex items-center gap-2 mb-2">
                <button
                  onClick={simulateVoice}
                  className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all ${
                    isRecording 
                      ? 'bg-rose-500 text-white animate-pulse' 
                      : 'bg-forest-100 text-forest-800 hover:bg-forest-200'
                  }`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>{isRecording ? 'Listening in Hindi...' : 'Tap to Speak (Hindi)'}</span>
                </button>
                <span className="text-[11px] text-ink-400">or type your answer below</span>
              </div>

              <div className="flex items-center gap-2 bg-cream-100 rounded-full p-1.5 border border-cream-300">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Type in Hindi, English, Hinglish..."
                  className="bg-transparent border-none text-xs sm:text-sm text-ink-900 focus:outline-none w-full px-3"
                />
                <button
                  onClick={handleSend}
                  className="w-8 h-8 rounded-full bg-forest-800 text-white hover:bg-forest-900 flex items-center justify-center shrink-0 transition-colors"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Compiled Spec (5 cols) */}
          <div className="md:col-span-5 bg-cream-50 p-5 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-cream-200 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-forest-800">
                  Live Compiled Spec
                </span>
                <span className="text-[10px] font-mono text-ink-500">
                  Auto-updated
                </span>
              </div>

              {/* Progress meter */}
              <div className="mb-4">
                <div className="w-full h-2 bg-cream-300 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-forest-600 rounded-full transition-all duration-500"
                    style={{ width: `${readiness}%` }}
                  />
                </div>
              </div>

              {/* Live Spec Modules */}
              <div className="space-y-3 text-xs">
                <div className="p-3 bg-white rounded-xl border border-cream-300">
                  <span className="font-bold text-ink-800 block mb-1 text-[11px] uppercase">
                    1. Functional Scope
                  </span>
                  <p className="text-ink-600 leading-snug">
                    Hyperlocal multi-tenant ordering platform with localized catalogue search and merchant settlement.
                  </p>
                </div>

                {sessionStep >= 2 && (
                  <div className="p-3 bg-white rounded-xl border border-cream-300 animate-in fade-in">
                    <span className="font-bold text-ink-800 block mb-1 text-[11px] uppercase">
                      2. User Personas & Modules
                    </span>
                    <ul className="space-y-1 text-ink-600 pl-4 list-disc">
                      <li>Customer Android/iOS App</li>
                      <li>Merchant Web POS Portal</li>
                      <li>Delivery Rider Tracking App</li>
                    </ul>
                  </div>
                )}

                {sessionStep >= 3 && (
                  <div className="p-3 bg-white rounded-xl border border-cream-300 animate-in fade-in">
                    <span className="font-bold text-ink-800 block mb-1 text-[11px] uppercase">
                      3. Payments & Compliance
                    </span>
                    <ul className="space-y-1 text-ink-600 pl-4 list-disc">
                      <li>UPI Auto-Pay via Razorpay / NPCI Intent</li>
                      <li>SMS & WhatsApp Cloud API notifications</li>
                      <li>DPDP Act compliant consent storage</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Download CTA */}
            <div className="pt-4 mt-4 border-t border-cream-200">
              <button
                onClick={() => {
                  alert('BRD Exported successfully! Check downloaded files or copy to clipboard.')
                  onClose()
                }}
                className="w-full py-2.5 rounded-full bg-forest-800 hover:bg-forest-900 text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Export Final BRD (Markdown / Jira)</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}
