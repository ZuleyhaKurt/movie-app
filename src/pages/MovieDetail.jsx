import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MovieDetail = () => {
  const { state: item } = useLocation()
  console.log(item.id)
  const navigate = useNavigate()
  const [details, setDetails] = useState("")
  const [videoDetail,setVideoDetail]= useState("")
  const [random,setRandom]= useState("")
  
 
  const API_KEY = "2a72939572bf0f6322fd87c528cc4cdd"
  const ID=item.id
 
  const getDetail = async () => {
    const url = `https://api.themoviedb.org/3/movie/${ID}?api_key=${API_KEY}`
    const detail = await axios(url)
    setDetails(detail.data)
  }

  const getVideo = async () => {
    const url = `https://api.themoviedb.org/3/movie/${ID}/videos?api_key=${API_KEY}`
    const video = await axios(url)
    const{data}=video
    setVideoDetail(data.results)
    setRandom(Math.floor((Math.random() * (data.results.length))))
   }
useEffect(() => {
  getDetail()
  getVideo()
}, [])

  return (
    <>
      <Navbar/>
    
  <div className='w-[100vw] h-[100vh] mt-10 '>
    <h1 className='text-gray-900 text-4xl font-bold text-center'>{details?.original_title}</h1>
    <div className="flex justify-center w-10/12 md:w-3/5 mx-auto my-3" >
        <iframe src={`https://www.youtube.com/embed/${videoDetail[random]?.key}?autoplay=1&mute=1`} frameborder="0" allowfullscreen></iframe>
    </div>
    <div className="flex justify-center mb-5">
        <div className="flex flex-col lg:flex-row max-w-6xl  rounded-lg bg-white shadow-lg  mb-10">
            <img className="lg:w-1/3 h-96 lg:h-[600px] object-cover rounded-t-lg md:rounded-none md:rounded-l-lg" src={`https://image.tmdb.org/t/p/w1280${details?.poster_path}`} alt="" />
            <div className="flex flex-col justify-start h-[28rem] ">
                <h5 className="text-gray-900 text-xl font-medium border-2 h-12">Overview</h5>
                <p className="text-gray-700 text-base border-2 h-80">
                    {details?.overview}
                </p>
                <p className="text-gray-600 text-l border-2  bg-yellow-200">Release Date: {details?.release_date}</p>
                <p className="text-gray-600 text-l border-2  bg-yellow-300">Rate: {details?.vote_average?.toFixed(1)}</p>
                <p className="text-gray-600 text-l  border-2  bg-yellow-400">Total Vote: {details?.vote_count}</p>
                <p className="text-black text-xl border-2  bg-yellow-500"> <button className='' onClick={()=>navigate(-1)}>Go Back</button></p>
            </div>
        </div>
    </div>
      </div>
      </>
  )
}

export default MovieDetail