import './App.css'
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
