import React from 'react';
import { Link } from "react-router-dom";



const Books = props => (

        <div className= "container">
            <div>
            { props.books.map((book) => {
             return (
               <div key={book.id} style={{marginBottom:"2rem"}}>
               <div className="books_box">
                  <div className= "set_imgText">
               <img 
                   className="books__box-img"
                   src={book.volumeInfo.imageLinks.thumbnail} 
                   alt={book.volumeInfo.title}/>
                   <div className="book__text">
                       <h3 className="books__title"> {book.volumeInfo.title}</h3>
                         <h6 className="books__subtitle">{book.volumeInfo.authors}</h6>
                             <p className="books__genres"> Genres: {book.volumeInfo.categories}</p>
                   </div>
                    </div>

                   <div className="move_buttons">
                   <button className="book_buttons">
                   <Link to={{
                       pathname: `/book/${book.id}`,
                       state: {book: book.volumeInfo.title}
                        }} > <span> Show more </span> </Link>
                   </button>
                   </div>
               </div>
              
               </div>
             );
            }) }
            </div>
          
        </div>






);

export default Books;