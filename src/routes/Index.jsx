import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "../pages/Home"
import Error from "../pages/Error"
import Navbar from "../layouts/Navbar"
import ShowBooks from "../pages/ShowBooks"
import AddBooks from "../pages/AddBooks"
import EditBook from "../components/EditBook"


const Index = () => {
  return (
    <BrowserRouter>
 <Navbar/>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/show-books' element={<ShowBooks/>}/>
        <Route path='add-books' element={<AddBooks/>}/>
        <Route path='edit-book' element={<EditBook/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Index