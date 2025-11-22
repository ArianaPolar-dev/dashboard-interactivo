import { useState } from 'react'
import { Plus, Flame } from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { useHabitTracker } from '../../hooks/useHabitTracker'

const HabitTracker = () => {
  const { habits, addHabit, toggleHabitDay, getChartData } = useHabitTracker()
  const [newHabit, setNewHabit] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newHabit.trim()) {
      addHabit(newHabit)
      setNewHabit('')
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Tracker de Hábitos</h2>
        <p className="text-gray-600 mt-1">Construye mejores rutinas</p>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Nuevo Hábito</h3>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={newHabit}
            onChange={(e) => setNewHabit(e.target.value)}
            placeholder="Ej: Hacer ejercicio, Leer 30 min..."
            className="input-field flex-1"
          />
          <button type="submit" className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Agregar
          </button>
        </form>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {habits.map((habit) => (
          <div key={habit.id} className="card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold text-gray-800">{habit.name}</h3>
              <div className="flex items-center gap-2">
                <Flame className="text-orange-500" size={20} />
                <span className="text-orange-600 font-bold">{habit.streak} días</span>
              </div>
            </div>

            <div className="flex gap-2 mb-4">
              {habit.days.map((day, index) => (
                <button
                  key={index}
                  onClick={() => toggleHabitDay(habit.id, index)}
                  className={`w-10 h-10 rounded-lg font-medium transition-all duration-300 ${
                    day.completed
                      ? 'bg-green-500 text-white shadow-md scale-110'
                      : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {day.label}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">
                Completado: {habit.completedDays}/{habit.totalDays} días
              </span>
              <span className="text-green-600 font-semibold">
                {Math.round((habit.completedDays / habit.totalDays) * 100)}%
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Progreso Semanal</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={getChartData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="completed" stroke="#10b981" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default HabitTracker