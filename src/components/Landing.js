import construction from '../constuction.jpg'
// import Stacks from './sections/Stacks'
// import VisibilitySensor from 'react-visibility-sensor'
import ContactMe from './sections/Contact'
import Stacks from './sections/Stacks'
// import ContactMe from './sections/Contact'

function Landing() {

   

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

