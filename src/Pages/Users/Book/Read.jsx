import React, { Fragment, useEffect, useState} from "react";
import { ReactReader } from "react-reader";
import { Link, useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { API } from "../../../Config/Api";
import Loading from "../../../Component/Loading";

function Read() {
  const { id } = useParams();
  const [books, setBooks] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    book();
  }, []);
  const book = async () => {
    try {
      setLoading(true);
      const books = await API.get(`/books/${id}`);
      await setBooks(books.data.data.book);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="mt-5 mb-5 ml-5 mr-5">
      <Link to={`/Book/${id}/Detail`} as={Link} className="none-decoration">
         <img className="margin-left pb-5" src="/Img/Content/wow-mini.png" alt="" />
      </Link>
      <Row className="vh-100">
        <Col>
          {loading ?(
            <Loading />
          ):(
            <div style={{ position: "relative", height: "100%"}}>
              {" Read Book "}
              <ReactReader
                url={`/Img/Book/${books.bookFile}`}
                title={books.title}
              />
            </div>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Read;
