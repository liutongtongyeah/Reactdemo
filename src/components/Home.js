import { useLocation, Link } from 'react-router-dom'
const Home = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname === '/' && (
        <div className='mybody'>
          <h1>My React Demo</h1>
          <Link to='/home' className='mylink'>Home</Link>
          <Link to='/blog' className='mylink'>Blog</Link>
        </div>

      )}
    </>
  )
}

export default Home
