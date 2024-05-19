import '../App.css'
import './bottomSection.css'
import shirt from '../assets/shirt-outline.svg'
import refresh from '../assets/refresh-outline.svg'
import bookmark from '../assets/bookmark-outline.svg'
import upload from '../assets/upload-outline.svg'
import cog from '../assets/cogwheel-outline.svg'

function logo(props:any) {


    return (
        <>
            <div id="navBar" className='leftSection container secondaryBG'>
                <button id="nav0" className="inventoryNavBtn active" onClick={() => props.navFunc(0)}>
                    <img src={shirt} className='icon' alt='inventory icon'/>
                    <p>Inventory</p>
                </button>
                <button id="nav1" className="inventoryNavBtn" onClick={() => props.navFunc(1)}>
                    <img src={refresh} className='icon' alt='generate icon'/>
                    <p>Generate</p>
                </button>
                <button id="nav2" className="inventoryNavBtn" onClick={() => props.navFunc(2)}>
                    <img src={bookmark} className='icon' alt='bookmark icon'/>
                    <p>Bookmark</p>
                </button>
                <button id="nav3" className="inventoryNavBtn" onClick={() => props.navFunc(3)}>
                    <img src={upload} className='icon' alt='upload icon'/>
                    <p>Upload</p>    
                </button>
                <button id="nav4" className="inventoryNavBtn" onClick={() => props.navFunc(4)}>
                    <img src={cog} className='icon' alt='settings icon'/>
                    <p>Settings</p>    
                </button>
            </div>
        </>
    )
}

export default logo