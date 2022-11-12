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
    console.log(films)
   

}
useEffect(() => {
  getData()
}, [])

  
  return (
    <div>
     
    <Navbar />
     <Card films={films} setFilms={setFilms} />    
      
    </div>
  )
}

export default Home