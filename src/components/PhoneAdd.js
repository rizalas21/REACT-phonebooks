import { Link, useNavigate } from 'react-router-dom'
import '../app.css'
import axios from 'axios'

function ButtonSave() {
    return (
        <button className="btn-save" type='submit'>
            <p className="p-add">save</p>
        </button>
    )
}

function ButtonCancel() {
    return (
        <button className="btn-save">
            <Link to={"/"} style={{ textDecoration: 'none' }}>
                <p className="p-add">cancel</p>
            </Link>
        </button>
    )
}


export default function PhoneAdd({ user, setUser, item, setItem, sort, setSort }) {
    let navigate = useNavigate()

    const AddData = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/api/phonebooks', {
            ...user
        }).then((response) => {
            setItem((item) => {
                return [
                    ...item.filter(data => data.id !== response.data.id),
                    {
                        id: response.data.id,
                        name: response.data.name,
                        phone: response.data.phone
                    }
                ]
            })
            navigate('/')
        }).catch((err) => {
            console.log('ini err add data', err)
        })
    }

    return (
        <form className="container" onSubmit={AddData}>
            <div className="container-add">
                <input type="text" className="input-add" onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <input type="text" className="input-add" onChange={(e) => setUser({ ...user, phone: e.target.value })} />
                <div className="btn-add">
                    <ButtonSave />
                    <ButtonCancel />
                </div>
            </div>
        </form>
    )
}