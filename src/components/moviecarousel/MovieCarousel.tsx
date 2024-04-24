'use client'
import React from 'react'
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import MovieCard from './MovieCard';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';
const MovieCarousel= ()=>{   
    const Movies: MovieCard[]=[
        {
            title:"Dj Tillu",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS4xLzEwICA5NksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00343267-ucfqbyhxcu-portrait.jpg",
            _id:"1",
            rating:8.5,
            type:"action/thriller"
        }, {
            title:"Manjummel boys",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OS8xMCAgMTkuMksgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00393618-ujbcesljtq-portrait.jpg",
            _id:"2",
            rating:8.5,
            type:"action/thriller"
        }, {
            title:"the family star",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny4yLzEwICA0MS44SyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00373701-lumczvutmm-portrait.jpg",
            _id:"3",
            rating:8.5,
            type:"action/thriller"
        },
     {
            title:"Geethanjali 2",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-Ny44LzEwICA1LjJLIFZvdGVz,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00389375-xcjdxwfdmd-portrait.jpg",
            _id:"4",
            rating:8.5,
            type:"action/thriller"
        },
        {
            title:"Godzilla x Kong: The New Empire",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-OC43LzEwICAxMDQuM0sgVm90ZXM%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00358147-hcnpdhrkwu-portrait.jpg",
            _id:"5",
            rating:8.7,
            type:"action/thriller/sci"
        },
        {
            title:"Bade Miyan Chote Miyan",
            imageUrl:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-image,i-discovery-catalog@@icons@@star-icon-202203010609.png,lx-24,ly-615,w-29,l-end:l-text,ie-NS45LzEwICA2NC4zSyBWb3Rlcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-70,pa-8_0_0_0,l-end/et00322647-cbcrakrkwb-portrait.jpg",
            _id:"5",
            rating:5.9,
            type:"action/thriller/COMEDY"
        }
    
    ];
return (
        <div className='sliderout'>
            {
                <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    '@0.00': {
                        slidesPerView: 1,
                        spaceBetween: 2,
                    },
                    '@0.75': {
                        slidesPerView: 2,
                        spaceBetween: 2,
                    },
                    '@1.00': {
                        slidesPerView: 3,
                        spaceBetween: 2,
                    },
                    '@1.50': {
                        slidesPerView: 6,
                        spaceBetween: 2,
                    },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    Movies.map((Movie)=>{
                        return(
                            <Swiper
                slidesPerView={1}
                spaceBetween={1}
                pagination={{ clickable: true }}
                breakpoints={{
                    '@0.00': { slidesPerView: 1, spaceBetween: 2 },
                    '@0.75': { slidesPerView: 2, spaceBetween: 2 },
                    '@1.00': { slidesPerView: 3, spaceBetween: 2 },
                    '@1.50': { slidesPerView: 6, spaceBetween: 2 },
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {Movies.map((Movie) => (
                    <SwiperSlide key={Movie._id}>
                        <MovieCard {...Movie} />
                    </SwiperSlide>
                ))}
            </Swiper>
                        )
                    })
                }
            </Swiper>
            }
        </div>
    )
}

export default MovieCarousel