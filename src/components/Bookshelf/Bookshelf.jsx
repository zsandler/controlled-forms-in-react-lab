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
        setBooks(...books, newBook( books.title, books.author)
        )
    }




    return (

        <div className="bookshelfDiv">
            <div className="formDiv">
                <h3>Add a Book</h3>
                {/* Form will go here */}
            </div>
            <div className="bookCardsDiv">{/* Book cards will display here */}</div>
        </div>
    )
}


export default Bookshelf
