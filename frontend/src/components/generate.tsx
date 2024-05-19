import './bottomSection.css'
import '../App.css'
import { useState } from 'react'

function logo(props:any) {

    const [topID, updateTop] = useState(0)
    const [bottomID, updateBottom] = useState(0)
    console.log(props.tops)
    const scrollChange = (top: boolean, change:number) => {
        if(top){
            let idx = topID;
            if(change > 0){
                idx = idx + change == props.tops.length ? 0 : idx+change
            }else if(change < 0){
                idx = idx == 0 ? props.tops.length - 1 : idx-change
            }
            updateTop(idx)
        }else{
            let idx = bottomID;
            if(change > 0){
                idx = idx + change == props.bottoms.length ? 0 : idx+change
            }else if(change < 0){
                idx = idx < 1 ? props.bottoms.length - 1 : idx-change
            }
            updateBottom(idx)
        }
    }

    return (
        <>
            <div id="genView" className='container secondaryBG'>
                <div id="topClothing">
                    <button id="upperL" className='leftBtn scrollBtn' onClick={() => scrollChange(true, -1)}>{"◄"}</button>
                    {/* <img src={props.tops[topID].pictureLink}/> */}
                    <button id="upperR" className='rightBtn scrollBtn' onClick={() => scrollChange(true, 1)}>{"►"}</button>
                </div>
                <div id="lowerClothing">
                    <button id="lowerL" className='leftBtn scrollBtn' onClick={() => scrollChange(false, -1)}>{"◄"}</button>
                    <img id='display' className='entry' src={props.bottoms[bottomID].pictureLink}/>
                    <button id="lowerR" className='rightBtn scrollBtn' onClick={() => scrollChange(false, 1)}>{"►"}</button>
                </div>
            </div>
        </>
    )
}

export default logo