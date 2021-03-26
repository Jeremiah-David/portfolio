import {  Route, Switch  } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'


import Stacks from './components/sections/Stacks'
import Landing from './components/Landing'
import Projects from './components/sections/Projects'
import About from './components/sections/About'



import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
    <Switch>
     
      <Route exact path="/" component={ Landing } />
      <Route path="/stacks" component= {Stacks} />
      <Route path="/projects" component= { Projects } />
      <Route path="/about" component= { About } />
      </Switch>
    </div>
  );
}

export default App;
