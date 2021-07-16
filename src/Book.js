import  React,  {Component}   from   'react'


class Book extends Component{  

    render(){
         // define book variable
        const {book} = this.props;
        
        // use author name from book as authorNames variable
        let authorNames
        if(book.authors){

            authorNames = book.authors
        } 
        else
        {
            authorNames=''
        }
         
        // use book picture from book as pictureURL variable
        let pictureURL
        if(book.imageLinks){

            pictureURL = book.imageLinks.thumbnail
        } 
        else
        {
            // if there is no picture url then assign nothing to pictureURL variable
            pictureURL =''
        }
        
        
      


        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover"
                     style={{ width: 130, height: 190,
                      // use the pictureURL to show image in the background
                      backgroundImage:`url(${pictureURL})` }}>

                      </div>
                        
                    <div className="book-shelf-changer">
                         
                           <select 
                            value={this.props.bookShelf} 
                            onChange={(e)=>this.props.handleChange(this.props.book, e.target.value)}
                             >

                            <option  
                             value="move" 
                             disabled>Move to....
                            </option>

                            <option 
                            value="currentlyReading"> Currently Reading
                            </option>


                            <option
                            value="wantToRead">       Want to Read
                            </option>

                            <option
                            value="read">             Read
                            </option>


                            <option
                            value="none">             None
                            </option>



                        </select>
                    </div>
                </div>



                <div className="book-title">{this.props.book.title}</div>
                <div className="book-authors">{authorNames}</div>
            </div>            
        )
    }
}

export default    Book
