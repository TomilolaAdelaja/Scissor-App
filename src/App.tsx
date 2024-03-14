import Home from './pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SharedLayout from '../src/Components/SharedLayout'
import Login from './pages/Login';
import Signup from './pages/Signup';
import LearnMore from './pages/LearnMore';
import { AuthProvider, useAuth } from './Components/ContextProvider';
import ProtectedRoute from './Components/ProtectedRoute';




function App() {
  useAuth()
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Login />}/>
            <Route path='signup' element={<Signup />}/>

            <Route path="delivery" element={<ProtectedRoute>
            <SharedLayout/>
            </ProtectedRoute>
            }/>
            <Route path='landingPage' element={<SharedLayout />}>
              <Route path='Home' element={<Home />}/>
              <Route path='learnMore' element={<LearnMore />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
