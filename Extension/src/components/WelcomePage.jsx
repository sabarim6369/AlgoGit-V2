import { useState, useEffect } from 'react'

const WelcomePage = ({ onEnter }) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="w-full h-full flex flex-col p-5 relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-8 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-8 right-8 w-32 h-32 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-4 left-8 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content - Full Width */}
      <div className={`relative z-10 w-full flex-1 flex flex-col justify-center text-center transition-all duration-1000 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Logo/Icon */}
        <div className="mb-4">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg transform hover:scale-110 transition-transform duration-300">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-white mb-2">
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">AlgoGit</span> 🚀
        </h1>

        {/* Tagline */}
        <p className="text-sm text-gray-200 mb-5 leading-relaxed">
          Your personal DSA journal powered by GitHub and AI
        </p>

        {/* Features */}
        <div className="grid grid-cols-3 gap-2 mb-5">
          <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
            <div className="text-xl mb-1">📊</div>
            <div className="text-white font-semibold text-xs">Track Progress</div>
            <div className="text-gray-300 text-xs">Monitor your DSA journey</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
            <div className="text-xl mb-1">🔥</div>
            <div className="text-white font-semibold text-xs">Build Streaks</div>
            <div className="text-gray-300 text-xs">Stay consistent daily</div>
          </div>
          <div className="bg-white/10 rounded-lg p-2.5 backdrop-blur-sm">
            <div className="text-xl mb-1">🤖</div>
            <div className="text-white font-semibold text-xs">AI Powered</div>
            <div className="text-gray-300 text-xs">Smart insights & tips</div>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onEnter}
          className="group relative inline-flex items-center justify-center w-full px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 focus:ring-offset-gray-900 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
        >
          <span className="mr-2">Enter AlgoGit</span>
          <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </button>

        {/* Footer */}
        <div className="mt-4 text-gray-400 text-xs">
          <p>Crafted with ❤️ by <a href="https://github.com/sabarim6369" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">sabarim6369</a></p>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

export default WelcomePage