import { useState, useEffect } from 'react'

export const useDashboardData = () => {
  const [stats, setStats] = useState({
    completedTasks: 24,
    activeHabits: 8,
    currentStreak: 15,
    totalTime: 42
  })

  const [recentActivity, setRecentActivity] = useState([
    { 
      title: 'Completaste "Revisar emails"', 
      time: 'Hace 2 horas', 
      color: 'bg-green-500',
      badge: 'bg-green-100 text-green-800',
      type: 'Tarea'
    },
    { 
      title: 'Nueva racha de 15 días', 
      time: 'Hace 5 horas', 
      color: 'bg-orange-500',
      badge: 'bg-orange-100 text-orange-800',
      type: 'Logro'
    },
    { 
      title: 'Añadiste "Meditar 10 min"', 
      time: 'Ayer', 
      color: 'bg-blue-500',
      badge: 'bg-blue-100 text-blue-800',
      type: 'Hábito'
    },
    { 
      title: 'Completaste 5 tareas', 
      time: 'Hace 2 días', 
      color: 'bg-purple-500',
      badge: 'bg-purple-100 text-purple-800',
      type: 'Milestone'
    },
  ])

  return { stats, recentActivity }
}