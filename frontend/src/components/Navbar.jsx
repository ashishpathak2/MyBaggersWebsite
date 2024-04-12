import React, { useEffect, useState } from 'react'
import Button from './button'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Modal from './Modal'


function Navbar() {
  const navigate = useNavigate();
  const [loggedin, setLog] = useState(null)
  const [searchBar, setSearchBar] = useState(null)

  let name = loggedin !== null ? loggedin.map(e => { return e.name }).toString() : null;

  const currentPath = window.location.pathname;


  const handleChange = (data) => {
    navigate("/products?search=" + data)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top border-bottom">
        <div className="container-fluid">
          <Link className="navbar-brand d-flex gap-2 align-items-center" to="/">
            <img src="data:image/jpeg;base64,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" alt="" width="40" height="34" />
            <h2>Baggers</h2>
          </Link> 

          {currentPath !== "/cart" && <div className='w-100'>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/products">Shop</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/customize">Customize</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/contactus">Contact us</Link>
                </li>

              </ul>

              <div className="d-flex align-items-center px-3">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" onChange={(e) => handleChange(e.target.value)} />
              </div>

              {name !== null ?
                <div className='d-flex align-items-center gap-4 px-4'>
                  <h6 className='m-0'> <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                  </svg>{name}</h6>

                  <Link to="/cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                    </svg>
                  </Link>
                </div>

                :
                <Button btnName="login/Signup" bs_toggle="modal" bs_target='#exampleModal' />
              }


            </div>
          </div>
          
          }
            { name === "pathak" ?
               <Link to="/admin"> Admin</Link>
           :null }
        </div>
      </nav>
      <Modal logged={setLog} />
    </>
  )
}

export default Navbar