"use client"
import React from 'react'
import {BsShare} from 'react-icons/bs'
import {BsFillStarFill} from 'react-icons/bs';
import './MoviePage.css'
import {usePathname} from 'next/navigation'
import Link from 'next/link';
const Moviepage = () => {
    const pathname= usePathname()
    const movie={
        wideposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/tillu-square-et00343267-1666852723.jpg",
        portaitposter:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/tillu-square-et00343267-1666852723.jpg",
        title:"Dj Tillu 2",
        rating: 8.5,
        halls:[
            "2D","3D"
        ],
        languages:[
            "telugu",
            "hindi",
            "English"
        ],
        duration:"2h 15m",
        type:"Action/Comedy",
        releasedate:"march 3,2024",
        
        cast:[
            {
                _id:"1",
                name: "Siddhu Jonnalagadda",
                role:"Actor",
                imageUrl:"https://web-assets-in.bmscdn.com/chunks/js/vendor.ca466b1174810b21ae5f.js"
            }
         
        ],
        about:"Tillu Square is a Telugu movie starring Siddhu Jonnalagadda and Anupama Parameswaran in prominent roles. It is directed by Mallik Ram forming part of the crew"
    }
  return (
    <div className='moviepage'>
      <div className='c1'
        style={{
            backgroundImage: `url(${movie.wideposter})`
        }}>
            <div className='c11'>
               <div className='left'>
                <div className='movie_poster' style={{
                    backgroundImage:`url(${movie.portaitposter})`
                }}>
                    <p>In cinemas</p>
                </div>
                <div className='movie_details'>
                    <p className='title'>
                        {movie.title}
                    </p>
                    <p className='rating'>
                        <BsFillStarFill className='star' /> &nbsp;&nbsp;
                        {movie.rating}/10
                    </p>
                    <div className='halls_languages'>
                        <p className='halls'> </p>
                        <p className='languages'>
                            {movie.languages.map((language,index)=>{
                                return(
                                    <span key={index}>{language}</span>
                                )
                            })}
                        </p>
                    </div>
                    <p className='duration_type_releasedat'>
                        <span className='duration'>
                            {
                                movie.duration
                            }
                        </span>
                        <span>.</span>
                        <span className='type'>
                            {movie.type}
                        </span>
                        <span>.</span>
                        <span className='releasedat'>
                            {movie.releasedate}
                        </span>
                    </p>
                    <Link
                    href={`${pathname}/buytickets`}
                    className='linkstylenone'
                    >
                    <button className='bookbtn'>Book Tickets</button>
                    </Link>
                </div>
               </div>
               <div className='right'>
                <button className='sharebtn'><BsShare className='shareicon'/>share</button>
                </div> 
            </div>

      </div>
      <div className='c2'>
        <h1>About the Movie</h1>
        <p>{movie.about}</p>
      </div>
    </div>
  )
}

export default Moviepage
