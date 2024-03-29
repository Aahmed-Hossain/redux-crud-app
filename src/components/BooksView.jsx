import { useSelector,useDispatch } from 'react-redux';
import { deleteBook } from './BooksSlice';
import { Link } from 'react-router-dom';

const BooksView = () => {
const books = useSelector((state)=>state.booksReducer.books);
const dispatch = useDispatch();
const handleDelete = (id) => {
    dispatch(deleteBook(id))
}

  return (
    <div >
        <h2 className='text-center font-extrabold text-3xl my-3'>Lists of books</h2>
       <div className='flex flex-col justify-center items-center'>
       <thead>
            <tr className="">
                <th className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>ID</th>
                <th className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>Title</th>
                <th className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>Author</th>
                <th className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>Action</th>
            </tr>
        </thead>
        <tbody>
            {
                books && books.map((book,idx)=> {
                    const {id, title, author} = book;
                    return <tr key={id}>
                        <td className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>{idx + 1 }</td>
                        <td className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>{title}</td>
                        <td className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'>{author}</td>
                        <td className='border border-yellow-500 w-[11rem] h-[3rem] text-center font-semibold'><button
                        onClick={()=>handleDelete(id)} 
                        className='bg-yellow-200 rounded px-2 mr-3' >Delete</button>
                        <Link to={'/edit-book'} state={{id, title, author}}>
                        <button className='bg-yellow-200 rounded px-2 mr-3'>Update</button>
                        </Link>
                        </td>
                    </tr>
                })
            }
        </tbody>
       </div>
    </div>
  )
}

export default BooksView