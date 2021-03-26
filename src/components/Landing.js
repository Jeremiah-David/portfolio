import eugeneWater from '../eugenewater.jpg'
import dad from '../Dad.jpg'
import greenForest from '../greenForest.jpg'


function Landing() {
    return (
        <div className="landing">
            {/* <div className="waterPic">
                <img src={greenForest} />
            </div> */}
            <div className='hero'>
                <h1>Jeremiah David</h1>
            </div>
            <div className='title2'>
                <h1>A Full Stack Software Engineer</h1>
            </div>
            <div className="landingTag" >
                <div className="skill1">
                    <p>| Problem Solving </p>
                </div>
                <div className="skill2" >
                    <p>| Teamwork |</p>
                </div>
                <div className="skill4" >
                    <p>| Critical Thinking |</p>
                </div>
                <div className="skill3" >
                    <p> Creativity |</p>
                </div>
            </div>



            <div className="tagStack">
                <h1> Let's Code </h1>
            </div>


        </div>

    )
}

export default Landing