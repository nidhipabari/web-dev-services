
import './App.css'
import AboutUs from './components/AboutUs'
import Craft from './components/Craft'
import FooterPartOne from './components/FooterPartOne'
import FooterPartTwo from './components/FooterPartTwo'
import Header from './components/Header'
import Info from './components/Info'
import Navigating from './components/Navigating'
import Numbers from './components/Numbers'
import Optim from './components/Optim'
import PricingComponent from './components/Pricing'
import Solutions from './components/Solutions'
import StayTuned from './components/StayTuned'
import Success from './components/Success'
import Trust from './components/Trust'
import Why from './components/Why'

function App() {
  

  return (
    <div className="App">
      <Header/>
      <AboutUs/>
      <Info/>
      <Success/>
      <Numbers/>
      <Navigating/>
      <Optim/>
      <Solutions/>
      
      <PricingComponent/>
      <Craft/>
      <Trust/>
      <Why/>
      <StayTuned/>
      <FooterPartOne/>
      <FooterPartTwo/>
    </div>
  )
}

export default App
