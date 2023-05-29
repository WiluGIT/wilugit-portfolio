import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useKeyboardControls } from '@react-three/drei';
import { Hero, About, Experience, Tech, Works, Navbar, Contact, StarsCanvas } from './components';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary background-gradient'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative'>
            <Hero />
            <StarsCanvas />
          </div>
        </div>
        <About />
        <Tech />
        <Experience />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App