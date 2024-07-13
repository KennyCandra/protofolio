import { BsGithub } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter , FaLinkedin  } from "react-icons/fa6";
import './Hero.css'
import  img from '../../assets/images/WhatsApp Image 2024-07-09 at 01.10.27.jpeg'
import developerAnimation from "../../../public/animation/Animation - 1720835237078.json";
import Lottie from "lottie-react";

const Hero = () => {

  const socialMedia = [
    {
      id: 1,
      icon: <FaXTwitter />,
      url : 'https://x.com/Kenny_Candra'
    },
    {
      id: 2,
      icon: <AiFillInstagram />,
      url : 'https://www.instagram.com/ahmed_abderhman14/'
    },
    {
      id: 3,
      icon: <BsGithub />,
      url : 'https://github.com/KennyCandra'
    },
    {
      id: 4,
      icon: <FaLinkedin />,
      url : 'https://www.linkedin.com/in/ahmed-abdelrhaman-89bbb3203/'
    },
  ]
  return (
    <section className="hero flex" style={{justifyContent : 'space-evenly'}}>
      <div className="left-section">
        <div className="avatar"><img src ={img} /></div>
        <div className="heading"><h1>Pharmacist and Fronted Developer</h1></div>
        {/* <div className="description"><p> I’m Ali Hassan, a software designer and entrepreneur based in New York
          City. I’m the founder and CEO of Planetaria, where we develop
          technologies that empower regular people to explore space on their own
          terms.</p></div> */}
          <div className="icons flex">
            {socialMedia.map(({ id, icon, url }) => {
              return (
                <div className="social-icons" key={id}>
                  <a href={url} target="_blank" rel="noreferrer">
                    {icon}
                  </a>
                </div>
              )
            })}
          </div>
      </div>
      <div className="right-section">
          <Lottie animationData={developerAnimation} loop={true} style={{width : '1000px' , height : '500px'}}/>
      </div>
    </section>
  )
}

export default Hero