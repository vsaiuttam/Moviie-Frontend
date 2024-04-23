import React from 'react'
import { MovieCardType } from '@/types/types';
import {useRouter} from 'next/navigation';
import './MovieCard.css'
import {BsFillStarFill} from 'react-icons/bs';
const MovieCard = (data :MovieCardType) => {
    const router = useRouter();
    const city ="mumbai"
    const {title, imageUrl, _id,rating, type}=data;
    return (
     <div
        className='moviecard'
        onClick={()=>{
            router.push(`/${city}//movies/${title}`)
        }}
       > 
       <div className='movieimg'
       style={{
        backgroundImage:`url(${imageUrl})`
       }}></div>

       <p className='rating'>
        <BsFillStarFill className='star'/>&nbsp;&nbsp;
        {rating}/10</p>
    
        <div className='details'>
        <p className='title'>
          {title}
          </p>
        
                <p className='type'>
                    {type}
                </p>
     </div>
</div>
    )
}

export default MovieCard