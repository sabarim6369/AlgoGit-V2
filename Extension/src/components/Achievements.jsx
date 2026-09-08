const Achievements = () => {
  const achievements = [
    { id: 1, title: 'First Steps', description: 'Solved your first problem', icon: '🎯', unlocked: true, progress: 100 },
    { id: 2, title: 'Streak Master', description: 'Maintain a 7-day streak', icon: '🔥', unlocked: true, progress: 100 },
    { id: 3, title: 'Century Club', description: 'Solve 100 problems', icon: '💯', unlocked: false, progress: 65 },
    { id: 4, title: 'Hard Worker', description: 'Solve 10 hard problems', icon: '💪', unlocked: true, progress: 100 },
    { id: 5, title: 'Speed Demon', description: 'Solve 5 problems in one day', icon: '⚡', unlocked: false, progress: 40 },
    { id: 6, title: 'Consistency King', description: '30-day streak', icon: '👑', unlocked: false, progress: 40 },
  ]

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 border border-white/20">
      <h2 className="text-xs font-bold text-white mb-2">Achievements</h2>

      <div className="grid grid-cols-2 gap-1.5">
        {achievements.map((achievement) => (
          <div
            key={achievement.id}
            className={`p-1.5 rounded-lg transition-all transform hover:scale-105 ${
              achievement.unlocked
                ? 'bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30'
                : 'bg-white/5 border border-white/10 opacity-60'
            }`}
          >
            <div className="flex items-start gap-1">
              <div className={`text-base ${achievement.unlocked ? '' : 'grayscale'}`}>
                {achievement.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold text-xs ${achievement.unlocked ? 'text-white' : 'text-gray-400'} truncate`}>
                  {achievement.title}
                </h3>
                <p className="text-xs text-gray-400 mt-0.5 truncate">{achievement.description}</p>

                {!achievement.unlocked && (
                  <div className="mt-1">
                    <div className="flex justify-between text-xs mb-0.5">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-yellow-400">{achievement.progress}%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000"
                        style={{ width: `${achievement.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Achievements