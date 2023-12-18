import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PhoneBox from "./components/PhoneBox";
import PhoneAdd from "./components/PhoneAdd";
import Avatar from "./components/Avatar";
import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function App() {
  const [item, setItem] = useState([])
  const [user, setUser] = useState({ name: '', phone: '' })
  const [avatar, setAvatar] = useState(null)
  const formData = new FormData()
  const [keyword, setKeyword] = useState('')
  const [sort, setSort] = useState('asc')
  const [isLoading, setIsLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(1)


  const handleScroll = async () => {
    if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight && !isLoading) {
      console.log('page => ', page, 'total totalPages => ', totalPages)
      try {
        if (page < totalPages) {
          setIsLoading(true)
          const newPage = page + 1
          setPage(newPage);
          const dataBaru = await axios.get(`http://localhost:3001/api/phonebooks`, {
            params: {
              page: newPage
            }
          })
          console.log('ini adlah dataBaru => ', dataBaru)
          setItem(prevItem => [...prevItem, ...dataBaru.data.phonebooks])
        }
        else {
          setIsLoading(false)
          console.log('gak nambah wleee')
        }
      }
      catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [totalPages, page])

  useEffect(() => {
    const readData = async () => {
      try {
        console.log('ini adalah keyword => ', keyword)
        const response = await axios.get(`http://localhost:3001/api/phonebooks`, {
          params: {
            keyword: keyword,
            sort: sort
          }
        })
        console.log('masuk => ', response)
        const { phonebooks, pages } = response.data
        console.log('ini phonebooks', phonebooks)
        if (phonebooks) {
          console.log('pages readData ', pages)
          setItem(phonebooks)
          setTotalPages(pages)
        }
        return
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }
    readData()

  }, [keyword, sort])


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
        <Route path="/add" element={<PhoneAdd user={user} setUser={setUser} item={item} setItem={setItem} sort={sort} setSort={setSort} />} />
        <Route path="/avatar/:id" element={<Avatar UpdateAvatar={UpdateAvatar} user={user} avatar={avatar} setAvatar={setAvatar} item={item} />} />
      </Routes>
    </Router>
  </>
  );
}