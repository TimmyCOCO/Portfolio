import './toggle.css'
import Sun from '../../img/icon/sun.png'
import Moon from '../../img/icon/moon.png'
import { useContext } from 'react'
import { ThemeContext } from '../../context'

const Toggle = () => {
    const theme = useContext(ThemeContext)

    const handleClick = () => {
        // change the theme from !dark to dark / dark to !dark
        theme.dispatch({ type: "TOGGLE" })
    }

    return (
        <div className='t'>
            <img src={Sun} alt="" className='t-icon' />
            <img src={Moon} alt="" className='t-icon' />
            <div className='t-button'
                onClick={handleClick}
                // control the cover 
                style={{ left: theme.state.darkMode ? 0 : 30 }}
            ></div>
        </div>
    )
}

export default Toggle