import { useState } from 'react'
import { Plus, Trash2, Check, Clock, AlertCircle } from 'lucide-react'
import { useTaskManager } from '../../hooks/useTaskManager'

const TaskManager = () => {
  const { tasks, addTask, deleteTask, toggleTask, getStats } = useTaskManager()
  const [newTask, setNewTask] = useState('')
  const [priority, setPriority] = useState('media')

  const stats = getStats()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (newTask.trim()) {
      addTask(newTask, priority)
      setNewTask('')
      setPriority('media')
    }
  }

  const priorityColors = {
    alta: 'border-red-500 bg-red-50',
    media: 'border-yellow-500 bg-yellow-50',
    baja: 'border-green-500 bg-green-50'
  }

  const priorityBadges = {
    alta: 'bg-red-100 text-red-800',
    media: 'bg-yellow-100 text-yellow-800',
    baja: 'bg-green-100 text-green-800'
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Gestor de Tareas</h2>
        <p className="text-gray-600 mt-1">Organiza tu trabajo diario</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="card bg-gradient-to-br from-blue-50 to-blue-100 border-l-4 border-blue-500">
          <div className="flex items-center gap-3">
            <Clock className="text-blue-600" size={24} />
            <div>
              <p className="text-sm text-blue-600 font-medium">Pendientes</p>
              <p className="text-2xl font-bold text-blue-800">{stats.pending}</p>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-br from-green-50 to-green-100 border-l-4 border-green-500">
          <div className="flex items-center gap-3">
            <Check className="text-green-600" size={24} />
            <div>
              <p className="text-sm text-green-600 font-medium">Completadas</p>
              <p className="text-2xl font-bold text-green-800">{stats.completed}</p>
            </div>
          </div>
        </div>
        <div className="card bg-gradient-to-br from-purple-50 to-purple-100 border-l-4 border-purple-500">
          <div className="flex items-center gap-3">
            <AlertCircle className="text-purple-600" size={24} />
            <div>
              <p className="text-sm text-purple-600 font-medium">Tasa de Completado</p>
              <p className="text-2xl font-bold text-purple-800">{stats.completionRate}%</p>
            </div>
          </div>
        </div>
      </div>

      {/* Add Task Form */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Nueva Tarea</h3>
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Escribe una nueva tarea..."
            className="input-field flex-1"
          />
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="input-field w-32"
          >
            <option value="baja">Baja</option>
            <option value="media">Media</option>
            <option value="alta">Alta</option>
          </select>
          <button type="submit" className="btn-primary flex items-center gap-2">
            <Plus size={20} />
            Agregar
          </button>
        </form>
      </div>

      {/* Tasks List */}
      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Tareas ({tasks.length})</h3>
        <div className="space-y-3">
          {tasks.length === 0 ? (
            <p className="text-gray-500 text-center py-8">No hay tareas. ¡Agrega una nueva!</p>
          ) : (
            tasks.map((task) => (
              <div
                key={task.id}
                className={`flex items-center gap-4 p-4 rounded-lg border-l-4 transition-all duration-300 hover:shadow-md ${
                  priorityColors[task.priority]
                } ${task.completed ? 'opacity-60' : ''}`}
              >
                <button
                  onClick={() => toggleTask(task.id)}
                  className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                    task.completed
                      ? 'bg-green-500 border-green-500'
                      : 'border-gray-400 hover:border-green-500'
                  }`}
                >
                  {task.completed && <Check size={16} className="text-white" />}
                </button>

                <div className="flex-1">
                  <p className={`font-medium ${task.completed ? 'line-through text-gray-500' : 'text-gray-800'}`}>
                    {task.title}
                  </p>
                  <p className="text-sm text-gray-500">{task.createdAt}</p>
                </div>

                <span className={`text-xs px-3 py-1 rounded-full font-medium ${priorityBadges[task.priority]}`}>
                  {task.priority.toUpperCase()}
                </span>

                <button
                  onClick={() => deleteTask(task.id)}
                  className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors duration-200"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default TaskManager