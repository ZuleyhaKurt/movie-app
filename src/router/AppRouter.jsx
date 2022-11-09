import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import MovieDetail from '../pages/MovieDetail'
import Register from '../pages/Register'

const AppRouter = () => {
  return (
     
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home/>}/>
                  <Route path='/login' element={<Login/>}/>
                  <Route path='/register' element={<Register/>}/>
                  <Route path='/movieDetail' element={<MovieDetail/>}/>
             </Routes>
          </BrowserRouter>
   
  )
}

export default AppRouter