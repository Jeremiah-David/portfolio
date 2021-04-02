import { Swiper, SwiperSlide } from 'swiper/react'
import { useState} from 'react'
import SwiperCore, { Navigation, Pagination, Thumbs, EffectCube } from 'swiper'
import 'swiper/swiper-bundle.css'
import '../../App.css';
import React from 'react'

import project1 from '../../kombat.png'
import project2 from '../../tictac.png'
import project3 from '../../rick.png'
import eugenewater from '../../eugenewater.jpg'


SwiperCore.use([Navigation, Pagination, Thumbs, EffectCube])

function Swipercomp() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const slides = [];
    const slides2 = [];
    const slidePics = [project1, project2, project3]
    const thumbs = []
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`}
                tag="li"
                style={{ listStyle: 'none' }}

        >
                <img src={`https://picsum.photos/id/${i}/200/100`}
                 alt={`Thumbnail ${i}`}
></img>
            </SwiperSlide>
        )
    }



    for (let i = 0; i < 3; i += 1) {
        slides.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={slidePics[i]}
                    style={{
                        width: '100%',
                        
                        
                        alignItems: 'center'
                    }}

                    alt={`Slide${i}`}
                />
            </SwiperSlide>
        )
    }

    for (let i = 4; i < 7; i += 1) {
        slides2.push(
            <SwiperSlide key={`slide-${i}`}>
                <img src={slidePics[i]}
                    style={{
                        width: '100%',
                        
                        
                        alignItems: 'center'
                    }}

                    alt={`Slide${i}`}
                />
            </SwiperSlide>
        )
    }



    return (
        <div className='swiperShow'>
            <Swiper id="main" 
            effect="cube"
            thumbs={{ swiper: thumbsSwiper }}
            navigation 
            pagination>
                <h1>Swipper!</h1>
                {slides}
            </Swiper>

            <Swiper id="thumbs" 
            spaceBetween={5}
            slidesPerView={3}
            onSwiper={setThumbsSwiper}>
                {thumbs}
            </Swiper>

            <Swiper id="controller" onSwiper={setControlledSwipper}>
                {slides2}
            </Swiper>
        </div>
    )
}

export default Swipercomp