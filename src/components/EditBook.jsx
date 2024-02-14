import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { updateBook } from "./BooksSlice";

const EditBook = () => {
    const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const [id] = useState(location.state.id);
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({id, title, author })) 
    navigate('/', {replace:true})
  };
  return (
    <div>
      <h2 className="text-center font-bold text-2xl my-4">Update Book</h2>
      <form
        onSubmit={handleSubmit}
        className="w-1/2 mx-auto border-2 border-gray-500 px-20 py-12 rounded"
      >
        <div className="mb-4 flex flex-col">
          <label htmlFor="title" className="text-yellow-600">
            Title:
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="border border-yellow-600 px-2 py-1 rounded"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="author" className="text-yellow-600">
            Author:
          </label>
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
        <button
          type="submit"
          className="flex mx-auto bg-yellow-200 px-12 py-2 font-semibold rounded mt-4"
        >
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;
