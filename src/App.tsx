import React, { useEffect } from 'react'
import { Provider } from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './helper/privateRoutes'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import NotFoundPage from './pages/NotFoundPage'
import { store } from './store/store'

function App() {
  const isAuthenticated = !!localStorage.getItem('accessToken')

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
  }, []);

  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<PrivateRoute isAuthenticated={isAuthenticated}><HomePage /></PrivateRoute>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Provider>
  )
}

export default App


