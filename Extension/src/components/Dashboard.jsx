import { useState, useEffect } from 'react'
import Achievements from './Achievements'
import Settings from './Settings'

const Dashboard = ({ user, problemStats, streakData, selectedPlatform, onPlatformChange, onLogout, updateProblemStats, updateStreakData }) => {
  const [mounted, setMounted] = useState(false)
  const [showUrlEdit, setShowUrlEdit] = useState(false)
  const [editUrl, setEditUrl] = useState(user?.githubUrl || '')
  const [isLoading, setIsLoading] = useState(false)
  const [activeTab, setActiveTab] = useState('overview')

  useEffect(() => {
    setMounted(true)
    // Load mock data for demonstration
    loadMockData()
  }, [])

  const loadMockData = () => {
    // Mock problem statistics
    const mockStats = {
      leetcodecount: 45,
      leetcodeEasy: 20,
      leetcodeMedium: 18,
      leetcodeHard: 7,
      gfgcount: 32,
      gfgEasy: 15,
      gfgMedium: 12,
      gfgHard: 5,
      codechefcount: 28,
      codechefEasy: 12,
      codechefMedium: 10,
      codechefHard: 6,
      hackerrankcount: 25,
      hackerrankEasy: 14,
      hackerrankMedium: 8,
      hackerrankHard: 3
    }
    updateProblemStats(mockStats)

    // Mock streak data
    const mockStreak = {
      currentStreak: 12,
      longestStreak: 28,
      monday: true,
      tuesday: true,
      wednesday: true,
      thursday: false,
      friday: true,
      saturday: true,
      sunday: false
    }
    updateStreakData(mockStreak)
  }

  const getFilteredStats = () => {
    if (!problemStats) return { total: 0, easy: 0, medium: 0, hard: 0 }

    switch (selectedPlatform.toLowerCase()) {
      case 'leetcode':
        return {
          total: problemStats.leetcodecount || 0,
          easy: problemStats.leetcodeEasy || 0,
          medium: problemStats.leetcodeMedium || 0,
          hard: problemStats.leetcodeHard || 0
        }
      case 'geeksforgeeks':
        return {
          total: problemStats.gfgcount || 0,
          easy: problemStats.gfgEasy || 0,
          medium: problemStats.gfgMedium || 0,
          hard: problemStats.gfgHard || 0
        }
      case 'codeforces':
      case 'codechef':
        return {
          total: problemStats.codechefcount || 0,
          easy: problemStats.codechefEasy || 0,
          medium: problemStats.codechefMedium || 0,
          hard: problemStats.codechefHard || 0
        }
      case 'hackerrank':
        return {
          total: problemStats.hackerrankcount || 0,
          easy: problemStats.hackerrankEasy || 0,
          medium: problemStats.hackerrankMedium || 0,
          hard: problemStats.hackerrankHard || 0
        }
      default:
        return {
          total: (problemStats.leetcodecount || 0) + (problemStats.gfgcount || 0) + (problemStats.codechefcount || 0) + (problemStats.hackerrankcount || 0),
          easy: (problemStats.leetcodeEasy || 0) + (problemStats.gfgEasy || 0) + (problemStats.codechefEasy || 0) + (problemStats.hackerrankEasy || 0),
          medium: (problemStats.leetcodeMedium || 0) + (problemStats.gfgMedium || 0) + (problemStats.codechefMedium || 0) + (problemStats.hackerrankMedium || 0),
          hard: (problemStats.leetcodeHard || 0) + (problemStats.gfgHard || 0) + (problemStats.codechefHard || 0) + (problemStats.hackerrankHard || 0)
        }
    }
  }

  const stats = getFilteredStats()

  const handleUrlUpdate = () => {
    setIsLoading(true)
    // Simulate API call
    setTimeout(() => {
      setShowUrlEdit(false)
      setIsLoading(false)
      // In real app, this would update the user's GitHub URL
    }, 1000)
  }

  const getStreakColor = (day) => {
    if (!streakData) return 'bg-gray-700 text-gray-400'
    return streakData[day] ? 'bg-green-500 text-white' : 'bg-gray-700 text-gray-400'
  }

  return (
    <div className="w-full h-full flex flex-col overflow-hidden">
      <div className={`w-full flex-1 flex flex-col p-4 overflow-y-auto transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Header */}
        <div className="flex justify-between items-center mb-4 gap-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="min-w-0">
              <h1 className="text-base font-bold text-white truncate">{user?.displayName || 'AlgoGit User'}</h1>
              <p className="text-gray-400 text-xs truncate">{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            {/* Platform Filter */}
            <select
              value={selectedPlatform}
              onChange={(e) => onPlatformChange(e.target.value)}
              className="bg-white/10 border border-white/20 rounded-lg px-2 py-1 text-white text-xs focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
            >
              <option value="All Platforms">All</option>
              <option value="LeetCode">LeetCode</option>
              <option value="Codeforces">Codeforces</option>
              <option value="GeeksforGeeks">GFG</option>
              <option value="CodeChef">CodeChef</option>
              <option value="HackerRank">HackerRank</option>
            </select>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="p-1 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Logout"
            >
              <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Stats Grid - Optimized for compact layout */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          {/* Total Problems */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg p-2.5 text-white shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-blue-100 text-xs">Total</span>
              <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
            </div>
            <div className="text-xl font-bold">{stats.total}</div>
            <div className="text-blue-100 text-xs">solved</div>
          </div>

          {/* Easy Problems */}
          <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-lg p-2.5 text-white shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-green-100 text-xs">Easy</span>
              <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <div className="text-xl font-bold">{stats.easy}</div>
            <div className="text-green-100 text-xs">problems</div>
          </div>

          {/* Medium Problems */}
          <div className="bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg p-2.5 text-white shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-yellow-100 text-xs">Medium</span>
              <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="text-xl font-bold">{stats.medium}</div>
            <div className="text-yellow-100 text-xs">problems</div>
          </div>

          {/* Hard Problems */}
          <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-2.5 text-white shadow-lg">
            <div className="flex items-center justify-between mb-1">
              <span className="text-red-100 text-xs">Hard</span>
              <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
                <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
            <div className="text-xl font-bold">{stats.hard}</div>
            <div className="text-red-100 text-xs">problems</div>
          </div>
        </div>

        {/* Streak Section - Horizontal layout */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 mb-4 border border-white/20">
          <div className="flex items-center justify-between">
            {/* Current Streak */}
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-2 text-white">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🔥</span>
                  <div>
                    <div className="text-xs text-orange-100">Current</div>
                    <div className="text-lg font-bold">{streakData?.currentStreak || 0}</div>
                  </div>
                </div>
              </div>

              {/* Longest Streak */}
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg p-2 text-white">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm">🏆</span>
                  <div>
                    <div className="text-xs text-purple-100">Longest</div>
                    <div className="text-lg font-bold">{streakData?.longestStreak || 0}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Weekly Progress */}
            <div className="flex gap-1">
              {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                <div
                  key={day}
                  className={`w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs transition-all hover:scale-110 cursor-pointer ${getStreakColor(day)}`}
                  title={day.charAt(0).toUpperCase() + day.slice(1)}
                >
                  {day.charAt(0).toUpperCase()}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress Overview - Compact */}
        <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 mb-4 border border-white/20">
          <h2 className="text-xs font-bold text-white mb-2">Progress Overview</h2>
          
          <div className="space-y-1.5">
            {/* Progress Bars */}
            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-300">Easy</span>
                <span className="text-green-400 font-semibold">{stats.easy}/50</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((stats.easy / 50) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-300">Medium</span>
                <span className="text-yellow-400 font-semibold">{stats.medium}/50</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((stats.medium / 50) * 100, 100)}%` }}
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between text-xs mb-0.5">
                <span className="text-gray-300">Hard</span>
                <span className="text-red-400 font-semibold">{stats.hard}/30</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full transition-all duration-1000"
                  style={{ width: `${Math.min((stats.hard / 30) * 100, 100)}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-3 bg-white/5 p-1 rounded-lg">
          {['overview', 'achievements', 'settings'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-1.5 px-2 rounded-md font-medium text-xs transition-all ${
                activeTab === tab
                  ? 'bg-blue-500 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <>
            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-2 mb-3">
              <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white p-2 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="text-xs">Log Problem</span>
              </button>
              
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white p-2 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-1">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <span className="text-xs">Analytics</span>
              </button>
              
              <button 
                onClick={() => setShowUrlEdit(true)}
                className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white p-2 rounded-lg transition-all transform hover:scale-105 flex flex-col items-center justify-center gap-1"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs">Settings</span>
              </button>
            </div>
          </>
        )}

        {activeTab === 'achievements' && (
          <Achievements />
        )}

        {activeTab === 'settings' && (
          <Settings user={user} onLogout={onLogout} />
        )}

        {/* Footer */}
        <div className="text-center text-gray-400 text-xs mt-auto pt-2">
          <p>🛠️ Need Help? <a href="#" className="text-blue-400 hover:text-blue-300">Report a bug</a></p>
          <p className="mt-0.5">Crafted with ❤️ by <a href="https://github.com/sabarim6369" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300">sabarim6369</a></p>
        </div>
      </div>

      {/* URL Edit Modal */}
      {showUrlEdit && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-lg p-4 w-full max-w-xs border border-white/20">
            <h3 className="text-sm font-bold text-white mb-2">Update GitHub URL</h3>
            <input
              type="url"
              value={editUrl}
              onChange={(e) => setEditUrl(e.target.value)}
              placeholder="https://github.com/username/repo.git"
              className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 mb-2 text-xs"
            />
            <div className="flex gap-2">
              <button
                onClick={() => setShowUrlEdit(false)}
                className="flex-1 px-3 py-1.5 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors text-xs"
              >
                Cancel
              </button>
              <button
                onClick={handleUrlUpdate}
                disabled={isLoading}
                className="flex-1 px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50 text-xs"
              >
                {isLoading ? 'Updating...' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard