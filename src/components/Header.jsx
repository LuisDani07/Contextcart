import {Link} from 'react-router-dom'
function Header() {
  return (
    <>
        <span className='header'>React Context API tutorial</span>
        <ul className="nav">
          <li >
            <Link to='/'>Home page</Link>
          </li>
          <li >
            <Link to='/cart'>
              Cart
            </Link>
          </li>
        </ul>
    </>
  )
}

export default Header