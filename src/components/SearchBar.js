import { faArrowUpZA, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'

function BtnIcon() {
    return (
        <button className="btn-icon">
            <FontAwesomeIcon icon={faArrowUpZA} id="center" />
        </button>
    )
}

function BtnAdd() {
    return (
        <button className="btn-icon">
            <FontAwesomeIcon icon={faUserPlus} />
        </button>
    )
}

export default function SearchBar() {
    return (
        <div className="all">
            <div className="container-search">
                <div className="icon">
                    <BtnIcon />
                </div>
                <div className="input-container">
                    <button className="button-search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="input-icon" />
                    </button>
                    <input type="text" aria-describedby="basic-addon1" id="input-field" />
                </div>
                <div className="icon">
                    <Link to={"/add"}>
                        <BtnAdd />
                    </Link>
                </div>
            </div>
        </div>
    )
}