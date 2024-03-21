import Home from './pages/Home';
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import SharedLayout from '../src/Components/SharedLayout'
import Login from './pages/Login';
import Signup from './pages/Signup';
import LearnMore from './pages/LearnMore.tsx';
import { AuthProvider, useAuth } from './Components/ContextProvider';
import ProtectedRoute from './Components/ProtectedRoute';
// import Test from './pages/test';
// import FAQs from './Components/FAQs';




function App() {
  useAuth()
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<Login />}/>
            <Route path='signup' element={<Signup />}/>

            {/* <Route path="delivery" element={<ProtectedRoute>
            <SharedLayout/>
            </ProtectedRoute>
            }/> */}
            <Route path='/landingPage' element={<SharedLayout />}>
              <Route index element={
             <ProtectedRoute>
                <Home />
             </ProtectedRoute>     
              }/>
              <Route path='learn' element={<LearnMore />}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
