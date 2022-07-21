import './about.css'
import Snowboard from '../../img/snowboard.png'
import Logo from '../../img/logo.png'

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
        <h4 className='about-sub'>
          NuCamp Full Stack Developer Student<br/>
          Temple University Graduate: Finance<br/>
          Senior Finance Associate at JPMorgan Chase
        </h4>
        <p className='about-desc'>
          I graduated from Temple University FOX School of business with a finance degree. I worked at JPMorgan Chase in the finance department for about 7-8 years before joining NuCamp to pursue coding. I've learned many languages including: React, React Native, JavaScript, HTML, CSS, BootStrap, MongoDB, jsNode, etc. I've worked on various projects to demonstrate my proficiency in the listed languages. Please continue to scroll down to see a small list of projects I've completed or visit my GitHub.
        </p>
        <div className='about-nucamp'>
          <img src={Logo} alt='nucamp logo' className='about-nucamp-img'/>
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