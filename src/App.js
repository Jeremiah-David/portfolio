import {  Route, Switch  } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import VisibilitySensor from 'react-visibility-sensor'
import { useState } from 'react'

import Stacks from './components/sections/Stacks'
import Landing from './components/Landing'
import Projects from './components/sections/Projects'
import About from './components/sections/About'
import './App.css';
import Navbar from './components/Navbar';
import ContactMe from './components/sections/Contact';
import Swipercomp from"./components/tools/Swipercomp"
import Show from './components/sections/shows/shows'

function App() {

const [stack, setstack] = useState('hide')


  return (
    <div className="App">
      {/* <Landing />

      <Stacks stack ={stack}/>
     

<VisibilitySensor
    onChange={(isVisible) => {
        console.log('seeMe2')
        setstack('contact')
        console.log('stackinview', stack)
    }} >
      <ContactMe stack ={stack}/>
      </VisibilitySensor> */}
      <Navbar />
    <Switch>
      
      <Route exact path="/" component={ Landing } />
      <Route path="/stacks" component= {Stacks} />
      <Route path="/projects" component= { Swipercomp } />
      <Route path="/about" component= { About } />
      <Route path="/contact" component= { ContactMe} />
      <Route path="/show" component= { Show } />
      </Switch>
      {/* <myFooter /> */}
    </div>
  );
}

export default App;
