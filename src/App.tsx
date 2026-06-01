import type { RouteObject } from 'react-router-dom'
import Home from '@/pages/Home'
import { useRoutes, Navigate } from 'react-router-dom'

// Used in @/prerender.tsx
export const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/en" replace /> },
  { path: '/zh', element: <Home lang="zh" /> },
  { path: '/en', element: <Home lang="en" /> },
]

function App() {
  return useRoutes(routes)
}

export default App
