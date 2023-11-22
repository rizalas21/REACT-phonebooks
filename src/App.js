import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneBox from "./components/PhoneBox";
import PhoneAdd from "./components/PhoneAdd";
import Avatar from "./components/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {

  const [item, setItem] = useState([])
  const [user, setUser] = useState({ name: '', phone: '' })
  const [avatar, setAvatar] = useState({ avatar: '' })

  useEffect(() => {
    axios.get('http://localhost:3001/api/phonebooks')
      .then((response) => {
        if (response.data.phonebooks) setItem(response.data.phonebooks)
      })
      .catch(error => {
        console.error('Error fetching data:', error.message)
      })
  }, [])

  function DeleteItem(userId) {
    axios.delete(`http://localhost:3001/api/phonebooks/${userId}`)
      .then((response) => {
        setItem(item.filter(data => data.id !== userId))
      }).catch(err => console.log('error Delete => ', err))
  }

  const UpdateData = (id, { name, phone }) => {
    axios.put(`http://localhost:3001/api/phonebooks/${id}`, { name, phone })
      .then((response) => {
        setItem((prevData) => {
          return [
            ...prevData.filter(data => data.id !== response.data.id),
            {
              name: response.data.name,
              phone: response.data.phone
            }
          ]
        })
      })
      .catch((e) => {
        console.log('ini error bro update', e)
      })
  }


  const UpdateAvatar = (id, { avatar }) => {
    const formData = new FormData()
      .formData.append("avatar", avatar)
    axios.put(`http://localhost:3001/api/phonebooks/${id}/avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
      .then((response) => {
        setAvatar((avatar) => {
          return [
            ...avatar,
            {
              avatar: response.data.avatar
            }
          ]
        })
      })
      .catch((err) => {
        console.log('ini error update avatar => ', err)
      })
  }

  return (<>
    <Router>
      <Routes>
        <Route path="/" element={
          <PhoneBox
            Delete={DeleteItem}
            UpdateData={UpdateData}
            user={user}
            setUser={setUser}
            item={item}
            setItem={setItem}
          />
        } />
        <Route path="/add" element={<PhoneAdd user={user} setUser={setUser} />} />
        <Route path="/avatar" element={<Avatar UpdateAvatar={UpdateAvatar} />} />
      </Routes>
    </Router>
  </>
  );
}