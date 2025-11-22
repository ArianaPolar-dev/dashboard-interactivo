import { useState } from 'react'
import { LayoutDashboard, CheckSquare, Target, Settings, BarChart3 } from 'lucide-react'
import Dashboard from './components/Dashboard/Dashboard'
import TaskManager from './components/TaskManager/TaskManager'
import HabitTracker from './components/HabitTracker/HabitTracker'
import AdminPanel from './components/AdminPanel/AdminPanel'
import Analytics from './components/Analytics/Analytics'

function App() {
  const [activeView, setActiveView] = useState('dashboard')

  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'tasks', label: 'Tareas', icon: CheckSquare },
    { id: 'habits', label: 'Hábitos', icon: Target },
    { id: 'admin', label: 'Admin', icon: Settings },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
  ]

  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />
      case 'tasks':
        return <TaskManager />
      case 'habits':
        return <HabitTracker />
      case 'admin':
        return <AdminPanel />
      case 'analytics':
        return <Analytics />
      default:
        return <Dashboard />
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-slate-800 to-slate-900 text-white p-6 animate-fade-in">
        <div className="mb-8">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dashboard Pro
          </h1>
          <p className="text-slate-400 text-sm mt-1">Panel de Control</p>
        </div>
        <nav className="space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  activeView === item.id
                    ? 'bg-blue-600 shadow-lg scale-105'
                    : 'hover:bg-slate-700 hover:scale-105'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="animate-slide-up">{renderView()}</div>
      </main>
    </div>
  )
}

export default App
