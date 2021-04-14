import { Swiper, SwiperSlide } from 'swiper/react'
import { useState} from 'react'
import SwiperCore, { Navigation, Pagination, Thumbs, Controller, 
    EffectCube, EffectFlip, } from 'swiper'
import 'swiper/swiper-bundle.css'
import '../../App.css';
import React from 'react'

import project1 from '../../kombat.png'
import project2 from '../../tictac.png'
import project3 from '../../rick.png'
import project6 from '../../rick.png'
import project5 from '../../tictac.png'
import project4 from '../../kombat.png'
import eugenewater from '../../eugenewater.jpg'


SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube, EffectFlip, ])

function Swipercomp() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [controlledSwipper, setControlledSwipper] = useState(null)
    const slides = [];
    const slides2 = [];
    const thumbs = []
    const slidePics = ['https://i.imgur.com/huh2aol.png?1?', project2, 'https://i.imgur.com/ZbIQNsh.png?']
    const thumbTitles = ['Kombat Assembly', 'Tic Tac Old Town Road', 'Rickipedia & Mortiverse']
    const project4 = ['Kombat Assembly',
    'Kombat Assembly is a browser game written in Javascript, HTML, & CSS. A turned based fighting game where you, as a Cat turned human, fight the temple Caretaker. Two player mode and secret link to Orignal Doom included', 'See it!', projectDeploy4, 'Check out the repo', projectHub4, ]
    const project5 = ['Tic Tac Old Town Road',
    'Uses Javascript and CSS to make a stylistic Tic Tac Toe game.', 'See it!', projectDeploy5, 'Check out the repo', projectHub5]
    const project6 = ['Rickipedia & Mortiverse',
    'Rickipedia & Mortiverse is a full-stack web application created with a MERN stack (MongoDB, Express, React, Node). Casual users can browse character, episode, and location information from the tv show Rick & Morty. Registered users can post and discuss theories about the show.',' ', ' ']
    const slidePics2 = [null, null, null, null, project4, project5, project6]
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`}
                tag="li"
                style={{ listStyle: 'none' }}

        >
                <h4
                style= {{
                    // opacity: "100%",
                }}>{thumbTitles[i]}</h4>
                 
            </SwiperSlide>
        )
    }



    for (let i = 0; i < 3; i += 1) {
        slides.push(
            <SwiperSlide className="slider"
            key={`slide-${i}`}
            >
                <img src={slidePics[i]}
                    style={{
                        width: '100%',
                        height: '%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',

                        
                        // marginBottom: '0',
                        
                        
                        alignSelf: 'center'
                    }}

                    alt={`Slide${i}`}
                />
            </SwiperSlide>
        )
    }

    for (let i = 4; i < 7; i += 1) {
        slides2.push(
            <SwiperSlide key={`slide-${i}`}>
                <h1>{slidePics2[i][0]}</h1>
                <p>{slidePics2[i][1]}</p>
                <button onClick={slidePics2[i][3]}>{slidePics2[i][2]}</button>
                <button onClick={slidePics2[i][5]}>{slidePics2[i][4]}</button>
            </SwiperSlide>
        )
    }



    function projectHub4(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Kombat_Assembly', '_blank');
    }

    function projectDeploy4(e) {
        e.preventDefault()
        window.open('https://kombatassembly.netlify.app/', '_blank');
    }

    function projectHub5(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/sei-tic-tac-toe', '_blank');
    }
    function projectDeploy5(e) {
        e.preventDefault()
        window.open('https://tictacoldtownroad.netlify.app', '_blank');
    }


    return (
        <div className='swiperShow'>
         
            <Swiper id="main" 
            controller={{control: controlledSwipper }}
            effect="cube"
            thumbs={{ swiper: thumbsSwiper }}
            //  direction='vertical'
            navigation 
            pagination
            >
            {slides}
            </Swiper>

            <Swiper id="controller" 
            //  direction='vertical'
            onSwiper={setControlledSwipper}>
                {slides2}
            </Swiper>

            <Swiper id="thumbs" 
            // effect="flip"
            spaceBetween={1}
            slidesPerView={3}
            // direction='vertical'
            onSwiper={setThumbsSwiper}>
                {thumbs}
            </Swiper>


        </div>
    )
}

export default Swipercomp