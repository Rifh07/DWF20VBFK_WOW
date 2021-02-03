import React, { useContext } from "react"
import { AppContext } from "../../../Context/GlobalContext"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"
import { faBookmark } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { Books } from '../../../Component/Home/data'

function Book() {
  const [state, dispatch] = useContext(AppContext)
  const { books } = state;

  const { id } = useParams();
  const filteredBook = Books.find(Bookss => Bookss.Id === id)
  const buku = books.find(book => book.Id === id)

  const myList = () => {
    dispatch({
      type: "Add_Book",
      payload: filteredBook,
    })
  }

  return (
    <div className="mt-5 pb-5">
      {Book ? (
        <>
          <div className="row pt-5 text-left">
            <div className="col-md-4">
              <img className="book width-100" src={'/Img/Book/'+filteredBook.Image} alt="" />
            </div>
            <div className="col-md-7 pl-4">
              <h1 className="name-home mb-1 mt-2">{filteredBook.Title}</h1>
              <h6 className="c-grey">{filteredBook.Author}</h6>
              <h6 className="font-wg mt-4 mb-1">Publication date</h6>
              <p className="c-grey text-profile">{filteredBook.PublicationDate}</p>
              <h6 className="font-wg mt-4 mb-1">Pages</h6>
              <p className="c-grey text-profile">{filteredBook.Pages}</p>
              <h6 className="font-wg c-red mt-4 mb-1">ISBN</h6>
              <p className="c-grey text-profile">{filteredBook.ISBN}</p>
            </div>
          </div>
          <div className="mt-5">
            <h4 className="name-home mb-3">About This Book</h4>
            <p className="c-grey mb-5 text-justify">
                {filteredBook.About}
            </p>
            <div className="lp-button-group text-right">
              { buku ? (
                <>  </>
              ) : (
              <> 
                <Button variant="danger" className="bg-red" onClick={myList}> 
                    Add My List  <FontAwesomeIcon icon={faBookmark} className="ml-2" />
                </Button>
              </> )}
                <Button variant="secondary" className="ml-3 bg-grey c-black" to={`/Book/${filteredBook.Id}/Read`} as={Link}> 
                    Read Book {">"}
                </Button>
            </div>
          </div>
        </>
      ) : (
        <h1>Data Tidak Ditemukan</h1>
      )}
    </div>
  );
}

export default Book;
