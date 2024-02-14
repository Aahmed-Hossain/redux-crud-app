import { useState } from "react"
import {  useDispatch} from 'react-redux';
import { addBook } from "../components/BooksSlice";
import { useNavigate } from 'react-router-dom'
const AddBooks = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const numberOfBooks = useSelector((state)=>state.booksReducer.books.length);
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
const handleSubmit = (e)=> {
  e.preventDefault();
  const book = { title, author};
  dispatch(addBook(book));
  navigate('/')
}
  return (
    <div>
  <h2 className="text-center font-bold text-2xl my-4">Add Books</h2>
  <form onSubmit={handleSubmit} className="w-1/2 mx-auto border-2 border-gray-500 px-20 py-12 rounded">
    <div className="mb-4 flex flex-col">
      <label htmlFor="title" className="text-yellow-600">Title:</label>
      <input
      required
        type="text"
        name="title"
        id="title"
        className="border border-yellow-600 px-2 py-1 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </div>
    <div className="mb-4 flex flex-col">
      <label htmlFor="author" className="text-yellow-600">Author:</label>
      <input
      required
        type="text"
        name="author"
        id="author"
        className="border border-yellow-600 px-2 py-1 rounded"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
    </div>
    <button type="submit" className="flex mx-auto bg-yellow-200 px-12 py-2 font-semibold rounded mt-4">Add Books</button>
  </form>
</div>

  )
}

export default AddBooks;