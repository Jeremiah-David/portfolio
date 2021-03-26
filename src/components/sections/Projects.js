import eugenewater from '../../eugenewater.jpg'



function Projects() {
    return (
        <>
            <div className='stackTitle'>
                <h1>Projects</h1>
                <p>More on my github @ </p>
                <div className='Projects' />
                    <div className="kombat" >
                    <a href="https://github.com/Jeremiah-David/Kombat_Assembly">Kombat Assembly</a>
                    <p>A super neat java html css game</p>
                    </div>
                    <div className="fortnite">
                    <a href="https://github.com/Jeremiah-David/Fortnite_Rivals">Fortnite Rivals</a>
                    <p>Full Stack app using express, ejs, and SQL to store and compare fortnight users and stats</p>
                    </div>
                    <div className="project3" >
                    <a href="https://github.com/Jeremiah-David/Fortnite_Rivals">Project3</a>
                    <p>Full Stack app using express, ejs, and SQL to store and compare fortnight users and stats</p>
                    </div>
                    <div className="project4" >
                    <a href="https://github.com/Jeremiah-David/Fortnite_Rivals">Project4</a>
                    <p>adsfsadfasdftore and compare fortnigh$%t users asadfasnd stats</p>
                    </div>

            </div>

            <div className="waterPic">
                <img src={eugenewater} />
            </div>
            <div className="tagStack">
                <h1> Let's Code </h1>
            </div>




        </>

    )
}

export default Projects