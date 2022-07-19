import './about.css'
import Snowboard from '../../img/snowboard.png'
import Nucamp from '../../img/nucamp.png'

const About = () => {
  return (
    <div className="about">
      <div className='about-left'>
        <div className='about-card bg'></div>
        <div className='about-card'>
          <img src={Snowboard} alt='software engineer coding' className='about-img' />
        </div>
      </div>
      <div className='about-right'>
        <h1 className='about-title'>About Me</h1>
        <p className='about-sub'>
          Some of my hobbies include: Snowboarding, Pickle Ball, Coding, Looking at cars and video games.
        </p>
        <p className='about-desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className='about-nucamp'>
          <img src={Nucamp} alt='nucamp logo' className='about-nucamp-img'/>
          <div className='about-nucamp-texts'>
            <h4 className='about-nucamp-title'>NuCamp BootCamp</h4>
            <p>
              Full Stack Developer student with a concentration on React, React Native, Bootstrap.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;