import React, { useContext } from "react";
import { useHistory } from 'react-router-dom';

import { AppContext } from "../../Context/GlobalContext"

function Card({book, handleAlert}) {
    const [state] = useContext(AppContext)
    const history = useHistory()
    const { id, title, author, coverFile } = book

    const detailBook = () => {
        if (state.subscribe === true){
            history.push(`/Book/${id}/Detail`)
        } else {
            handleAlert()
        }
      }
    return (
        <div className="col-md-3 mb-5 cursor" onClick={detailBook}>
          <img className="mb-3 home-img-book rounded" src={'/Img/BookCover/'+coverFile} alt="" />
          <div className="text-left">
            <div className="home-title-book">
              <h5 className="name-home">{title}</h5>
            </div>
            <h6 className="penulis-home">{author}</h6>
          </div>
        </div>
    )
}

export default Card
