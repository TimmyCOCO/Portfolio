import './contact.css'
import Email from '../../img/icon/email.png'
import LinkedIn from '../../img/icon/linkedin.png'
import Portfolio from '../../img/icon/portfolio.png'
import GitHub from '../../img/icon/github.png'
import { useRef, useState, useContext } from 'react'

import emailjs from '@emailjs/browser';

import { ThemeContext } from '../../context'

const Contact = () => {

    const theme = useContext(ThemeContext)
    const darkMode = theme.state.darkMode


    // for form
    const formRef = useRef(null)

    const [user_name, setUser_name] = useState(null)
    const [user_email, setUser_email] = useState(null)
    const [user_subject, setUser_subject] = useState(null)
    const [user_message, setUser_message] = useState(null)


    const [done, setDone] = useState(false)

    const [error, setError] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault()

        let validate = true

        // regex for check email format
        let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        // validate
        if (user_name === null && user_email === null
            && user_subject === null && user_message === null) {
            setError("Error! Please check again! XD")

            validate = false
        }
        else if (!user_email.match(emailFormat)) {
            setError("Error! It seems your email is wrong! XD")
            validate = false
        }


        if (validate) {
            // from Emailjs Doc
            emailjs.sendForm(
                'service_hlolvfd',
                'template_x6cuwkn',
                formRef.current,
                'QYsY5ffEYoPwS1Y4O')
                .then((result) => {
                    console.log(result.text);
                    setDone(true)
                    setError('')
                }, (error) => {
                    console.log(error.text);
                });
        }
    }

    return (
        <div className='c'>
            <div className="c-bg"></div>

            <div className="c-wrapper">

                <div className="c-left">
                    <h1 className='c-title'>Let's discuss?</h1>

                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Email} alt="" className='c-icon' />jayden087t@gmail.com
                        </div>

                        <div className="c-info-item">
                            <a href='https://www.linkedin.com/in/jayden-tan/' target='_blank'>
                                <img src={LinkedIn} alt="" className='c-icon' />My LinkedIn
                            </a>
                        </div>

                        <div className="c-info-item">
                            <a href='https://sites.google.com/view/jayden-tan-portolio' target='_blank'>
                                <img src={Portfolio} alt="" className='c-icon' />My E-portfolio
                            </a>
                        </div>

                        <div className="c-info-item">
                            <a href='https://github.com/TimmyCOCO' target='_blank'>
                                <img src={GitHub} alt="" className='c-icon' />My GitHub
                            </a>
                        </div>

                    </div>
                </div>


                <div className="c-right">
                    <p className="c-desc">
                        Any Ideas? Any Questions? Please Contact Me!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder="Name" name='user_name'
                            onChange={(e) => {
                                setUser_name(e.target.value)
                            }} />

                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder="Email" name='user_email' onChange={(e) => {
                            setUser_email(e.target.value)
                        }} />

                        <input style={{ backgroundColor: darkMode && "#333" }} type='text' placeholder="Subject" name='user_subject' onChange={(e) => {
                            setUser_subject(e.target.value)
                        }} />

                        <textarea style={{ backgroundColor: darkMode && "#333" }} rows='6' placeholder='Message'
                            name='message' onChange={(e) => {
                                setUser_message(e.target.value)
                            }} />

                        <button>Submit</button>
                        {done && "Submitted! Thank you! :)"}
                        <span>{error}</span>
                    </form>

                </div>
            </div>
        </div >
    )
}

export default Contact