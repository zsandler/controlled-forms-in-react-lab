import { useState } from "react";


const Bookshelf = () => {
    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, The Witch, and the Wardrobe', author: 'C.S. Lewis' },
    ])

    const [newBook, setNewBook] = useState({
        title: '',
        author: ''
    })


    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewBook(prevBook => ({
            ...prevBook,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setBooks([...books, newBook])
    }


    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>

                <form>

                    <input
                        type='text'
                        name='title'
                        value={newBook.title}
                        onChange={handleInputChange}
                        placeholder='Title'
                    />

                    <input
                        type='text'
                        name='author'
                        value={newBook.author}
                        onChange={handleInputChange}
                        placeholder='Author'
                    />

                    <button onClick={() => handleSubmit(books)}>
                        Add a book! {books.title}
                    </button>

                    {/* <button type="submit">Click here to add book!</button> */}
                </form>

            </div>
            <div className="bookCardsDiv">
                <h3>Your books:</h3>
                <p>Title: {books.title}</p>
                <p>Author: {books.author}</p>
            </div>
        </div>
    )
}


export default Bookshelf
