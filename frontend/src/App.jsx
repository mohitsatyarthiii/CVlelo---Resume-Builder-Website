
import { Route, Routes } from 'react-router-dom'
import './App.css'
import LandingPage from './pages/LandingPage'
import UserProvider from './context/UserContext'
import Dashboard from './pages/Dashboard'
import EditResume from './components/EditResume'
import { Toaster } from 'react-hot-toast'
import ContactPage from './pages/ContactPage'
import About from './pages/AboutUs'
import { FeedbackPage } from './pages/Feedback'

function App() {
 

  return (
    <UserProvider>
   <Routes>
    <Route path='/' element={<LandingPage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/resume/:resumeId' element={<EditResume/>}/>
    <Route path='/contact-us' element={<ContactPage/>}/>
    <Route path='/about-us' element={<About/>}/>
    <Route path='/feedback' element={<FeedbackPage/>}/>
   </Routes>

   <Toaster toastOptions={{
    className: "",
    style: {
      fontSize: '13px'
    }
   }}></Toaster>
   </UserProvider>
  )
}

export default App
