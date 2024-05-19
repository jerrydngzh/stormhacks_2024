import Logo from "./logo"
import SearchBar from "./searchBar"

function staticTop() {

    return (
        <>
            <div id="staticTop" className="topSection">
                <Logo/>
                <SearchBar/>
            </div>
        </>
    )
}

export default staticTop