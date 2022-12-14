import axios from 'axios'
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({ films, setFilms }) => {
    const [query,setQuery] = useState("")
    const [loading,setLoading] = useState(false)
    const navigate= useNavigate()
    console.log(films)
    const getMovie = async () => {
        setLoading(true)
        try {
        const url = `https://api.themoviedb.org/3/search/movie?api_key=2a72939572bf0f6322fd87c528cc4cdd&query=${query}`
        const movDetail = await axios(url)
        const { data: { results } } = movDetail
        setFilms(results)
        setLoading(false)
        } catch (error) {
            console.log(error)
        }
        
    }

    const handleSearch = () => {
        getMovie()
        setQuery("")
  }
   

    
 

    return (
        <>
            <div className="flex my-5 gap-5  justify-center">
      <input type="text" name="" id="" value={query} onChange={(e)=>setQuery(e.target.value)} className='w-[15rem] rounded-lg indent-3 border-solid border-inhert border-1 outline outline-inherit' />
                  
      <button   className='bg-red-600 py-1 px-5 font-bold text-md text-slate-300 rounded-md active:scale-95 active:bg-slate-300 active:text-slate-600 duration 'onClick={handleSearch}>Search</button>
            </div>
            <div className='flex flex-wrap gap-10 justify-center'>
            {loading ? (<h1>Loading</h1>)
                :
                ( films?.map((item,index) => {
          
                    return ( 
                        <div className=" relative overflow-hidden card w-[25rem] h-[25rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800          dark:border-gray-700" key={index}>
       
                            <img className='w-[25rem] h-[22rem]'
                                onClick={() => navigate(`/movieDetail`, { state: item })}
                                src={`https://image.tmdb.org/t/p/w1280${item?.poster_path}`} alt="" />
                      
                            <div className='bg-slate-400 h-[3rem] flex justify-between px-4 items-center'>
                           <a href="">{item?.title} </a>
                            <span className='px-2 h-[2rem] rounded-lg bg-yellow-400'>{item?.vote_average}</span>
                            </div>
                  
                             <p className="font-normal text-black overview  bg-slate-400 opacity-80 absolute bottom-[3rem]">{item?.overview}</p>
               
                            </div>
                    )
                 }) )
                }

            </div>
                  
            
            
    
    </>
  )
}

export default Card