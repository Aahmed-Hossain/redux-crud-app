import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="flex gap-4 text-center font-bold bg-yellow-100 p-4 justify-center items-center ">
        <Link to={'/'} >Home</Link>
        <Link to={'/show-books'}>Show Books</Link>
        <Link to={'/add-books'}>Add Books</Link>
    </div>
  )
}

export default Navbar