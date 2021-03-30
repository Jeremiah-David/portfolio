
import familyPic from '../../family.jpg'



function About() {
    return (
        <>
            <div className='aboutTitle'>
                <h1>The Family</h1>
            </div>
            <div className="familyPic">
                <img src={familyPic} alt='Family' />
            </div>
            
            <div className="weAre" >
                <h1>We are Family</h1>
            </div>
            <div className="aboutText" >
                <p> I'm a Front-End Developer Eugene, OR. I have serious passion for React, Javascript, and creating new ways to experience the web. Let's code something amazing. </p>
            </div>
            <div className="dreamer">
                <h1>We are the Dreamers</h1>
            </div>


        </>

    )
}

export default About