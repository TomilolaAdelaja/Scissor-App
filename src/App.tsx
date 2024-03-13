import Home from './pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SharedLayout from '../src/Components/SharedLayout'
import Login from './pages/Login';
import Signup from './pages/Signup';
import Learnmore from './pages/Learnmore';



function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Login />}/>
            <Route path='LandingPage' element={<SharedLayout />}/>
            <Route index  element={<Home />}/>
            <Route path='Signup' element={<Signup />}/>
            <Route path='Learnmore' element={<Learnmore />}/>
          </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
