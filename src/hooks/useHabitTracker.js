import { useState } from 'react'

export const useHabitTracker = () => {
  const [habits, setHabits] = useState([
    {
      id: 1,
      name: 'Ejercicio matutino',
      streak: 12,
      completedDays: 5,
      totalDays: 7,
      days: [
        { label: 'L', completed: true },
        { label: 'M', completed: true },
        { label: 'X', completed: false },
        { label: 'J', completed: true },
        { label: 'V', completed: true },
        { label: 'S', completed: true },
        { label: 'D', completed: false },
      ]
    },
    {
      id: 2,
      name: 'Leer 30 minutos',
      streak: 8,
      completedDays: 6,
      totalDays: 7,
      days: [
        { label: 'L', completed: true },
        { label: 'M', completed: true },
        { label: 'X', completed: true },
        { label: 'J', completed: true },
        { label: 'V', completed: false },
        { label: 'S', completed: true },
        { label: 'D', completed: true },
      ]
    },
  ])

  const addHabit = (name) => {
    const newHabit = {
      id: Date.now(),
      name,
      streak: 0,
      completedDays: 0,
      totalDays: 7,
      days: [
        { label: 'L', completed: false },
        { label: 'M', completed: false },
        { label: 'X', completed: false },
        { label: 'J', completed: false },
        { label: 'V', completed: false },
        { label: 'S', completed: false },
        { label: 'D', completed: false },
      ]
    }
    setHabits([...habits, newHabit])
  }

  const toggleHabitDay = (habitId, dayIndex) => {
    setHabits(habits.map(habit => {
      if (habit.id === habitId) {
        const newDays = [...habit.days]
        newDays[dayIndex] = { ...newDays[dayIndex], completed: !newDays[dayIndex].completed }
        const completed = newDays.filter(d => d.completed).length
        return { ...habit, days: newDays, completedDays: completed }
      }
      return habit
    }))
  }

  const getChartData = () => {
    return [
      { day: 'Lun', completed: 2 },
      { day: 'Mar', completed: 3 },
      { day: 'Mié', completed: 2 },
      { day: 'Jue', completed: 4 },
      { day: 'Vie', completed: 3 },
      { day: 'Sáb', completed: 4 },
      { day: 'Dom', completed: 2 },
    ]
  }

  return { habits, addHabit, toggleHabitDay, getChartData }
}