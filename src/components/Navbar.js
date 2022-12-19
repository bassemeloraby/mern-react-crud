import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="">
    <Link to='/' className="me-2">Home</Link>
    <Link to='/about'>About</Link>
    </nav>
  )
}

export default Navbar

