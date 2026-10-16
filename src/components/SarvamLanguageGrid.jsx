import React, { useState } from 'react'
import { Globe, Volume2, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react'
import { INDIC_LANGUAGES } from '../data/mockData'

export default function SarvamLanguageGrid() {
  const [activeLang, setActiveLang] = useState('hi')

  const languageSamples = {
    hi: {
      native: 'हिंदी',
      phrase: 'हम टियर-2 शहरों के लिए डिलीवरी ऐप का आर्किटेक्चर डिज़ाइन करना चाहते हैं।',
      translation: 'We want to design the delivery app architecture for tier-2 cities.',
      useCase: 'AgriTech & Quick Commerce'
    },
    'en-IN': {
      native: 'Indian English',
      phrase: 'The checkout flow must support UPI auto-debit with SMS OTP fallback.',
      translation: 'The checkout flow must support UPI auto-debit with SMS OTP fallback.',
      useCase: 'FinTech & Payments'
    },
    ta: {
      native: 'தமிழ்',
      phrase: 'ஆட்டோ ஓட்டுநர்களுக்கான பேட்டரி மாற்றும் நிலையத்தை முன்பதிவு செய்யும் செயலி.',
      translation: 'Battery swap station booking application for auto rickshaw drivers.',
      useCase: 'EV Mobility & IoT'
    },
    te: {
      native: 'తెలుగు',
      phrase: 'రైతుల కోసం స్థానిక మార్కెట్ ధరలను రోజూ తెలియజేసే వాయిస్ అసిస్టెంట్.',
      translation: 'Voice assistant providing daily local market prices for farmers.',
      useCase: 'Rural Commerce'
    },
    bn: {
      native: 'বাংলা',
      phrase: 'স্থানীয় তাঁত শিল্পীদের পণ্য অনলাইনে বিক্রি করার সহজ ই-কমার্স প্ল্যাটফর্ম।',
      translation: 'Simple e-commerce platform for local handloom weavers to sell crafts.',
      useCase: 'Artisan D2C'
    },
    mr: {
      native: 'मराठी',
      phrase: 'दूध संकलन केंद्रासाठी स्वयंचलित बिलिंग आणि फॅट तपासणी सॉफ्टवेअर.',
      translation: 'Automated billing and fat measurement software for dairy collection centers.',
      useCase: 'Dairy Supply Chain'
    },
    gu: {
      native: 'ગુજરાતી',
      phrase: 'હીરાના વેપારીઓ માટે સુરક્ષિત ઈન્વેન્ટరీ અને પેમેન્ટ ટ્રેકિંગ સિસ્ટમ.',
      translation: 'Secure inventory and payment tracking system for diamond merchants.',
      useCase: 'B2B Wholesale'
    },
    kn: {
      native: 'ಕನ್ನಡ',
      phrase: 'ಬೆಂಗಳೂರಿನ ಅಪಾರ್ಟ್‌ಮೆಂಟ್‌ಗಳಿಗೆ ಕುಡಿಯುವ ನೀರಿನ ಟ್ಯಾಂಕರ್ ಬುಕಿಂಗ್ ಆ್ಯಪ್.',
      translation: 'Drinking water tanker booking app for Bangalore apartment communities.',
      useCase: 'Hyperlocal Utilities'
    },
    ml: {
      native: 'മലയാളം',
      phrase: 'തീരദേശ മത്സ്യത്തൊഴിലാളികൾക്കായി തത്സമയ കാലാവസ്ഥാ മുന്നറിയിപ്പ് പ്ലാറ്റ്ഫോം.',
      translation: 'Real-time weather alert and fish market auction platform for coastal fishermen.',
      useCase: 'Maritime Telematics'
    },
    pa: {
      native: 'ਪੰਜਾਬੀ',
      phrase: 'ਕਿਸਾਨਾਂ ਲਈ ਟਰੈਕਟਰ ਅਤੇ ਖੇਤੀਬਾੜੀ ਉਪਕਰਣ ਕਿਰਾਏ ਤੇ ਲੈਣ ਵਾਲਾ ਡਿਜੀਟਲ ਮੰਚ।',
      translation: 'Digital platform for farmers to rent tractors and modern farm implements.',
      useCase: 'Agri-Machinery'
    },
    or: {
      native: 'ଓଡ଼ିଆ',
      phrase: 'ସ୍ୱୟଂ ସହାୟକ ଗୋଷ୍ଠୀ (SHG) ମହିଳାମାନଙ୍କ ପାଇଁ ସରଳ ଡିଜିଟାଲ୍ ଖାତା ବହି।',
      translation: 'Simple digital ledger book for women self-help groups (SHGs).',
      useCase: 'Microfinance'
    }
  }

  const currentSample = languageSamples[activeLang] || languageSamples['hi']

  return (
    <section id="languages" className="py-20 md:py-28 bg-cream-100 border-b border-cream-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-100 border border-forest-200 text-xs font-bold text-forest-800 mb-3">
            <Globe className="w-3.5 h-3.5" />
            <span>POWERED BY SARVAM AI</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-ink-900 tracking-tight">
            Speak your dialect. We speak tech.
          </h2>
          <p className="text-ink-600 text-sm sm:text-base mt-4 max-w-2xl mx-auto">
            India builds in every language. BhashaBRD leverages Sarvam AI's Indic models to accurately parse regional vocabulary, domain slang, and code-switching without awkward translations.
          </p>
        </div>

        {/* Language Grid Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto mb-12">
          {INDIC_LANGUAGES.map((lang) => {
            const isSelected = activeLang === lang.code
            return (
              <button
                key={lang.code}
                onClick={() => setActiveLang(lang.code)}
                className={`px-4 py-2 rounded-2xl text-xs sm:text-sm transition-all duration-200 flex items-center gap-2 ${
                  isSelected
                    ? 'bg-forest-800 text-white shadow-md ring-2 ring-forest-600/30 font-bold scale-105'
                    : 'bg-white text-ink-700 hover:bg-cream-200 border border-cream-300'
                }`}
              >
                <span className="font-serif text-sm font-semibold">{lang.nativeName}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                  isSelected ? 'bg-forest-700 text-forest-100' : 'bg-cream-200 text-ink-500'
                }`}>
                  {lang.name}
                </span>
              </button>
            )
          })}
        </div>

        {/* Selected Language Spotlight Card */}
        <div className="bg-white rounded-3xl border border-cream-300 p-6 sm:p-8 shadow-sm max-w-3xl mx-auto">
          <div className="flex items-center justify-between pb-4 border-b border-cream-200 mb-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-forest-100 text-forest-800 flex items-center justify-center font-serif font-bold text-lg">
                {currentSample.native.charAt(0)}
              </div>
              <div>
                <h3 className="font-bold text-base text-ink-900">
                  {currentSample.native} ({INDIC_LANGUAGES.find(l => l.code === activeLang)?.name})
                </h3>
                <span className="text-[11px] text-forest-700 font-semibold">
                  Common Domain: {currentSample.useCase}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-xs font-mono text-ink-500">Sarvam Indic Engine</span>
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            </div>
          </div>

          {/* Spoken Quote Box */}
          <div className="p-5 rounded-2xl bg-cream-50 border border-cream-300 mb-4">
            <div className="flex items-center gap-2 text-xs font-bold text-forest-800 mb-2">
              <Volume2 className="w-4 h-4 text-forest-700" />
              <span>Spoken Input (Audio Sample):</span>
            </div>
            <p className="text-base sm:text-lg font-serif italic text-ink-900 mb-2">
              "{currentSample.phrase}"
            </p>
            <p className="text-xs text-ink-500 border-t border-cream-200 pt-2 font-mono">
              English Intent: {currentSample.translation}
            </p>
          </div>

          {/* Generated Tech Architecture spec pill */}
          <div className="p-4 rounded-xl bg-forest-50 border border-forest-200 flex items-center justify-between text-xs text-forest-900">
            <span className="flex items-center gap-2 font-medium">
              <CheckCircle2 className="w-4 h-4 text-forest-700 shrink-0" />
              <span>Directly maps to Jira stories, database schemas, and microservice definitions.</span>
            </span>
            <span className="font-bold text-forest-800 shrink-0 hidden sm:inline">99.2% Accuracy</span>
          </div>

        </div>

      </div>
    </section>
  )
}
