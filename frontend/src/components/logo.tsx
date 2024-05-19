import './staticTop.css'
import '../App.css'
import hanger from '../assets/hanger-outline.svg'

function logo() {


    return (
        <>
            <div id="logoContainer" className='leftSection container'>
                <img id='logo' className='icon' src={hanger} alt='logo'/>
                <p>FitSpace</p>
            </div>
        </>
    )
}

export default logo