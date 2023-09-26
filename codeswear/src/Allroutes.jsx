import React from 'react'
import Auth from './Pages/login'
import {Routes,Route} from 'react-router-dom';
import HomeMainbar from './components/HomeMainbar';
import Signup from './Pages/signup'
const Allroutes = () => {
  return (
   <Routes>
    <Route path ='/' element ={<HomeMainbar/>}/>
    <Route path='/Auth' element={<Auth/>} />
    <Route path='/Signup' element={<Signup/>} />
    
   </Routes>
  )
}

export default Allroutes
