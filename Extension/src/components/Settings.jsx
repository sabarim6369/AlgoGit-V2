import { useState } from 'react'

const Settings = ({ user, onLogout }) => {
  const [notifications, setNotifications] = useState(true)
  const [darkMode, setDarkMode] = useState(true)
  const [autoSync, setAutoSync] = useState(true)

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 border border-white/20">
      <h2 className="text-xs font-bold text-white mb-2">Settings</h2>

      <div className="space-y-2">
        {/* Profile Section */}
        <div className="bg-white/5 rounded-lg p-1.5">
          <h3 className="font-semibold text-white text-xs mb-1.5">Profile</h3>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-xs">Display Name</span>
              <span className="text-white font-medium text-xs truncate max-w-[200px]">{user?.displayName}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-xs">Email</span>
              <span className="text-white font-medium text-xs truncate max-w-[200px]">{user?.email}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-300 text-xs">GitHub URL</span>
              <a
                href={user?.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 text-xs truncate max-w-[180px]"
              >
                {user?.githubUrl}
              </a>
            </div>
          </div>
        </div>

        {/* Preferences */}
        <div className="bg-white/5 rounded-lg p-1.5">
          <h3 className="font-semibold text-white text-xs mb-1.5">Preferences</h3>
          <div className="space-y-1.5">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-white text-xs">Notifications</span>
                <p className="text-xs text-gray-400 mt-0.5">Streak reminders</p>
              </div>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-7 h-3.5 rounded-full transition-colors ${
                  notifications ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <div className={`w-2.5 h-2.5 bg-white rounded-full transition-transform ${
                  notifications ? 'translate-x-3.5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-white text-xs">Dark Mode</span>
                <p className="text-xs text-gray-400 mt-0.5">Dark theme</p>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-7 h-3.5 rounded-full transition-colors ${
                  darkMode ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <div className={`w-2.5 h-2.5 bg-white rounded-full transition-transform ${
                  darkMode ? 'translate-x-3.5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>

            <div className="flex justify-between items-center">
              <div>
                <span className="text-white text-xs">Auto Sync</span>
                <p className="text-xs text-gray-400 mt-0.5">Auto sync progress</p>
              </div>
              <button
                onClick={() => setAutoSync(!autoSync)}
                className={`w-7 h-3.5 rounded-full transition-colors ${
                  autoSync ? 'bg-blue-500' : 'bg-gray-600'
                }`}
              >
                <div className={`w-2.5 h-2.5 bg-white rounded-full transition-transform ${
                  autoSync ? 'translate-x-3.5' : 'translate-x-0.5'
                }`} />
              </button>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-1.5">
          <h3 className="font-semibold text-red-400 text-xs mb-1">Danger Zone</h3>
          <button
            onClick={onLogout}
            className="w-full bg-red-500 hover:bg-red-600 text-white py-1.5 px-3 rounded-lg transition-colors text-xs"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings