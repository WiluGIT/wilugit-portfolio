import { BrowserRouter } from 'react-router-dom';
import { Hero, About, Experience, Tech, Works, Navbar, Contact, StarsCanvas } from './components';

function App() {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary background-gradient'>
        <div className='bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <div className='relative'>
            <Hero />
            <About />
            <StarsCanvas />
          </div>
        </div>
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