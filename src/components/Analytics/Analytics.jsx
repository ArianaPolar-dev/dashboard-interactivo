import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Users, Activity, DollarSign } from 'lucide-react'

const Analytics = () => {
  const monthlyData = [
    { month: 'Ene', tareas: 45, habitos: 28, usuarios: 12 },
    { month: 'Feb', tareas: 52, habitos: 35, usuarios: 18 },
    { month: 'Mar', tareas: 61, habitos: 42, usuarios: 25 },
    { month: 'Abr', tareas: 58, habitos: 38, usuarios: 22 },
    { month: 'May', tareas: 70, habitos: 48, usuarios: 30 },
    { month: 'Jun', tareas: 82, habitos: 55, usuarios: 38 },
  ]

  const categoryData = [
    { name: 'Productividad', value: 400 },
    { name: 'Salud', value: 300 },
    { name: 'Educación', value: 200 },
    { name: 'Finanzas', value: 100 },
  ]

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']

  const stats = [
    { title: 'Crecimiento', value: '+23%', icon: TrendingUp, color: 'from-green-500 to-emerald-600' },
    { title: 'Usuarios Activos', value: '1,234', icon: Users, color: 'from-blue-500 to-cyan-600' },
    { title: 'Actividad Diaria', value: '89%', icon: Activity, color: 'from-purple-500 to-pink-600' },
    { title: 'Conversión', value: '12.5%', icon: DollarSign, color: 'from-orange-500 to-red-600' },
  ]

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-3xl font-bold text-gray-800">Analytics Dashboard</h2>
        <p className="text-gray-600 mt-1">Métricas y estadísticas detalladas</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <div key={stat.title} className="card animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className={`p-3 rounded-lg bg-gradient-to-r ${stat.color} w-fit mb-4`}>
                <Icon className="text-white" size={24} />
              </div>
              <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
              <p className="text-3xl font-bold text-gray-800">{stat.value}</p>
            </div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Actividad Mensual</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tareas" fill="#3b82f6" />
              <Bar dataKey="habitos" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="card">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Distribución por Categoría</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={categoryData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="card">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Tendencia de Usuarios</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="usuarios" stroke="#8b5cf6" strokeWidth={3} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Analytics