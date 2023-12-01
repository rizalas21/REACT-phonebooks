import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneBox from "./components/PhoneBox";
import PhoneAdd from "./components/PhoneAdd";
import Avatar from "./components/Avatar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function App() {
  const [item, setItem] = useState([])
  const [user, setUser] = useState({ name: '', phone: '' })
  const [avatar, setAvatar] = useState(null)
  const formData = new FormData()
  const [keyword, setKeyword] = useState(' ')
  const [sort, setSort] = useState('asc')
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight || isLoading) {
      setPage(page + 1);
    }
  }

  useEffect(() => {
    setIsLoading(true)

    window.addEventListener('scroll', handleScroll);

    axios.get(`http://localhost:3001/api/phonebooks`, {
      params: {
        keyword: keyword.keyword,
        sort: sort.sort,
        page: page
      },
    })
      .then((response) => {
        console.log('ini page => ', page)
        console.log(response)
        if (response.data.phonebooks) {
          console.log('response', response.data.phonebooks)
          setItem(item.concat(response.data.phonebooks))
        }
        setIsLoading(false)
        return () => window.removeEventListener('scroll', handleScroll)
      })
      .catch(error => {
        console.error('Error fetching data:', error.message)
      })
  }, [keyword, sort, page])

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
              id: response.data.id,
              name: response.data.name,
              phone: response.data.phone,
              avatar: response.data.avatar
            }
          ]
        })
      })
      .catch((e) => {
        console.log('ini error bro update', e)
      })
  }

  const UpdateAvatar = (id, avatar) => {
    formData.append('avatar', avatar)
    axios.put(`http://localhost:3001/api/phonebooks/${id}/avatar`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        setItem((prevData) => {
          return [
            ...prevData.filter(data => data.id !== response.data.id),
            {
              id: response.data.id,
              name: response.data.name,
              phone: response.data.phone,
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
            keyword={keyword}
            setKeyword={setKeyword}
            sort={sort}
            setSort={setSort}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            page={page}
            setPage={setPage}
          />
        } />
        <Route path="/add" element={<PhoneAdd user={user} setUser={setUser} item={item} setItem={setItem} />} />
        <Route path="/avatar/:id" element={<Avatar UpdateAvatar={UpdateAvatar} user={user} avatar={avatar} setAvatar={setAvatar} item={item} />} />
      </Routes>
    </Router>
  </>
  );
}