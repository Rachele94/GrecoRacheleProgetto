import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';

const APY_KEY = (process.env.REACT_APP_API_KEY);

class Book extends React.Component {

    state= {
       currentBook: []
    }

    componentDidMount = async () => {

        const title = this.props.location.state.book;
        const req = await fetch (`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${APY_KEY}`);
         
        const res = await req.json();
        this.setState({currentBook: res.items[0].volumeInfo });
        console.log(this.state.currentBook);
    
    }

    render() {
        const bookState = this.state.currentBook;
      return(
         <div className="container" >
           { this.state.currentBook.lenght !== 0 &&
             
             <div className="active-book">
               <div className="active-imgTitles">
             <img className="active-book__img" src= {bookState.imageLinks === undefined ? "" : bookState.imageLinks.thumbnail} alt= { bookState.title} />
             <div>
             <h2 className="active-book__title"> { bookState.title}</h2>
             <h3 className="active-book__title"> { bookState.subtitle}</h3>
             <h5 className="active-book__publisher"> { bookState.authors}</h5>
            <p> Language: <span className="language">{bookState.language}</span></p>
             </div>
             </div>
            
             <p className="active-book__website"> { bookState.description == undefined ? "Sorry, description is not available! " : bookState.description }</p>
             <div className="active-links">
             <span>For more <a href={bookState.infoLink}>Informations</a></span>
             <button className="active-book__button">
                  <Link to ="/" > Go back Home! </Link>
                  </button>
                  </div>
             </div>
            }
          </div>

       

      );

    }
};

export default Book;