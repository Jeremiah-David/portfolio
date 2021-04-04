import construction from '../constuction.jpg'

import Stacks from './sections/Stacks'
import ContactMe from './sections/Contact'
import Swipercomp from '../components/tools/Swipercomp'
import About from './sections/About'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState} from 'react'
import SwiperCore, { Navigation, Pagination, Thumbs, Controller, 
    EffectCube, EffectFlip, } from 'swiper'
import 'swiper/swiper-bundle.css'
import '../App.css';
import React from 'react'


SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube, EffectFlip, ])
function Landing() {
   
    const slides = [];
    const slideViews = [<Stacks/> , <About />, <ContactMe /> ]
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const thumbs = []
    const thumbTitles = ['Stacks', 'Meet Jeremiah', 'Contact Me']

    for (let i = 0; i < 3; i += 1) {
        let slideViewsShow = slideViews[i]
        slides.push(
            <SwiperSlide className="slider"
            key={`slide-${i}`}
            >
                {slideViews[i]}
                
            </SwiperSlide>
        )
    }

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

    
    return (
        <div>
 
            <div className='hero'>
                <h1>Jeremiah David</h1>
            </div>
            <div className='title2'>
                <h1>A Full Stack Software Engineer</h1>
            </div>
            <div className="landingTag" >
                <div className="skill1">
                    <p><span className="topPipe" > |</span> Problem Solving </p>
                </div>
                <div className="skill2" >
                    <p><span className="topPipe" > |</span> Teamwork<span className="topPipe" > |</span></p>
                </div>
                <div className="skill4" >
                    <p><span className="topPipe" > |</span> Critical Thinking<span className="topPipe" > |</span></p>
                </div>
                <div className="skill3" >
                    <p>  Creative Design<span className="topPipe" > |</span></p>
                </div>
                <div className="leftSkills">
                <div className="skill6" >
                    <p>Data Structures <span className="landingBottomPipe" > |</span></p>
                </div>
                <div className="skill7" >
                    <p><span className="landingBottomPipe" > | </span>Web API's<span className="landingBottomPipe" > |</span></p>
                </div>
                <div className="skill8" >
                <p><span className="landingBottomPipe" > |</span> Innovative Solutions</p>
                </div>
                <Swiper id="thumbs" className="landingThumbs"
            // effect="flip"
            spaceBetween={10}
            slidesPerView={3}
            direction='vertical'
            onSwiper={setThumbsSwiper}>
                {thumbs}
            </Swiper>

                <Swiper id="main" 
            // controller={{control: controlledSwipper }}
            effect="cube"
            thumbs={{ swiper: thumbsSwiper }}
            navigation 
            pagination>
            {slides}
            </Swiper>
                </div>
            </div>



            <div className="fixed-bottom" >
                <h1> Let's Code </h1>
            </div>
            <div className="construction">
                <h4><img src={construction}/> Site Under Construction! Please visit from Desktop</h4>
               
            </div>

            {/* <VisibilitySensor
    onChange={(isVisible) => {
        console.log('seeMe1')
    }}
>           
        <ContactMe />
        <Stacks />
            </VisibilitySensor> */}
        </div>

    )
}

export default Landing


//landing skills

//margins 

//Dreamers about me

