import '../App.css'
import './bottomSection.css'

function logo(props: any) {

    return (
        <>
            <div id="navBar" className='leftSection container'>
                <button id="nav0" className="inventoryNavBtn active" onClick={() => props.navFunc(0)}>Head</button>
                <button id="nav1" className="inventoryNavBtn" onClick={() => props.navFunc(1)}>Tops</button>
                <button id="nav2" className="inventoryNavBtn" onClick={() => props.navFunc(2)}>Bottoms</button>
                <button id="nav3" className="inventoryNavBtn" onClick={() => props.navFunc(3)}>Footwear</button>
            </div>
        </>
    )
}

export default logo