import './about.css'
import Me from '../../img/me.jpg'
import Award1 from '../../img/award-fall.jpg'
import Award2 from '../../img/award-winter.jpg'

import Cert1 from '../../files/2021Fall - Presidents_Honour_List - Seneca.pdf'
import Cert2 from '../../files/2022Winter - Presidents_Honour_List - Seneca.pdf'
import { useContext } from 'react'
import { ThemeContext } from '../../context'



const About = () => {
    const theme = useContext(ThemeContext)

    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"
                style={{backgroundColor: theme.state.darkMode ? 'grey': ''}} ></div>
                <div className="a-card">
                    <img src={Me} alt='' className='a-img' />
                </div>
            </div>

            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>
                    full stack developer
                </p>

                <p className='a-desc'>
                    Strong IT study background with more than 2-year experiences in web-based application development. Having developed multiple web applications and self-learned new technologies. Having ability to work individually or as a team player.
                </p>

                <div className="a-award">
                    <a href={Cert1} target='_blank' >
                        <img src={Award1} alt="" className='a-award-img' />
                    </a>

                    <div className="a-award-texts">

                        <h4 className='a-award-title'>President's Honour List</h4>
                        <p className='a-award-desc'>
                            Awarded in Fall 2021
                        </p>
                    </div>

                </div>

                <div className="a-award">
                    <a href={Cert2} target='_blank' >
                        <img src={Award2} alt="" className='a-award-img' />
                    </a>

                    <div className="a-award-texts">

                        <h4 className='a-award-title'>President's Honour List</h4>
                        <p className='a-award-desc'>
                            Awarded in Winter 2022
                        </p>
                    </div>

                </div>



            </div>

        </div>
    )
}

export default About