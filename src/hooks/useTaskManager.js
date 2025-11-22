import { useState, useEffect } from 'react'

export const useTaskManager = () => {
  const [tasks, setTasks] = useState([
    { 
      id: 1, 
      title: 'Revisar correos importantes', 
      completed: false, 
      priority: 'alta',
      createdAt: '21 Nov 2025'
    },
    { 
      id: 2, 
      title: 'Preparar presentación', 
      completed: true, 
      priority: 'media',
      createdAt: '20 Nov 2025'
    },
    { 
      id: 3, 
      title: 'Actualizar documentación', 
      completed: false, 
      priority: 'baja',
      createdAt: '21 Nov 2025'
    },
  ])

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      completed: false,
      priority,
      createdAt: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
    }
    setTasks([newTask, ...tasks])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ))
  }

  const getStats = () => {
    const completed = tasks.filter(t => t.completed).length
    const pending = tasks.filter(t => !t.completed).length
    const completionRate = tasks.length > 0 ? Math.round((completed / tasks.length) * 100) : 0

    return { completed, pending, completionRate }
  }

  return { tasks, addTask, deleteTask, toggleTask, getStats }
}