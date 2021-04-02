import { useState } from 'react'
import projectOnePic from '../../kombat.png'
import projectTwoPic from '../../tictac.png'
import projectThreePic from '../../rick.png'
import eugenewater from '../../eugenewater.jpg'






function Projects() {
    const [project, setProject] = useState("")
    const [projectPic, setProjectPic] = useState(eugenewater)
    const [tag, setTag] = useState("tagStack")
    const [projectDescription, setProjectDescription] = useState("")

    let projectOneText = "This is project one. It is really cool"
    let projectTwoText = "This is project two. It is also cool"
    let projectThreeText = "This is project three! SO COOL!"




    function projectOneClick(e) {
        e.preventDefault()
        setTag("tagStackGone")
        setProject("projectOne")
        setProjectDescription(projectOneText)
        setProjectPic(projectOnePic)
    }

    function projectOneHub(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Kombat_Assembly', '_blank');
    }

    function projectOneDeploy(e) {
        e.preventDefault()
        window.open('https://kombatassembly.netlify.app/', '_blank');
    }

    function projectTwoClick(e) {
        e.preventDefault()
        setTag("tagStackGone")
        setProject("projectOne")
        setProjectDescription(projectTwoText)
        setProjectPic(projectTwoPic)

    }

    function projectTwoHub(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Kombat_Assembly', '_blank');
    }


    function projectThreeClick(e) {
        e.preventDefault()
        setTag("tagStackGone")
        setProject("projectThree")
        setProjectDescription(projectThreeText)
        setProjectPic(projectThreePic)

    }

    function projectThreeClientHub(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Rickipedia', '_blank');
    }
    function projectThreeServerHub(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Mortiverse', '_blank');
    }


    return (
        <>
            <div className='stackTitle'>
                <h1>Projects</h1>
                <p>More on my github @ <a href="https://github.com/Jeremiah-David" target="_blank">https://github.com/Jeremiah-David</a></p>
                <div className='Projects' />
                <div className="kombat" >
                    <div className="projectText" >
                   <h4>Kombat Assembly</h4>
                    <p>A super neat java html css game</p>
                    </div>
                    <button onClick={projectOneClick}>See it!</button>
                    <button onClick={projectOneHub}>Check out the repo</button>
                    <button onClick={projectOneDeploy}>Play it!</button>
                </div>
                <div className="project2">
                <div className="projectText" >
                    <h4>Tic Tac Old Town Road</h4>
                    <p>Uses Javascript and CSS to make a stylistic Tic Tac Toe game.</p>
                    </div>
                    <button onClick={projectTwoClick}>See it!</button>
                    <button onClick={projectTwoHub}>Check out the repo</button>
                </div>
                <div className="project3" >
                <div className="projectText" >
                    <h4>Rickipedia & Mortiverse</h4>
                    <p>Full Stack app using express, ejs, and SQL to store and compare fortnight users and stats</p>
                    </div>
                    <button onClick={projectThreeClick}>See it!</button>
                    <button onClick={projectThreeClientHub}>Check out the repo for the Front End</button>
                    <button onClick={projectThreeServerHub}>Check out the repo for the Back End</button>
                </div>
                {/* <div className="project4" >
                <div className="projectText" >
                    <h4>Project4</h4>
                    <p>adsfsadfasdftore and compare fortnigh$%t users asadfasnd stats</p>
                    <button onClick={projectOneClick}>See it!</button>
                    </div>
                </div> */}

            </div>

            <div className="projectPicDiv">
                <img src={projectPic} width="100%" />
                <div className="projectText">
                    <p>
                        {projectDescription}
                    </p>
                </div>
            </div>
            <div className="fixed-bottom">
                <h1> Let's Code </h1>
            </div>







        </>

    )
}

export default Projects