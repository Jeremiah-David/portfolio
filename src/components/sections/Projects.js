import { useState } from 'react'
import projectOnePic from '../../kombat.png'
import projectTwoPic from '../../zelda.jpg'
import projectThreePic from '../../feen.jpg'
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

    function projectThreeHub(e) {
        e.preventDefault()
        window.open('https://github.com/Jeremiah-David/Kombat_Assembly', '_blank');
    }


    return (
        <>
            <div className='stackTitle'>
                <h1>Projects</h1>
                <p>More on my github @ <a href="https://github.com/Jeremiah-David" target="_blank">https://github.com/Jeremiah-David</a></p>
                <div className='Projects' />
                <div className="kombat" >
                    <a href="https://github.com/Jeremiah-David/Kombat_Assembly">Kombat Assembly</a>
                    <p>A super neat java html css game</p>
                    <button onClick={projectOneClick}>See it!</button>
                    <button onClick={projectOneHub}>Check out the repo</button>
                    <button onClick={projectOneDeploy}>Play it!</button>
                </div>
                <div className="fortnite">
                    <a href="https://github.com/Jeremiah-David/Fortnite_Rivals">Fortnite Rivals</a>
                    <p>Full Stack app using express, ejs, and SQL to store and compare fortnight users and stats</p>
                    <button onClick={projectTwoClick}>See it!</button>
                    <button onClick={projectTwoHub}>Check out the repo</button>
                </div>
                <div className="project3" >
                    <a href="https://github.com/Jeremiah-David/Fortnite_Rivals">Project3</a>
                    <p>Full Stack app using express, ejs, and SQL to store and compare fortnight users and stats</p>
                    <button onClick={projectThreeClick}>See it!</button>
                    <button onClick={projectThreeHub}>Check out the repo</button>
                </div>
                <div className="project4" >
                    <a href="https://github.com/Jeremiah-David/Fortnite_Rivals">Project4</a>
                    <p>adsfsadfasdftore and compare fortnigh$%t users asadfasnd stats</p>
                    <button onClick={projectOneClick}>See it!</button>
                </div>

            </div>

            <div className="projectPicDiv">
                <img src={projectPic} height="300" />
                <div className="projectText">
                    <p>
                        {projectDescription}
                    </p>
                </div>
            </div>
            <div className={tag}>
                <h1> Let's Code </h1>
            </div>







        </>

    )
}

export default Projects