import { BrowserRouter, Routes, Route } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Cart from './components/Cart.jsx'
import store from './redux/store'
import './index.css'
import { Provider } from 'react-redux'
import Register from './components/Register.jsx'
import Login from './components/Login.jsx'
import Profile from './components/Profile.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { AuthProvider } from './context/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <AuthProvider>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>} />
          </Routes>
      </AuthProvider>
    </Provider>
  </BrowserRouter>,
)
