import "../App.css"
import "./bottomSection.css"
function searchBar(props:any) {

    // const [inventory, setInventory] = useState<fit[]>([]);

    return (
        <>
            <div id="gallery">
                {
                    props.tops.map((inv:any) => (
                        <div className="entry secondaryBG">
                            <img src={inv.pictureLink}/>
                        </div>
                    ))
                }
                {
                    props.bottoms.map((inv:any) => (
                        <div className="entry secondaryBG">
                            <img src={inv.pictureLink}/>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default searchBar