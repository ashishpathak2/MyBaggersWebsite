import React from 'react';
import { Link } from 'react-router-dom';

function cards({ imageUrl, name, description, price, id }) {

  return (
    <Link to={`/productInfo/${id}`} >
      <div className="card product-card">
        <img src={imageUrl} alt="" className='card-img-top"' />
        <div className="card-body">
          <h5 className='card-title'>{name}</h5>
          <p className='card-text mb-1'>{description}</p>
          <h3 className='card-title'><span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
            <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
          </svg></span>{price}</h3>

        </div>
      </div>
    </Link>

  )
}

export default cards

