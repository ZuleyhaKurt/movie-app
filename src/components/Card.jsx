import React from 'react'

const Card = ({ item, index }) => {
    console.log(item.backdrop_path)
    return (
    <div class=" w-[25rem] h-[25rem] bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800          dark:border-gray-700" key={index}>
        
        <img class="rounded-t-lg" src={item?.poster_path} alt=""/>
       
        <div class="p-5">
        
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item?.overview}</p>
        <div>
        <a href="">{item?.title} </a>
        <span>rate</span>
        </div>
        </div>
    </div>

  )
}

export default Card