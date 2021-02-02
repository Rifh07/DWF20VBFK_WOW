import React, { useContext } from "react"
import { Button } from "react-bootstrap"
import { faEnvelope, faTransgender, faPhoneAlt, faSearchLocation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import { AppContext } from "../../../Context/GlobalContext"
import Card from '../../../Component/Home/Card'

function Profile() {
  const [state] = useContext(AppContext)
  const { books } = state;

  return (
    <div className="mb-5">
      <div className="mt-5">
        <h3 className="name-home">Profile</h3>
      </div>
      <div className="mt-4 mb-3 pl-5 pb-5 pt-4 profile-container bg-pink border-radius">
        <div className="pb-5 float-left">
          <div className="mb-3">
            <h2 className="inline align-middle c-grey">
              <FontAwesomeIcon icon={faEnvelope} className="mr-4" />
            </h2>
            <div className="inline-block align-top">
              <p className="m-1 text-profile">syarifhidayat400@gmail.com</p>
              <p className="m-1 text-profile c-grey">Email</p>
            </div>
          </div>
          <div className="mb-3">
            <h2 className="inline align-middle c-grey">
              <FontAwesomeIcon icon={faTransgender} className="mr-4" />
            </h2>
            <div className="inline-block align-top">
              <p className="m-1 text-profile">Male</p>
              <p className="m-1 text-profile c-grey">Gender</p>
            </div>
          </div>
          <div className="mb-3">
            <h2 className="inline align-middle c-grey">
              <FontAwesomeIcon icon={faPhoneAlt} className="mr-4" />
            </h2>
            <div className="inline-block align-top">
              <p className="m-1 text-profile">0823-1182-0900</p>
              <p className="m-1 text-profile c-grey">Mobile Phone</p>
            </div>
          </div>
          <div className="mb-3">
            <h2 className="inline align-middle c-grey">
              <FontAwesomeIcon icon={faSearchLocation} className="mr-4" />
            </h2>
            <div className="inline-block align-top">
              <p className="m-1 text-profile">
                Jl. H. Naim Kembangan Utara, Jakarta
              </p>
              <p className="m-1 text-profile c-grey">Address</p>
            </div>
          </div>
        </div>
        <div className="float-right mr-4">
          <div className="form-group">
            <img className="border-radius" src="Img/Profile/EditProfile.png" alt="" />
          </div>
          <div className="form-group">
            <Button
              variant="danger"
              className="form-control bg-red"
              type="submit"
            >
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="name-home">My List Book</h3>
      </div>
      <div className="row mt-1 align-item-start">
        {books.map((book) => (
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

export default Profile
