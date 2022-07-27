import './contact.css'
import { useContext, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { ThemeContext } from '../../context';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import { AiFillGithub } from 'react-icons/ai';

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
      e.preventDefault();
      
      emailjs
        .sendForm(
          "service_sp7t34e", 
          "template_gyb9d5o", 
          form.current, 
          "EfiEzCKHPneNETXu7"
        )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      }
    );
  }

  return (
    <div className="c">
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'>Let's Connect!</h1>
          <div className='c-info'>
            <div className='c-info-item'>
              <BsPhone className='c-icon'/>
              267-818-0847
            </div>
            <div className='c-info-item'>
              <AiOutlineMail className='c-icon'/>
              calvin.w.chung@gmail.com
            </div>
            <div className='c-info-item'>
              <a className='linked' href='https://www.linkedin.com/in/calvin-chung-b02b8416a/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineLinkedin className='c-icon'/> 
              </a>
              <a className='linked' href='https://www.linkedin.com/in/calvin-chung-b02b8416a/' target='_blank' rel='noopener noreferrer'>
                Linkedin
              </a>
            </div>
            <div className='c-info-item'>
              <a className='git' href='https://github.com/calvinwchung' target='_blank' rel='noopener noreferrer'>
                <AiFillGithub className='c-icon'/> 
              </a>
              <a className='git' href='https://github.com/calvinwchung' target='_blank' rel='noopener noreferrer'>  
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className='c-right'>
          <p className='c-desc'>
          Feel free to contact me via <b>email or phone!</b>
          </p>
          <form ref={form} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Name' name='user_name'/>
            <input style={{backgroundColor: darkMode && '#333'}} type='text' placeholder='Phone Number' name='user_number'/>
            <input style={{backgroundColor: darkMode && '#333'}} type='email' placeholder='Email' name='user_email'/>
            <textarea style={{backgroundColor: darkMode && '#333'}} rows='5' placeholder='Message' name='message'/>
            <button type='submit'>Submit</button>
            {done && alert('Thank you!')}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;