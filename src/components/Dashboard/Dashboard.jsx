import { useState, useEffect } from 'react'
import { TrendingUp, CheckCircle, Target, Clock } from 'lucide-react'
import { useDashboardData } from '../../hooks/useDashboardData'

const Dashboard = () => {
  const { stats, recentActivity } = useDashboardData()

  const statCards = [
    { 
      title: 'Tareas Completadas', 
      value: stats.completedTasks, 
      icon: CheckCircle, 
      color: 'from-green-500 to-emerald-600',
      trend: '+12%'
    },
    { 
      title: 'Hábitos Activos', 
      value: stats.activeHabits, 
      icon: Target, 
      color: 'from-blue-500 to-cyan-600',
      trend: '+5%'
    },
    { 
      title: 'Racha Actual', 
      value: `${stats.currentStreak} días`, 
      icon: TrendingUp, 
      color: 'from-purple-500 to-pink-600',
      trend: '+2 días'
    },
    { 
      title: 'Tiempo Total', 
      value: `${stats.totalTime}h`, 
      icon: Clock, 
      color: 'from-orange-500 to-red-600',
      trend: '+8h'
    },
  ]

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800">Dashboard Principal</h2>
          <p className="text-gray-600 mt-1">Resumen de tu productividad</p>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div 
              key={stat.title} 
              className="card animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color}`}>
                  <Icon className="text-white" size={24} />
                </div>
                <span className="text-green-600 text-sm font-semibold">{stat.trend}</span>
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          )
        })}
      </div>

      {/* Recent Activity */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Actividad Reciente</h3>
        <div className="space-y-3">
          {recentActivity.map((activity, index) => (
            <div 
              key={index}
              className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <div className={`w-2 h-2 rounded-full ${activity.color}`}></div>
              <div className="flex-1">
                <p className="text-gray-800 font-medium">{activity.title}</p>
                <p className="text-gray-500 text-sm">{activity.time}</p>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full ${activity.badge}`}>
                {activity.type}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard