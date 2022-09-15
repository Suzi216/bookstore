const Bookform =() =>{
  return(
    <>
    <h4> ADD NEW BOOK</h4>
    <form className="form-container">
      <label>
        <input type="text" name="name" placeholder="Book title" />
      </label>
      <label>
        <input type="text" name="name" placeholder="Author" />
      </label>
      <input type="submit" value="Add Book" />
    </form>
    </>
  )
}

export default Bookform;
