"use client"
import React from 'react';
import './BuyTicketsPage.css';
import Link from 'next/link';
import { usePathname, useParams } from 'next/navigation';

const BuyTicketsPage = () => {
    const pathname = usePathname(); 
    const movie = {
        moviename: 'Dj Tillu',
        screen: '4Dx',
        date: new Date(),
        language: 'Telugu',
        type: 'Romance/Comedy',
        screens: [
            {
                name: 'Screen 1',
                location: 'Prasads IMAX ,Khairtabad, Hyderabad '
            },
            {
                name: 'Screen 2',
                location: 'PVR IRRUM MANZIL Hyderabad '
            },
            {
                name: 'Screen 3',
                location: 'PVR Panjagutta Hyderabad'
            }
        ]
    };
     const selectedDay = (val:any) =>{
        console.log(val)
    };

    return (
        <div className='buytickets'>
            <div className='s1'>
                <div className='head'>
                    <h1>{movie.moviename}- {movie.language}</h1>
                  <h3>{movie.type}</h3>
                </div>
            
            </div>
            <div className='screens'>
                {
                    movie.screens.map((screen,index)=>{
                        return(
                          <div className='screen' key={index}
                          >
                            <div><h2>
                                {screen.name}</h2>
                                <h3>{screen.location}</h3></div>
                          <Link href ={`${pathname}/${screen.name}`} className='theme_btn1 linkstylenone'>Select</Link>
                          </div>
                          
                        )
                    })
                }
            </div>
        </div>
            
            
    );
};

export default BuyTicketsPage;
