import NavBar from "./navBar"
import InventoryGallery from "./inventory"
import Generate from "./generate"
import "./bottomSection.css"
import "../App.css"
import { useState } from "react";

function bottomSection(props:any) {

    const [inventoryViewSelect, setInventoryView] = useState(0);

    const changeInventoryView = (pageView: number) => {
        document.getElementById("nav" + inventoryViewSelect.toString())?.classList.remove("active");
        document.getElementById("nav" + pageView.toString())?.classList.add("active");
        setInventoryView(pageView);

    }

    return (
        <>
            <div id="staticTop" className="bottomSection container">
                <NavBar navFunc={changeInventoryView}/>
                <div id="dynamicView" className="rightSection container">
                    {
                        inventoryViewSelect == 0 && (<InventoryGallery tops={props.tops} bottoms={props.bottoms}/>)
                    }
                    {
                        inventoryViewSelect == 1 && (<Generate tops={props.tops} bottoms={props.bottoms}/>)
                    }
                </div>
            </div>
        </>
    )
}

export default bottomSection