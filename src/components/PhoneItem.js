import '../app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'

export default function PhoneItem(prop) {
    let user = prop.user
    console.log('ini user', user)
    return (
        <div className="container-data">
            <div className="container-image">
                <img src={user.photo} alt="not source" className="avatar" />
            </div>
            <div className="list">
                <p>{user.name}</p>
                <p>{user.phone}</p>
                <div className="button">
                    <button className="btn-edit">
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </button>&nbsp;
                    <button className="btn-delete">
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </div>
    )
}