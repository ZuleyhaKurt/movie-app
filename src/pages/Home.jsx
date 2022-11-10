import { map } from '@firebase/util'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'
import Navbar from '../components/Navbar'

const Home = () => {
  const [films, setFilms] = useState("")

  const getData = async () => {
    const url ="https://api.themoviedb.org/3/discover/movie?api_key=2a72939572bf0f6322fd87c528cc4cdd"
    const movie = await axios(url)
    const{data:{results}}=movie
    console.log(results)
    setFilms(results)
    
   

}
useEffect(() => {
  getData()
}, [])


  return (
      <div>
          <Navbar />
      <div className="flex my-5 gap-5  justify-center">
      <input type="text" name="" id="" className='w-[15rem] rounded-lg indent-3 border-solid border-inhert border-1 outline outline-inherit' />
                  
      <button   className='bg-red-600 py-1 px-5 font-bold text-md text-slate-300 rounded-md active:scale-95 active:bg-slate-300 active:text-slate-600 duration '>Search</button>
      </div>
      <div className='flex flex-wrap gap-10 justify-center'>
        {films ? (
          
        films.map((item,index) => {
          
          return ( 
            <div >
              <Card key={index} item={item} />
              </div>
          )
        })) : null
      }
       
      </div>

    </div>
  )
}

export default Home