import React, { useState, useEffect } from 'react'
import { Sparkles, Menu, X, ArrowRight, Globe, Mic } from 'lucide-react'

export default function Navbar({ onOpenDemo }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'glass-nav shadow-sm py-3' 
        : 'bg-cream-100/90 backdrop-blur-md py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-xl bg-forest-800 text-white flex items-center justify-center shadow-md shadow-forest-800/10 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                <path d="M19 2H5C3.89543 2 3 2.89543 3 4V16C3 17.1046 3.89543 18 5 18H8V21L12 18H19C20.1046 18 21 17.1046 21 16V4C21 2.89543 20.1046 2 19 2ZM8 14H6V12H8V14ZM8 10H6V8H8V10ZM13 14H10V12H13V14ZM13 10H10V8H13V10ZM18 14H15V12H18V14ZM18 10H15V8H18V10Z" />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl tracking-tight text-ink-900 flex items-center gap-1.5">
                Bhasha<span className="text-forest-700">BRD</span>
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-ink-700">
            <a href="#how-it-works" className="hover:text-forest-800 transition-colors">How it works</a>
            <a href="#features" className="hover:text-forest-800 transition-colors">Features</a>
            <a href="#demo" className="hover:text-forest-800 transition-colors flex items-center gap-1.5 text-forest-700 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Live Demo
            </a>
            <a href="#languages" className="hover:text-forest-800 transition-colors flex items-center gap-1">
              <Globe className="w-3.5 h-3.5 text-forest-600" />
              Indic Voice
            </a>
            <a href="#comparison" className="hover:text-forest-800 transition-colors">Why BhashaBRD</a>
            <a href="#pricing" className="hover:text-forest-800 transition-colors">Pricing</a>
          </nav>

          {/* CTA Group */}
          <div className="hidden sm:flex items-center space-x-4">
            <button 
              onClick={onOpenDemo}
              className="text-sm font-semibold text-ink-700 hover:text-forest-800 px-3 py-2 transition-colors"
            >
              Sign in
            </button>
            <button
              onClick={onOpenDemo}
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-ink-900 text-white text-sm font-semibold shadow-md hover:bg-forest-800 active:scale-95 transition-all duration-200"
            >
              <span>Start building free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-700 hover:text-ink-900 hover:bg-cream-200 focus:outline-none"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-cream-300 px-4 pt-3 pb-6 space-y-3 mt-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-cream-200 rounded-lg"
          >
            How it works
          </a>
          <a
            href="#features"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-cream-200 rounded-lg"
          >
            Features
          </a>
          <a
            href="#demo"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-forest-700 font-semibold hover:bg-forest-50 rounded-lg flex items-center justify-between"
          >
            <span>Live Interactive Demo</span>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          </a>
          <a
            href="#languages"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-cream-200 rounded-lg"
          >
            Indic Languages (Sarvam AI)
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-base font-medium text-ink-800 hover:bg-cream-200 rounded-lg"
          >
            Pricing
          </a>
          <div className="pt-4 border-t border-cream-300 flex flex-col gap-2">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenDemo(); }}
              className="w-full text-center py-2.5 rounded-full bg-ink-900 text-white font-semibold text-sm hover:bg-forest-800 transition-colors flex items-center justify-center gap-2"
            >
              <span>Start building free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  )
}
