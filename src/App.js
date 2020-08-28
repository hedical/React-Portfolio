import React, { useState, useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import Intro from './components/Intro';
import Projects from './components/Projects';
import Sidebar from './components/Sidebar';
import AnimationLoader from './components/AnimationLoader';



function App() {

  // Setting states for animation loader, in order to be able to hide the animation after 3sec and show the text
  const [animation, setAnimation] = useState(false);
  const [main, setMain] = useState(true);

  // useEffect to change the states of our divs
  useEffect(() => {
    const display = setTimeout(() => {
      setMain(false)
      setAnimation(true)
    }, 3000)
  }, [])

  return (
    <div className="App">
      <Nav />
      <Sidebar />
      <AnimationLoader hidden={animation} />
      {main
        ? <></>
        : <main className="ml-5">
          <Intro />
          <Projects />
        </main>}
    </div>
  );
}

export default App;


