import '../app.css'
import PhoneItem from './PhoneItem'

export default function PhoneList({ UpdateData, Delete, item, setItem }) {

    return (
        <div className="main" id="main-data">
            {item.map((user) => (
                <PhoneItem key={user.id} user={user} remove={Delete} update={UpdateData} item={item} setItem={setItem} />
            ))}
        </div>
    )

}