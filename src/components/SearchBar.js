import { faArrowDownZA, faArrowUpAZ, faArrowUpZA, faMagnifyingGlass, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import '../app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from 'react-router-dom'


function BtnAsc({ sort, setSort }) {
    return (
        <button className="btn-icon" onClick={() => {
            setSort({ sort: 'desc' })
        }}>
            <FontAwesomeIcon icon={faArrowUpAZ} id="center" />
        </button>
    )
}

function BtnDesc({ sort, setSort }) {
    return (
        <button className="btn-icon" onClick={() => {
            setSort({ sort: 'asc' })
        }}>
            <FontAwesomeIcon icon={faArrowDownZA} id="center" />
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

export default function SearchBar({ keyword, setKeyword, sort, setSort }) {
    return (
        <div className="all">
            <div className="container-search">
                <div className="icon">
                    {sort === 'asc' || sort.sort === 'asc' ? <BtnAsc sort={sort} setSort={setSort} /> : <BtnDesc sort={sort} setSort={setSort} />}
                </div>
                <div className="input-container">
                    <button className="button-search">
                        <FontAwesomeIcon icon={faMagnifyingGlass} id="input-icon" />
                    </button>
                    <input type="text" aria-describedby="basic-addon1" id="input-field" onInput={(e) => {
                        setKeyword((prevKeyword) => ({
                            ...prevKeyword,
                            keyword: e.target.value
                        }))
                    }} />
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