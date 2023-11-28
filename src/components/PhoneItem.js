import React, { useState } from 'react'
import '../app.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFloppyDisk, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'

export default function PhoneItem({ user, remove, update }) {
    const [isEdit, setIsEdit] = useState(false)
    const [newData, setNewData] = useState({ name: user.name, phone: user.phone })

    function ButtonSave() {
        return (
            <button className="btn-edit" onClick={() => { update(user.id, { name: newData.name, phone: newData.phone }); setIsEdit(false) }}>
                <FontAwesomeIcon icon={faFloppyDisk} />
            </button>
        )
    }

    if (isEdit) {
        return (
            <div className="container-data">
                <div className="container-image">
                    <img src={user.avatar == null ? `/Defaultavatar.png` : `../images/${user.avatar}`} alt='not source' className="avatar" />
                </div>
                <div className="list" >
                    <input className='input' type="text" id="nameEdit" value={newData.name} onChange={(e) => setNewData({ ...newData, name: e.target.value })} />
                    <input className='input' type="text" id="phoneEdit" value={newData.phone} onChange={(e) => setNewData({ ...newData, phone: e.target.value })} />
                    <div className="button">
                        <ButtonSave />
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="container-data" key={user.name}>
                <div className="container-image">
                    <Link to={`/avatar/${user.id}`} >
                        <img src={user.avatar == null ? `/Defaultavatar.png` : `../images/${user.avatar}`} alt='not source' className="avatar" />
                    </Link>
                </div>
                <div className="list">
                    <p>{user.name}</p>
                    <p>{user.phone}</p>
                    <div className="button">
                        <button className="btn-edit" onClick={() => setIsEdit(!isEdit)}>
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>&nbsp;
                        <button className="btn-delete" onClick={() => remove(user.id)} >
                            <FontAwesomeIcon icon={faTrashCan} />
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}