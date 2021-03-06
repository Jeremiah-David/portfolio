import familyPic from '../../family.jpg'

function About() {
    return (
        <div className='about'>
            <div className="familyPic">
                <img className="familyImg" src={familyPic} alt='Family' />
            </div>
            <div className="weAre" >
                <h4>We are Family</h4>
            </div>
            <div className="dreamer">
                <h4>We are the Dreamers</h4>
            </div>

            <div className="aboutMe">

                <div className="aboutText" >
                    <p> I'm a Front-End Developer located in Eugene, OR. I have serious passion for React, Javascript, and creating new ways to experience the web. I am willing to relocate, and love to work remote. Let's code something amazing. </p>
                </div>
            </div>


        </div>

    )
}

export default About