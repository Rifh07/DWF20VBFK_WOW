import React from 'react'
import { Books } from '../../../Component/Home/data'
import Card from '../../../Component/Home/Card'

function Home() {
  return (
    <div className="mb-5">
      <div className="mt-4 shadow">
        <img className="header-home border-radius" src="/Img/Content/HeaderHome2.png" alt="" />
        <img className="pulang-home" src="/Img/Book/Pulang.png" alt="" />
      </div>
      <div className="mt-4">
        <h4 className="name-home mb-3">List Book</h4>
      </div>
      <div className="row mt-1 align-item-center">
        {Books.map((book) => (
          <div className="col-md-3" key={book.id}>
            <Card
              book={book}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Home