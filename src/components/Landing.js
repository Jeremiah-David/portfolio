

import Stacks from './sections/Stacks'
import ContactMe from './sections/Contact'
import About from './sections/About'
import MyResume from './sections/resume'

import { Swiper, SwiperSlide } from 'swiper/react'
import { useState} from 'react'
import SwiperCore, { Navigation, Pagination, Thumbs, Controller, 
    EffectCube, EffectFlip, } from 'swiper'
import 'swiper/swiper-bundle.css'
import '../App.css';



SwiperCore.use([Navigation, Pagination, Thumbs, Controller, EffectCube, EffectFlip, ])
function Landing() {
   
    const slides = [];
    const slideViews = [<Stacks/> , <About />, <ContactMe />, <MyResume />]
    const [thumbsSwiper, setThumbsSwiper] = useState(null)
    const thumbs = []
    const thumbTitles = ['Stacks', 'Meet Jeremiah', 'Contact Me', "My Resume"]

    for (let i = 0; i < 4; i += 1) {
        let slideViewsShow = slideViews[i]
        slides.push(
            <SwiperSlide className="slider"
            key={`slide-${i}`}
            >
                {slideViews[i]}
                
            </SwiperSlide>
        )
    }

    for (let i = 0; i < 4; i += 1) {
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
                <h2>Jeremiah David</h2>
            </div>
            <div className='title2'>
                <h4>A Full Stack Software Engineer</h4>
            </div>
            <div className="landingTag" >
                
            
             
            
                <div >
      
        
                <Swiper id="thumbs" className="landingThumbs"
            // effect="flip"
            spaceBetween={20}
            slidesPerView={3}
            direction='vertical'
            onSwiper={setThumbsSwiper}>
                {thumbs}
            </Swiper>

                <Swiper id="main" 
            // controller={{control: controlledSwipper }}
            effect="cube"
            className="landingSwiper"
            thumbs={{ swiper: thumbsSwiper }}
            // direction='vertical'
            loop={true}
            navigation 
            pagination>
                
            {slides}
            </Swiper>
                </div>
            </div>



            <div className="fixed-bottom" >
                <h1> Let's Code </h1>
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

