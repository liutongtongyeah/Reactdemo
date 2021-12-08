import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>React Demo</a>
          <div className='collapse navbar-collapse'>
            <ul className='navbar-nav'>
              <li className='nav-item'>
                {/* <a className='nav-link' href='#'>Home</a> */}
                <Link to='/' className='nav-link'>Home</Link>
              </li>
              <li className='nav-item'>
                {/* <a className='nav-link' href='#'>Blog</a> */}
                <Link to='/blog' className='nav-link'>Blog</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
