import { addBook } from '../redux/books/books';

const Bookform = () => (
  <>
    <h4> ADD NEW BOOK</h4>
    <form onSubmit={addBook} className="form-container">
      <input type="text" name="name" placeholder="Book title" />
      <input type="text" name="name" placeholder="Author" />
      <input type="submit" value="Add Book" />
    </form>
  </>
);

export default Bookform;
