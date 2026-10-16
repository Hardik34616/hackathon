export const SCENARIOS = [
  {
    id: 'pharmacy',
    name: 'Pharmacy Delivery Platform',
    badge: 'Healthcare & Quick-Commerce',
    readiness: 82,
    language: 'English',
    userMessage: 'I want to build an app for local pharmacies where customers can search medicines and get them delivered at home.',
    agentResponse: "Great! That's a valuable idea. Who will use the app most often? Is it mainly for customers, pharmacy owners, or both?",
    nextUserMessage: 'Both. Customers need to upload doctor prescriptions, while pharmacists need an inventory manager to confirm stock.',
    nextAgentResponse: 'Got it. For prescription verification, will a licensed pharmacist manually sign off, or do you need automated OCR validation with audit logs?',
    sections: {
      objective: 'Build a hyper-local pharmaceutical delivery ecosystem connecting neighborhood licensed chemists with patients, enabling compliant prescription fulfillment and 45-minute delivery.',
      coreRequirements: [
        'Patient Mobile App (iOS/Android): Prescription upload via camera/PDF & salt-based generic alternative search.',
        'Pharmacist Web Dashboard: Live inventory sync with local POS, barcode scanning, and digital Rx sign-off.',
        'Delivery Partner App: Temperature-sensitive package verification & route optimization.',
        'Regulatory Compliance: Schedule H & H1 drug sale audit logging in compliance with Indian CDSCO norms.',
        'Payment Engine: UPI intent flow (Google Pay, PhonePe, Paytm), COD with OTP verification on delivery.'
      ],
      openQuestions: [
        'What is the maximum turnaround SLA for pharmacist prescription sign-off before order auto-cancels?',
        'How should cold-chain storage validation (e.g., insulin between 2°C–8°C) be tracked during transit?',
        'Will chronic illness patients have auto-refill subscriptions enabled on a 30-day recurring cycle?'
      ]
    }
  },
  {
    id: 'edtech',
    name: 'Vernacular Learning Hub',
    badge: 'Tier 2/3 Education',
    readiness: 89,
    language: 'Hindi (हिंदी)',
    userMessage: 'Hum Tier-2 aur Tier-3 students ke liye video course app banana chahte hain jo low internet speed pe bhi smooth chale aur voice se doubt solve kare.',
    agentResponse: 'बहुत बढ़िया विज़न है! क्या कोर्सेस पहले से रिकॉर्डेड (Pre-recorded) होंगे या लाइव क्लासेस भी शामिल होंगी? और ऑफलाइन डाउनलोड का क्या मॉडल रहेगा?',
    nextUserMessage: 'Offline downloads mandatory hain encrypted format mein. Aur doubts ke liye voice note option chahiye Hindi mein.',
    nextAgentResponse: 'बिलकुल सही। क्या छात्रों के डाउट्स का जवाब AI ट्यूटर पहले देगा, या सीधे विषय के शिक्षक (Human Mentors) को रूट किया जाएगा?',
    sections: {
      objective: 'भारत के छोटे शहरों और ग्रामीण क्षेत्रों के छात्रों के लिए कम बैंडविड्थ पर चलने वाला बहुभाषी एडटेक प्लेटफॉर्म तैयार करना।',
      coreRequirements: [
        'Adaptive Bitrate Video Player: 2G/3G नेटवर्क पर बफर-फ्री स्ट्रीमिंग और 24-घंटे एक्सपायरी एनक्रिप्टेड ऑफलाइन डाउनलोड।',
        'Sarvam AI Voice Doubt Solver: छात्र हिंदी और स्थानीय भाषाओं में बोलकर सवाल पूछ सकते हैं।',
        'Gamified Practice Quizzes: दैनिक स्ट्रीक्स, लीडरबोर्ड और बिना इंटरनेट के चलने वाले मॉक टेस्ट।',
        'Micro-transactions: ₹99 से शुरू होने वाले सब्जेक्ट मॉड्यूल्स के लिए UPI ऑटो-पे इंटीग्रेशन।'
      ],
      openQuestions: [
        'ऑडियो डाउट्स की समीक्षा के लिए क्या टीचर ऑडिट डैशबोर्ड की आवश्यकता है?',
        'क्या कम मेमोरी वाले सस्ते एंड्रॉइड फोन के लिए लाइटवेट (PWA / APK < 15MB) की सीमा रखनी है?'
      ]
    }
  },
  {
    id: 'vyapar',
    name: 'Voice POS & Udhar Khata',
    badge: 'MSME & Retail',
    readiness: 94,
    language: 'Hinglish',
    userMessage: 'Chhote dukaandaaron ke liye ek simple voice billing banani hai jisme bolte hi item add ho jaye aur WhatsApp par receipt chali jaye.',
    agentResponse: 'Shandar! Dukaandaar counter par bheed ke waqt use karenge. Kya voice recognition mein local dialect words (jaise "aadha kilo daal", "ek packet surf") support hone chahiye?',
    nextUserMessage: 'Haan bilkul! Aur udhaar khata bhi link ho, taaki customer ka naam bolte hi purana hisaab screen par dikh jaye.',
    nextAgentResponse: 'Noted! Jab WhatsApp par bill jayega, kya usme UPI payment link bhi include karna hai taaki grahak seedhe ghar baithe pay kar sake?',
    sections: {
      objective: 'Kirana and neighborhood store billing assistant that replaces typing with rapid multilingual voice commands and automated customer ledger tracking.',
      coreRequirements: [
        'Voice Command Engine: Real-time item dictation (quantities, units, colloquial terms) with Sarvam Indic STT.',
        'Smart Udhar Khata: Automatic ledger balancing with payment due reminders dispatched via WhatsApp Cloud API.',
        'Thermal Printer & Screen Support: Bluetooth 58mm POS printer connection and large accessible touch typography.',
        'Offline First Sync: Complete local SQLite database that syncs when cellular connectivity is restored.'
      ],
      openQuestions: [
        'Should GST invoices be generated automatically for B2B transactions over ₹5,000?',
        'Do store owners want a daily soundbox summary voice notification at store closing time?'
      ]
    }
  },
  {
    id: 'evmobility',
    name: 'Auto-Rickshaw Battery Swap Mesh',
    badge: 'Clean Energy & IoT',
    readiness: 76,
    language: 'Tamil (தமிழ்)',
    userMessage: 'மின்சார ஆட்டோக்களுக்கான பேட்டரி மாற்றும் நிலையங்களை கண்டுபிடித்து முன்பதிவு செய்யும் தளம் வேண்டும்.',
    agentResponse: 'அற்புதமான திட்டம்! ஓட்டுநர்கள் பேட்டரி அளவை முன்கூட்டியே பார்ப்பதற்கு IoT ஒருங்கிணைப்பு (Telemetry integration) திட்டமிட்டுள்ளீர்களா?',
    nextUserMessage: 'ஆம், பேட்டரி 20% கீழே இறங்கினால் தானாகவே அருகிலுள்ள நிலையத்திற்கு வழிகாட்ட வேண்டும்.',
    nextAgentResponse: 'சிறப்பு. கட்டண முறை எப்படி இருக்கும்? ஒவ்வொரு மாற்றத்திற்கும் பணமா அல்லது மாதாந்திர சந்தா முறையா (Subscription)?',
    sections: {
      objective: 'Decentralized smart battery swap reservation system for commercial three-wheeler EV drivers to eliminate range anxiety.',
      coreRequirements: [
        'Driver Companion App in Tamil, Kannada, Hindi: One-tap reservation of charged battery packs with 15-minute lock.',
        'Station IoT Controller: Cloud communication for battery state of charge (SoC), temperature, and cycle count.',
        'Driver Wallet & Pay-Per-Swap: Instant QR code scan at kiosk to unlock charged battery bay.',
        'Fleet Management Portal: Battery degradation telemetry, salvage alerts, and station power grid load balancing.'
      ],
      openQuestions: [
        'How will kiosk bays authenticate when offline due to cellular network dips in basement stations?',
        'What penalty or auto-release applies if an auto driver fails to arrive within the 15-minute reservation window?'
      ]
    }
  }
];

export const INDIC_LANGUAGES = [
  { code: 'hi', name: 'Hindi', script: 'हिंदी', nativeName: 'हिंदी', speakers: '600M+' },
  { code: 'en-IN', name: 'Indian English', script: 'English', nativeName: 'Indian English', speakers: '200M+' },
  { code: 'ta', name: 'Tamil', script: 'தமிழ்', nativeName: 'தமிழ்', speakers: '85M+' },
  { code: 'te', name: 'Telugu', script: 'తెలుగు', nativeName: 'తెలుగు', speakers: '90M+' },
  { code: 'bn', name: 'Bengali', script: 'বাংলা', nativeName: 'বাংলা', speakers: '100M+' },
  { code: 'mr', name: 'Marathi', script: 'मराठी', nativeName: 'मराठी', speakers: '83M+' },
  { code: 'gu', name: 'Gujarati', script: 'ગુજરાતી', nativeName: 'ગુજરાતી', speakers: '55M+' },
  { code: 'kn', name: 'Kannada', script: 'ಕನ್ನಡ', nativeName: 'ಕನ್ನಡ', speakers: '45M+' },
  { code: 'ml', name: 'Malayalam', script: 'മലയാളം', nativeName: 'മലയാളം', speakers: '38M+' },
  { code: 'pa', name: 'Punjabi', script: 'ਪੰਜਾਬੀ', nativeName: 'ਪੰਜਾਬੀ', speakers: '33M+' },
  { code: 'or', name: 'Odia', script: 'ଓଡ଼ିଆ', nativeName: 'ଓଡ଼ିଆ', speakers: '35M+' },
];

export const COMPARISON_DATA = [
  {
    feature: 'Requirement Gathering Style',
    traditional: '40-page questionnaire or tedious 2-hour meetings',
    chatgpt: 'Single prompt dump; outputs generic hallucinations',
    bhasha: 'Socratic dialogue; active interviewer discovering unseen gaps'
  },
  {
    feature: 'Voice & Language Support',
    traditional: 'English-only written memos',
    chatgpt: 'Stilted robotic translations, misses Hinglish slang',
    bhasha: 'Sarvam AI Indic-first voice engine (10+ Indian languages + Hinglish)'
  },
  {
    feature: 'Ambiguity & Gap Detection',
    traditional: 'Discovered weeks later during engineering sprints',
    chatgpt: 'None; assumes whatever is missing does not matter',
    bhasha: 'Real-time Readiness Score & highlighted missing questions'
  },
  {
    feature: 'Live Document Evolution',
    traditional: 'Static Word / Google Docs with conflicting versions',
    chatgpt: 'You have to re-prompt and copy-paste entire blocks',
    bhasha: 'Live side-by-side BRD preview updated sentence-by-sentence'
  },
  {
    feature: 'Developer Hand-off',
    traditional: 'Days spent translating notes into Jira tickets',
    chatgpt: 'Unstructured prose lacking technical acceptance criteria',
    bhasha: '1-click export to Jira User Stories, Notion, Confluence, and PDF'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Our founder speaks fluent Gujarati and knows our dairy supply chain inside-out, but hated typing long PRDs in English. With BhashaBRD, he talked for 12 minutes in Gujarati and had a 14-page structured BRD ready for our tech team in Bangalore.",
    author: "Ketan Patel",
    role: "Co-Founder & CTO",
    company: "DoodhDhara Logistics",
    avatar: "KP"
  },
  {
    quote: "Standard LLMs generate fluff when you ask for a BRD. BhashaBRD actually challenged our assumptions! It asked 'What happens if the driver's phone is switched off during OTP handover?' That saved us three sprint cycles.",
    author: "Shreya Mukherjee",
    role: "Lead Product Manager",
    company: "FinFlow Bharat",
    avatar: "SM"
  },
  {
    quote: "The live readiness meter is addictive. You watch your document jump from 40% to 85% as BhashaBRD clarifies your authentication, edge cases, and compliance requirements. It's like having a McKinsey analyst on speed dial.",
    author: "Rohan Deshmukh",
    role: "Product Architect",
    company: "Zentech Mobility",
    avatar: "RD"
  }
];

export const FAQS = [
  {
    q: "How does BhashaBRD capture technical requirements from non-technical speech?",
    a: "BhashaBRD's Socratic Business Analyst model is trained on thousands of enterprise PRDs, engineering RFCs, and IEEE software specifications. It listens to colloquial language, extracts business intent, and maps it to formal software architecture components, functional requirements, user stories, and acceptance criteria."
  },
  {
    q: "Which Indian languages are supported?",
    a: "Powered by Sarvam AI's speech-to-text models, BhashaBRD natively supports Hindi, Tamil, Telugu, Kannada, Bengali, Marathi, Gujarati, Malayalam, Odia, Punjabi, Indian English, and natural code-switching (Hinglish, Tanglish, etc.)."
  },
  {
    q: "What makes it different from using ChatGPT or Claude directly?",
    a: "Generic LLMs are passive: you give a prompt, they output static text without knowing what you forgot to mention. BhashaBRD is an active conversational interviewer: it detects missing edge cases, security constraints, and compliance gaps, prompting you with precise follow-up questions while updating your BRD live on screen."
  },
  {
    q: "Can I export the BRD to my team's tools like Jira or Notion?",
    a: "Yes! BhashaBRD provides one-click export into Jira User Stories (with acceptance criteria formatted in Gherkin Given-When-Then), Notion workspaces, Confluence pages, markdown files, and executive-ready PDFs."
  },
  {
    q: "Is our proprietary company data and voice conversation secure?",
    a: "Enterprise-grade security is built into our core. Audio streams are processed ephemerally with zero data retention for training, encrypted in transit (TLS 1.3) and at rest (AES-256), fully compliant with DPDP Act (India) guidelines."
  }
];
