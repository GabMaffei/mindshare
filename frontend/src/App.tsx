import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { Login } from '@/pages/Auth/Login'
import { Signup } from '@/pages/Auth/Signup'
import { IdeasPage } from '@/pages/Ideias'
import { useAuthStore } from './stores/auth'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />
}

function PublicRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuthStore()
  return !isAuthenticated ? <>{children}</> : <Navigate to="/" replace />
}

function App() {

  return (
    <Layout>
      <Routes>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>} />

        <Route path="/signup" element={
          <PublicRoute>
            <Signup />
          </PublicRoute>} />

        <Route path="/ideas" element={
          <ProtectedRoute>
            <IdeasPage />
          </ProtectedRoute>} />
      </Routes>
    </Layout>
  )
}

export default App
