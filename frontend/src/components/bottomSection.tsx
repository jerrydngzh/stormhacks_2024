import NavBar from "./navBar"
import AddTags from "./AddTags"
import Upload from "./UploadPhoto"

function bottomSection(props: any) {

    return (
        <>
            <div id="staticTop" className="bottomSection">
                <NavBar navFunc={props.navFunc} />
                <Upload />
                <AddTags />

            </div>
        </>
    )
}

export default bottomSection