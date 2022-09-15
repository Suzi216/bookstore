const Bookform = () => (
  <>
    <h4> ADD NEW BOOK</h4>
    <form className="form-container">
      <input type="text" name="name" placeholder="Book title" />
      <input type="text" name="name" placeholder="Author" />
      <input type="submit" value="Add Book" />
    </form>
  </>
);

export default Bookform;
