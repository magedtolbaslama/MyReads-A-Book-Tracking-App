import     React      from       'react'
import     BookShelf  from       './BookShelf'
import     {Link}     from       'react-router-dom'


const MainPage = (props) => {

           return (
           <div className="list-books">
               <div className="list-books-title">
                 <h1>MyReads</h1>
                </div>
                   <div className="list-books-content">
                       <div>


                            <BookShelf
                               bookShelfVar='currentlyReading'
                               bookShelfTitle='Currently Reading'
                               handleChange={props.handleChange}
                               books={props.books}
                              
                                      />

                             <BookShelf
                               bookShelfVar='wantToRead'
                               bookShelfTitle='Want to Read'
                               handleChange={props.handleChange}
                                books={props.books}
                                
                                     />


                              <BookShelf
                                  bookShelfVar='read'
                                  bookShelfTitle='Read'
                                  handleChange={props.handleChange}
                                   books={props.books}
                                 
                                       />
                        </div>
                     </div>


            <div className="open-search">

              <Link to='/search'>Add a book</Link>


            </div>
          </div>
        )
}

export default    MainPage
