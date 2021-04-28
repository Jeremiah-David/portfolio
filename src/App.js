import {  Route, Switch  } from 'react-router-dom';
import Stacks from './components/sections/Stacks'
import Landing from './components/Landing'
import About from './components/sections/About'
import './App.css';
import Navbar from './components/Navbar';
import ContactMe from './components/sections/Contact';
import Swipercomp from"./components/tools/Swipercomp"
import Show from './components/sections/shows/shows'



function App() {

  return (
    <div className="App">

      <Navbar />
    <Switch>
      
      <Route exact path="/" component={ Landing } />
      <Route path="/stacks" component= {Stacks} />
      <Route path="/projects" component= { Swipercomp } />
      <Route path="/about" component= { About } />
      <Route path="/contact" component= { ContactMe} />
      <Route path="/show" component= { Show } />
      </Switch>
    </div>
  );
}

export default App;
