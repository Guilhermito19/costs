import './App.css'
import { Outlet } from 'react-router-dom'
import Menu from './routes/Menu'
import Footer from './components/footer/Footer.jsx'

function App() {

  return (
    <div className="App">
      <Menu />
      <div className='container'>
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default App
