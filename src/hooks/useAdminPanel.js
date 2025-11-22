import { useState } from 'react'

export const useAdminPanel = () => {
  const [items, setItems] = useState([
    { 
      id: 1, 
      name: 'Juan Pérez', 
      email: 'juan@ejemplo.com', 
      role: 'admin',
      createdAt: '15 Nov 2025'
    },
    { 
      id: 2, 
      name: 'María García', 
      email: 'maria@ejemplo.com', 
      role: 'editor',
      createdAt: '18 Nov 2025'
    },
    { 
      id: 3, 
      name: 'Carlos López', 
      email: 'carlos@ejemplo.com', 
      role: 'user',
      createdAt: '20 Nov 2025'
    },
  ])

  const addItem = (data) => {
    const newItem = {
      id: Date.now(),
      ...data,
      createdAt: new Date().toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' })
    }
    setItems([...items, newItem])
  }

  const updateItem = (id, data) => {
    setItems(items.map(item => item.id === id ? { ...item, ...data } : item))
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  return { items, addItem, updateItem, deleteItem }
}