import { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

import html5 from "../../html5.jpg"
import css from "../../css.png"
import JavaScript from "../../javascript.png"
import express from "../../express.png"
import react from "../../react.png"
import python from '../../python.png'
import sql from "../../SQL.jpg"
import mongo from '../../mongo.png'
import eugeneroads from '../../eugeneroads.jpg'



function Stacks(props) {

    let stackViews = props.stack
    console.log("this is props", props.stack)
    const [stacks, setStacks] = useState("hide")

    if (stackViews == 2) {
        console.log(stackViews, "this is stackviews")
        // setStacks('stack') 
        console.log('this is stacl', stacks)

    }

    //    changePage()




    return (

        <div className="Stacks">
            {/* <div className="waterPic">
                <img src={eugeneroads} />
            </div> */}
            <div className='stackTitle'>

                <h3>Technology Stacks</h3>
            </div>
            <div className='stackList' >
                <ul>

                    <li><img className="icon" src={html5} /> HTML5 </li>
                    <li>
                        <img className="icon" src={css} /> CSS  <span className="bottomPipe" > | </span>
                        <span className="reactive" > Reactive Web Design </span><span className="bottomPipe" > | </span>
                        <span className="bootstrap" > Bootstrap </span>
                    </li>
                    <li>
                        <img className="icon" src={JavaScript} /> JavaScript<span className="bottomPipe" > | </span>
                        <span className="es6" >ES6</span>
                    </li>
                    <li>
                        <img className="icon" src={express} /> Express <span className="bottomPipe" >|</span>
                        <span className="ejs" > EJS </span><span className="bottomPipe" > | </span><span className="rest" >  CRUD/RESTful Routing </span>

                    </li>
                    <li>
                        <img className="icon" src={react} /> React <span className="bottomPipe" > | </span>
                        <span className="redux" > Redux </span> <span className="bottomPipe" >|</span>
                        <span className="socket" > Socket.io </span> <span className="bottomPipe" >|</span>
                        <span className="next" > Next.JS </span>

                    </li>
                    <li>
                        <img className="icon" src={python} /> Python <span className="bottomPipe" >|</span>
                        <span className="flask" > Flask </span>
                    </li>
                    <li>
                        <img className="icon" src={sql} /> SQL <span className="bottomPipe" >|</span>
                        <span className="postgre" > PostgreSQL </span><span className="bottomPipe" >|</span>
                        <span className="socket" > Sequelize </span>

                    </li>
                    <li>
                        <img className="icon" src={mongo} /> MongoDB <span className="bottomPipe" >|</span>
                        <span className="socket" > Mongoose </span> <span className="bottomPipe" > | </span><span className="atlas"> mongoDB Atlas</span>
                    </li>
                </ul>
            </div>


            {/* <div className="fixed-bottom">
                <h1> Let's Code </h1>
            </div> */}


            {/* <div className="subStack"> */}
            {/* <div className="Mongoose" > */}

            {/* </div> */}
            {/* </div> */}

        </div>

    )
}

export default Stacks