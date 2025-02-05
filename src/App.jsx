import{Menu,X} from 'lucide-react'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import images from '../public/Images'
import navitems from './assets/Navitems'
import Features from './Features.jsx'
import Workflow from './Workflow.jsx'




function App() {

  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Workflow />
   
    </div>
  
  );
}

export default App
