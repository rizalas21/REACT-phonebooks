import { faArrowUpZA, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function PhItem() {
    return (
        <div className="all">
            <div className="container-search">
                <div className="icon">
                    <button className="btn-icon">
                        <FontAwesomeIcon icon={faArrowUpZA} id="center" />
                    </button>
                </div>
                <div className="input-container">
                    <button className="button-search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="input-icon" />
                    </button>
                    <input type="text" aria-describedby="basic-addon1" id="input-field" />
                </div>
                <div className="icon">
                    <button className="btn-icon">
                        <FontAwesomeIcon icon={faUserPlus} />
                    </button>
                </div>
            </div>
        </div>
    )
}