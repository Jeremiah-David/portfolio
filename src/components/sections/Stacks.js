import html5 from "../../html5.jpg"
import css from "../../css.png"
import JavaScript from "../../javascript.png"
import express from "../../express.png"
import react from "../../react.png"
import python from '../../python.png'
import sql from "../../SQL.jpg"
import mongo from '../../mongo.png'

function Stacks(props) {

    return (

        <div className="Stacks">

            <div className='stackTitle'>

                <h3 className='stackTitleText'>Technology Stacks</h3>
            </div>
            <div className='stackList' >
                <ul>

                    <li><img className="icon" src={html5} alt="" /> HTML5 </li>
                    <li>
                        <img className="icon" src={css} alt="" /> CSS  <span className="bottomPipe" > | </span>
                        <span className="reactive" > Reactive Web Design </span><span className="bottomPipe" > | </span>
                        <span className="bootstrap" > Bootstrap </span>
                    </li>
                    <li>
                        <img className="icon" src={JavaScript} alt="" /> JavaScript<span className="bottomPipe" > | </span>
                        <span className="es6" >ES6</span>
                    </li>
                    <li>

                        <img className="icon" src={express} alt="" /> Express <span className="bottomPipe" >|</span>
                        <span className="ejs" > EJS </span><span className="bottomPipe" > | </span><span className="rest" >  CRUD/RESTful Routing </span>

                    </li>
                    <li>
                        <img className="icon" src={react} alt="" /> React <span className="bottomPipe" > | </span>
                        <span className="redux" > Redux </span> <span className="bottomPipe" >|</span>
                        <span className="socket" > Socket.io </span> <span className="bottomPipe" >|</span>
                        <span className="next" > Next.JS </span>

                    </li>
                    <li>
                        <img className="icon" src={python} alt="" /> Python <span className="bottomPipe" >|</span>
                        <span className="flask" > Flask </span>
                    </li>
                    <li>
                        <img className="icon" src={sql} alt="" /> SQL <span className="bottomPipe" >|</span>
                        <span className="postgre" > PostgreSQL </span><span className="bottomPipe" >|</span>
                        <span className="socket" > Sequelize </span>

                    </li>
                    <li>
                        <img className="icon" src={mongo} alt="" /> MongoDB <span className="bottomPipe" >|</span>
                        <span className="socket" > Mongoose </span> <span className="bottomPipe" > | </span><span className="atlas"> mongoDB Atlas</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Stacks