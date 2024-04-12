import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className='bg-light'>
      <div className='container'>
        <div className='row justify-content-around'>

          <div className='col-4 '>
            <Link className="navbar-brand fs-3 fw-bold" to="/">
              Baggers
            </Link>

            <p className='pe-4 text-secondary my-4'>Discover a world of timeless elegance and contemporary flair with our curated collection of clothing and stylish fashion.</p>

            <p className='text-secondary'>&copy; 2024 <Link to="/">Baggers</Link>. All Rights Reserved.</p>

          </div>
          <div className='col-3 ps-5'>
            <h6 className='card-title mb-4 text-success'>Useful links</h6>
            <ul className="list-unstyled">
              <li className="mb-3"><Link to="/">Home</Link></li>
              <li className="mb-3"><Link to="/products">Shop</Link></li>
              <li className="mb-3"><Link to="/">Customize</Link></li>
              <li className="mb-3"><Link to="/">Contact us</Link></li>
            </ul>
          </div>

          <div className='col-5'>
            <div className="payment d-flex gap-2">
              <h6 className='card-title  text-success my-auto'>100% Secure Payment with</h6>
              <img src="/images/visa-icon.png" alt="" />
              <img src="/images/master-card-icon.png" alt="" />
              <img src="/images/rupay-logo-icon.png" alt="" />
              <img src="/images/upi-icon.png" alt="" />
            </div>

            <div className="d-flex gap-3">
              <h6 className='card-title my-2 text-success my-auto'>Follow us on:</h6>

              <Link to="https://www.instagram.com/">
                <i class="fs-4 bi bi-instagram"></i>
              </Link>

              <Link to="https://www.facebook.com/">
                <i class="fs-4 bi bi-facebook"></i>
              </Link>

              <Link to="https://www.twitter.com/">
                <i class="fs-4 bi bi-twitter-x"></i>
              </Link>
            </div>

          </div>

        </div>
      </div>

    </footer>
  )
}
