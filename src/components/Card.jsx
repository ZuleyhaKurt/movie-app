import React from 'react'

const Card = ({ item, index }) => {
    
    return (
    <div className=" relative overflow-hidden card w-[25rem] h-[25rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800          dark:border-gray-700" key={index}>
       
        <img className='w-[25rem] h-[22rem]' src={`https://image.tmdb.org/t/p/w1280${item?.poster_path}`} alt="" />
               
        <div className='bg-slate-400 h-[3rem] flex justify-between px-4 items-center'>
        <a href="">{item?.title} </a>
                <span className='px-2 h-[2rem] rounded-lg bg-yellow-400'>{item?.vote_average}</span>
            </div>
           
        <p className="font-normal text-black overview  bg-slate-400 opacity-80 absolute bottom-[3rem]">{item?.overview}</p>
        
    </div>

  )
}

export default Card