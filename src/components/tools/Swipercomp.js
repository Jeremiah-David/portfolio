import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import SwiperCore, {
    Navigation, Pagination, Thumbs, Controller,
    EffectCube
} from 'swiper'
import 'swiper/swiper-bundle.css'
import '../../App.css';
import React from 'react'


SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube])

function Swipercomp() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const [controlledSwipper, setControlledSwipper] = useState(null)
    const slides = [];
    const slides2 = [];
    const thumbs = []
    const slidePics = ['https://i.imgur.com/huh2aol.png?1?', 'https://i.imgur.com/eBt5g5l.png?1', 'https://i.imgur.com/ZbIQNsh.png?', 'https://i.imgur.com/02Sys4M.png?2']
    const thumbTitles = ['Kombat Assembly', 'Tic Tac Old Town Road', 'Rickipedia & Mortiverse', "My Portfolio", null,null]
    const project7 = ['My Portfolio',
        'My portfolio is a React App. I use React Slider to allow the user to look at components that represent myself on the landing, and multuple React Sliders on my projects page to show my projects. CSS keyframes where used to make a more engaging presention.', 'Check out the repo', projectHub7, null, null,null,null]
    const project4 = ['Kombat Assembly',
        'Kombat Assembly is a browser game written in Javascript, HTML, & CSS. A turned based fighting game where you, as a Cat turned human, fight the temple Caretaker. Two player mode and secret link to Orignal Doom included', 'See it!', projectDeploy4, 'Check out the repo', projectHub4,null,null]
    const project5 = ['Tic Tac Old Town Road',
        'Uses Javascript and CSS to make a stylistic Tic Tac Toe game.', 'See it!', projectDeploy5, 'Check out the repo', projectHub5, null, null]
    const project6 = ['Rickipedia & Mortiverse',
        'Rickipedia & Mortiverse is a full-stack web application created with a MERN stack (MongoDB, Express, React, Node). Casual users can browse character, episode, and location information from the tv show Rick & Morty. Registered users can post and discuss theories about the show.', 'See it!', projectDeploy6, 'Check out the repo for the Front-End', projectHub6Front, 'Check out the repo for the Back-End', projectHub6Back]
    const slidePics2 = [null, null, null, null, project4, project5, project6, project7]
    
    for (let i = 0; i < 5; i += 1) {
        thumbs.push(
            <SwiperSlide key={`thumb-${i}`}
                tag="li"
                style={{ listStyle: 'none' }}

            >
                <h4
                    style={{
                    }}>{thumbTitles[i]}</h4>

            </SwiperSlide>
        )
    }



    for (let i = 0; i < 4; i += 1) {
        slides.push(
            <SwiperSlide className="slider"
                key={`slide-${i}`}
            >
                <img src={slidePics[i]}
                    style={{
                        width: '100%',
                        height: '100%',
                        display: 'block',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        alignSelf: 'center'
                    }}
                    alt={`Slide${i}`}
                />
            </SwiperSlide>
        )
    }





    for (let i = 4; i < 8; i += 1) {
        slides2.push(
            <SwiperSlide key={`slide-${i}`}>
                <h1>{slidePics2[i][0]}</h1>
                <button onClick={slidePics2[i][3]}>{slidePics2[i][2]}</button>
                <button className={`button1-${i}`} onClick={slidePics2[i][5]}>{slidePics2[i][4]}</button>
                <button className={`button2-${i}`} onClick={slidePics2[i][7]}>{slidePics2[i][6]}</button>
                <h5>{slidePics2[i][1]}</h5>
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

    function projectDeploy6(e) {
        e.preventDefault()
        window.open('https://rickipedia.herokuapp.com/', '_blank');
    }

    function projectHub6Front(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Rickipedia', '_blank');
    }

    function projectHub6Back(e) {
            e.preventDefault()
            window.open('https://github.com/Jeremiah-David/Mortiverse', '_blank');
    }
    function projectHub7(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/portfolio', '_blank');
    }


    return (
        <div className='swiperShow'>

            <Swiper id="main"
                controller={{ control: controlledSwipper }}
                effect="cube"
                thumbs={{ swiper: thumbsSwiper }}
                navigation
                pagination
            >
                {slides}
            </Swiper>

            <Swiper id="controller"
                className="projectDescriptions"
                effect="cube"
                onSwiper={setControlledSwipper}>
                {slides2}
            </Swiper>

            <Swiper id="thumbs" className="landingThumbs"
                spaceBetween={20}
                slidesPerView={5}
                direction='vertical'
                onSwiper={setThumbsSwiper}>
                {thumbs}
            </Swiper>




        </div>
    )
}

export default Swipercomp