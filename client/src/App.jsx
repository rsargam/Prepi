import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import InterviewPage from './pages/InterviewPage'
import InterviewHistory from './pages/InterviewHistory'
import InterviewReport from "./pages/InterviewReport";
import Pricing from './pages/Pricing'




export const Server_URL = "https://prepi-2.onrender.com"

function App() {

  const dispatch=useDispatch()
  useEffect(()=>{
    const getUser=async()=>{
      try{
        const result=await axios.get(Server_URL + "/api/user/current-user",{withCredentials:true})
        dispatch(setUserData(result.data))
      
      }
      catch(error){
console.log(error)
dispatch(setUserData(null))
      }
    }
    getUser()
  },[dispatch])
  return (
    <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/auth' element={<Auth/>}/>
    <Route path='/interview' element={<InterviewPage/>}/>
    <Route path='/history' element={<InterviewHistory/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/report/:id' element={<InterviewReport/>}/>

  </Routes>
  )
}

export default App
