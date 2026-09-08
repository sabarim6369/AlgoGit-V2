import { useState, useEffect } from 'react'
import WelcomePage from './components/WelcomePage'
import SetupPage from './components/SetupPage'
import Dashboard from './components/Dashboard'
import './App.css'

function App() {
  const [currentPage, setCurrentPage] = useState('welcome')
  const [user, setUser] = useState(null)
  const [problemStats, setProblemStats] = useState(null)
  const [streakData, setStreakData] = useState(null)
  const [selectedPlatform, setSelectedPlatform] = useState('All Platforms')

  useEffect(() => {
    // Check for existing user session in localStorage
    const savedUser = localStorage.getItem('algogit_user')
    if (savedUser) {
      setUser(JSON.parse(savedUser))
      setCurrentPage('dashboard')
    }
  }, [])

  const handleUserSetup = (userData) => {
    setUser(userData)
    localStorage.setItem('algogit_user', JSON.stringify(userData))
    setCurrentPage('dashboard')
  }

  const handleLogout = () => {
    setUser(null)
    setProblemStats(null)
    setStreakData(null)
    localStorage.removeItem('algogit_user')
    setCurrentPage('welcome')
  }

  const updateProblemStats = (stats) => {
    setProblemStats(stats)
  }

  const updateStreakData = (streak) => {
    setStreakData(streak)
  }

  return (
    <div className="w-full h-full min-h-0 flex flex-col overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {currentPage === 'welcome' && (
        <WelcomePage onEnter={() => setCurrentPage('setup')} />
      )}
      {currentPage === 'setup' && (
        <SetupPage
          onSetup={handleUserSetup}
          onBack={() => setCurrentPage('welcome')}
        />
      )}
      {currentPage === 'dashboard' && user && (
        <Dashboard 
          user={user}
          problemStats={problemStats}
          streakData={streakData}
          selectedPlatform={selectedPlatform}
          onPlatformChange={setSelectedPlatform}
          onLogout={handleLogout}
          updateProblemStats={updateProblemStats}
          updateStreakData={updateStreakData}
        />
      )}
    </div>
  )
}

export default App
