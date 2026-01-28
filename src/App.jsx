import './App.css'
<<<<<<< HEAD
=======
import * as bootstrap from 'bootstrap';
>>>>>>> 7603237923d99bbac572894bdcbb5260772bb522
import { Navigation } from './Components/Navigation';
import { AboutTheCourse } from './Components/AboutTheCourse';
import { WelcomeBlock } from './Components/Welcome/WelcomeBlock';
import { Rate } from './Components/Rate/Rate';
import { FAQ } from './Components/FAQ';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className='mx-auto'>
      <Navigation />
      <WelcomeBlock />
      <AboutTheCourse />
      <Rate />
      <FAQ />
      <Footer />
    </div>
    
  )
}

export default App
