import    React           from    'react'
import    Book            from    './Book'
import    * as BooksAPI   from    './BooksAPI'
import    {Link}          from    'react-router-dom'



class SearchPage extends React.Component{
          state={
           searchQueryText:'',
           filteredBooksTitleList:[]
            }
    
            updateQuery=(newQueryText)=>{
            this.setState({
                searchQueryText:newQueryText
            })

            this.updateFilteredBooksList(newQueryText);
             }


            updateFilteredBooksList=(searchQueryText)=>{

            if(searchQueryText) {

                 BooksAPI.search(searchQueryText).then((searchedBooksText)=>{
                  if(searchedBooksText.error) {
                    this.setState({filteredBooksTitleList:[]}) 
                   } else {
                   this.setState({filteredBooksTitleList:searchedBooksText})
                   }
                      })  
                 } else {
                    this.setState({filteredBooksTitleList:[]}) 
                     }  
                     }
    
    render(){    
        //assign imported bookList from App.js to booklist variable
        const booksTitleList = this.props.books
        
            return(
               <div className="search-books">
               <div className="search-books-bar">
               <Link className="close-search" to='/'>Close</Link>
                <div className="search-books-input-wrapper">

                    <input 
                    value={this.state.searchQueryText} 
                    type="text" 
                    placeholder="Search by title or author" 
                    onChange={(e)=>this.updateQuery(e.target.value)}/>
                    </div>


               </div>
               <div className="search-books-results">
                <ol className="books-grid">
                      {
                         this.state.filteredBooksTitleList.map(searchedBookText=>{
                          let shelfName='none'
                    
                          booksTitleList.map(book=>{
                         if(book.id === searchedBookText.id){
                            shelfName=book.shelf
                        }
                         })
                    
                         return(<li key={searchedBookText.id}>

                             
                            <Book 
                                bookShelf={shelfName}
                                booksList={booksTitleList}
                                handleChange={this.props.handleChange}
                                book={searchedBookText}
                                
                               
                            />
                    </li>)
                })    
                }
                </ol>
            </div>
          </div>   
        )
    }   
}

export default SearchPage