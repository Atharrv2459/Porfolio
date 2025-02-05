import { FaPython } from "react-icons/fa"
import './App1.css'
import { useState } from 'react'
import myImage from "./MyImage.jpeg"
import { SocialMedia } from "./images2"
import Navbar from "./Navbar1"
import Skills from "./Skills"
import About from "./About1"
import ImageSlider from "./Certificates"
import { SiFacebook , SiInstagram , SiLinkedin , SiGithub , SiGmail } from "react-icons/si"
import ContactForm from "./ContactForm"
function App(){
    return(<div className="bg-gradient-to-r">
        <Navbar />
        <div className='flex flex-row my-10 justify-center relative gap-28 top-28 right-28'>
            <div className='flex flex-col gap-5'>
                <div className='text-7xl font-bold text-yellow-500'>
                    Hi I am Atharrv,
                </div>
                <div className='text-5xl'>I am Front end developer</div>
                <div className="flex flex-row gap-5 my-20">
                    {SocialMedia.map((item,index) => (
                        <div className="flex">
                            <a key={index} href={item.src} className="hover:text-yellow-500">{item.icon}</a>
                            </div>

                    ))
                    }

                </div>


                </div>
                <div><img src={myImage} className="rounded-full h-40 w-40"></img></div>
                </div>
                <About />
                
                <Skills />
                <ImageSlider />
                <br></br>
                <br>
                </br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                

                <ContactForm />

                </div>

            
                
        
    )
}
export default App