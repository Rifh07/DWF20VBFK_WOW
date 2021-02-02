import React from "react"
import { Link,useParams } from "react-router-dom"

function Read() {
  const { id } = useParams();
  return (
    <div className="mt-5 mb-5">
      <Link to={`/Book/${id}/Detail`} as={Link} className="none-decoration">
        <img className="margin-left mb-5" src="/Img/Content/wow-mini.png" alt="" />
      </Link>

      <div className="row justify-content-center wrap">
        <div className="col-md-11">
          <img className="book-content" src="/Img/BookContent.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Read
