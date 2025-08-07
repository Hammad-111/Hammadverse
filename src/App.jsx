import './App.css'
import Header from './components/Header/Header'
import Home from './pages/Home'
import Shop from './pages/Shop'
import About from './pages/About'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Singup'
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="app-container">
      <Routes>
        {/* Auth routes without header */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        
        {/* Main single page with all sections */}
        <Route path="/" element={
          <>
            <Header />
            <div className="main-content">
              <Home />
              <Shop />
              <Cart />
              <About />
            </div>
          </>
        } />
        <Route path="/home" element={
          <>
            <Header />
            <div className="main-content">
              <Home />
              <Shop />
              <Cart />
              <About />
            </div>
          </>
        } />
      </Routes>
    </div>
  )
}

export default App
