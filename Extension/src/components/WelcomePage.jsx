import { useState, useEffect } from 'react'

const WelcomePage = ({ onEnter }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="popup-page relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-6 left-3 w-28 h-28 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob" />
        <div className="absolute top-6 right-3 w-28 h-28 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute bottom-12 left-3 w-28 h-28 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Full-height content distributed across viewport */}
      <div
        className={`relative z-10 flex h-full min-h-0 flex-col justify-between text-center transition-all duration-700 ${
          mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}
      >
        {/* Top: logo + headline */}
        <div className="flex flex-col items-center shrink-0">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg mb-3">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-white leading-tight">
            Welcome to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              AlgoGit
            </span>{' '}
            🚀
          </h1>

          <p className="text-sm text-gray-200 mt-2 leading-snug px-2">
            Your personal DSA journal powered by GitHub and AI
          </p>
        </div>

        {/* Middle: feature cards */}
        <div className="grid grid-cols-3 gap-2 w-full shrink-0">
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm flex flex-col items-center">
            <div className="text-lg mb-0.5">📊</div>
            <div className="text-white font-semibold text-xs leading-tight">Track Progress</div>
            <div className="text-gray-300 text-[10px] leading-tight mt-0.5">Monitor your DSA journey</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm flex flex-col items-center">
            <div className="text-lg mb-0.5">🔥</div>
            <div className="text-white font-semibold text-xs leading-tight">Build Streaks</div>
            <div className="text-gray-300 text-[10px] leading-tight mt-0.5">Stay consistent daily</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2 backdrop-blur-sm flex flex-col items-center">
            <div className="text-lg mb-0.5">🤖</div>
            <div className="text-white font-semibold text-xs leading-tight">AI Powered</div>
            <div className="text-gray-300 text-[10px] leading-tight mt-0.5">Smart insights & tips</div>
          </div>
        </div>

        {/* Bottom: CTA + footer */}
        <div className="flex flex-col gap-3 shrink-0">
          <button
            onClick={onEnter}
            className="group flex items-center justify-center w-full px-5 py-3 text-sm font-bold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 shadow-lg hover:shadow-xl transition-all duration-200"
          >
            <span className="mr-2">Enter AlgoGit</span>
            <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <p className="text-gray-400 text-xs">
            Crafted with ❤️ by{' '}
            <a
              href="https://github.com/sabarim6369"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              sabarim6369
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default WelcomePage
