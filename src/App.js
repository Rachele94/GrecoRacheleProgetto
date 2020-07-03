import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Form from "./components/Form";
import Books from "./components/Books";

const APY_KEY = (process.env.REACT_APP_API_KEY);

class App extends Component {
  state = {
   books: []
  }

  getBook = async (e) => { 
    const bookName = e.target.elements.bookName.value;
    e.preventDefault();
    const api_call = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookName}&key=${APY_KEY}`);
     
    const data = await api_call.json();
    this.setState({books: data.items});
    console.log(this.state.books)

  }

  componentDidMount = () => {

   const json = localStorage.getItem("books");
   const books = JSON.parse(json);
   this.setState({ books });
   
  }



  componentDidUpdate = () => {

   const books = JSON.stringify(this.state.books);
   localStorage.setItem("books", books);
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className='appLogo' alt='Peek-a-BooK logo'/>
        <div className="search_bar">
        <Form getBook={this.getBook}/>
        </div>
        </header>
        <Books books={this.state.books}/>
        <p className="created__by"> created by Greco Rachele </p>
      </div>
    );
  }
}

export default App;