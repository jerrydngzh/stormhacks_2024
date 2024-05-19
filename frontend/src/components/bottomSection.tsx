import NavBar from "./navBar"
import AddTags from "./AddTags"

function bottomSection(props: any) {

    return (
        <>
            <div id="staticTop" className="bottomSection">
                <NavBar navFunc={props.navFunc} />
                <AddTags />
            </div>
        </>
    )
}

export default bottomSection