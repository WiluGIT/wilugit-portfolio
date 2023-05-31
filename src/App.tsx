import { HashRouter } from 'react-router-dom';
import { Hero, About, Experience, Tech, Works, Navbar, Contact } from './components';
import { StarsCanvas } from './components/canvas';
import { Loader } from '@react-three/drei';
import { LoaderStyles } from './constants';

function App() {
  return (
    <HashRouter >
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
      <Loader
        containerStyles={LoaderStyles.container}
        barStyles={LoaderStyles.bar}
        dataStyles={LoaderStyles.data}
        dataInterpolation={(p) => `Loading { Wilczek Dev }; ${p.toFixed(2)}`}
      />
    </HashRouter >
  )
}

export default App