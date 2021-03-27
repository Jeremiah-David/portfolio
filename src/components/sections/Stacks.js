import html5 from "../../html5.jpg"
import css from "../../css.png"
import JavaScript from "../../javascript.png"
import node from "../../nodejs.png"
import express from "../../express.png"
import react from "../../react.png"
import python from '../../python.png'
import sql from "../../SQL.jpg"
import mongo from '../../mongo.png'
import eugeneroads from '../../eugeneroads.jpg'



function Stacks() {
    return (
        <>
            <div className="waterPic">
                <img src={eugeneroads} />
            </div>
            <div className='stackTitle'>
                <h1>Technology Stacks</h1>
            </div>
            <div className='stackList' >
                <ul>

                    <li><img src={html5} />HTML5 </li>

                    


                    <li>
                        <img src={css} />CSS  <span className="bottomPipe" > | </span>
                        <span className="bootstrap" >Bootstrap</span><span className="bottomPipe" > | </span>
                        <span className="reactive" >Reactive Web Design</span>
                        </li>
                    <li>
                        <img src={JavaScript} />JavaScript<span className="bottomPipe" > | </span>
                        <span className="es6" >ES6</span>
                        </li>
                    <li>
                        <img src={express} />Express<span className="bottomPipe" >|</span>
                        <span className="ejs" > EJS </span><span className="bottomPipe" > |</span>
                        <span className="rest" > CRUD/RESTful routing </span>
                        
                    </li>
                    <li>
                        <img src={react} />React <span className="bottomPipe" > | </span>
                        <span className="redux" > Redux </span><span className="bottomPipe" >|</span>
                        <span className="socket" > Socket.io </span><span className="bottomPipe" >|</span>
                        <span className="next" > Next.js </span>
                        
                    </li>
                    <li>
                        <img src={python} />Python <span className="bottomPipe" >|</span>
                        <span className="flask" > Flask </span>
                    </li>
                    <li>
                        <img src={sql} />SQL <span className="bottomPipe" >|</span>
                        <span className="postgre" > PostgreSQL </span><span className="bottomPipe" >|</span>
                        <span className="sequelize" > Sequelize </span>

                    </li>
                    <li>
                        <img src={mongo} />MongoDB <span className="bottomPipe" >|</span>
                        <span className="mongoose" > Mongoose <span className="bottomPipe" >|</span></span><span className="atlas"> mongoDB Atlas</span>
                    </li>
                </ul>
            </div>


            <div className="tagStack">
                <h1> Let's Code </h1>
            </div>


            {/* <div className="subStack"> */}
            {/* <div className="Mongoose" > */}

            {/* </div> */}
            {/* </div> */}

        </>

    )
}

export default Stacks