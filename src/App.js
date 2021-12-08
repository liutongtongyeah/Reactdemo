import Header from './components/Header'
import Posts from './components/Posts'
import Home from './components/Home'
import {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import axios from 'axios'
function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getPosts = async () => {
      const tasksFromServer = await fetchPosts()
      setPosts(tasksFromServer)
    }
    getPosts()
  }, [])
  const fetchPosts = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/?_limit=50')
    const data = await res.json()
    return data
  }
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path='/' exact element = {
            <>
              <Home />
            </>
          }/>
          <Route path='/blog' element={
            <>
              <div className='mycontainer'>
                <h4>Blog posts</h4>
                <div className='posts'>
                  {posts.length>0 ? <Posts posts={posts} />: <p>No posts to show</p>}
                </div>
              </div>
            </>
          }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
