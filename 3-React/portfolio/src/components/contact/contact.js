import './contact.css'
import Phone2 from '../../img/phone2.png';
import Email2 from '../../img/email2.png';
import GitHub from '../../img/github.png';
import Linkedin from '../../img/linkedin.png'
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
      e.preventDefault();
      
      emailjs.sendForm(
        'service_sp7t34e', 
        'template_gyb9d5o', 
        formRef.current, 
        'EfiEzCKHPneNETXu7')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
    }

  return (
    <div className="c">
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's Connect!</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <img
                src={Phone2} 
                alt=''
                className='c-icon'
              />
              267-818-0847
            </div>
            <div className='c-info-item'>
              <img
                src={Email2} 
                alt=''
                className='c-icon'
              />
              calvin.w.chung@gmail.com
            </div>
            <div className='c-info-item'>
              <img
                src={Linkedin} 
                alt=''
                className='c-icon'
              />
              Linkedin
            </div>
            <div className='c-info-item'>
              <img
                src={GitHub} 
                alt=''
                className='c-icon'
              />
              GitHub
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
          Feel free to contact me via <b>email or phone!</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Name' name='user_name'/>
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Phone Number' name='user_number'/>
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Email' name='user_email'/>
            <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message'/>
            <button>Submit</button>
            {done && 'Thank you..'}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;