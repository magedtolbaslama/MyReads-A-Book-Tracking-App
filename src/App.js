import  React from              'react'
import                           './App.css'

import   * as BooksAPI from     './BooksAPI'
import  SearchPage from          './SearchPage'
import  MainPage from             './MainPage'
import  {Route} from               'react-router-dom'




// Create a component for BooksApp
class BooksApp extends React.Component {
    state = {
        booksList : []
    }
    

    //In order to catch   the booksList in fetchBooks variable  
    fetchBooks=()=>{

           BooksAPI.getAll().then((books)=>{
               this.setState({booksList : books})
        })

    }



    //Mount books in the page when BooksApp is ready
    componentDidMount(){

           this.fetchBooks()

    }

    


    //This code  to treate or handle any change of book shelves wheather currently reading , want to read or read
        
    handleChange = (book, shelf) => {
            BooksAPI.update(book, shelf).then(() => {
               book.shelf = shelf  //to update the shelf state locally
               this.setState(state => (
                   {

                //this is to concat a new book to this.state.booksList which is not on shelf list ) is added,
                booksList: state.booksList.filter(b => b.id !== book.id).concat(book) 
                   }
              
              ))     
        })
    }




    render() {

          return (
                <div className="app">

                     <Route path='/' exact render={()=>(

                           <MainPage
                            books={this.state.booksList}
                              handleChange={this.handleChange}
                                 />
                                      )}/>



                      <Route path='/search' render={()=>(
                          <SearchPage
                           books={this.state.booksList}
                            handleChange={this.handleChange}
                              />                              
                                      )}/>




          </div>



        )
    }
}




export default    BooksApp
