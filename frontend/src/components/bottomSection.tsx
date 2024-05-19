import NavBar from "./navBar"
import InventoryGallery from "./inventory"
import "./bottomSection.css"
import "../App.css"

function bottomSection(props:any) {

    return (
        <>
            <div id="staticTop" className="bottomSection container">
                <NavBar navFunc={props.navFunc}/>
                <div id="dynamicView" className="rightSection container">
                    <InventoryGallery/>
                </div>
            </div>
        </>
    )
}

export default bottomSection