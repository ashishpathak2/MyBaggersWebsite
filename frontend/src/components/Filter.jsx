import React, { useEffect, useState, useRef } from 'react'
import SizeBlock from '../components/SizeBlock';
import Button from '../components/button';
import Accordion from "../components/Accordion"
import FontAwesomeIcon from 'react-fontawesome'
import ColorBar from './ColorBar';
import axios from 'axios';
import { baseURL } from "../functions";
import { toast } from 'react-toastify';


export default function Filter(props) {

  const rupees =
    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
    </svg></span>

  const [heartChange, setHeart] = useState(() => {
    return (<i class="bi bi-suit-heart"></i>)
  })

  const [values, setValues] = useState({
    "color": "",
    "size": ""
  })

  const [wicart, setWC] = useState(null);


  useEffect(() => {

    if (props) {
      localStorage.setItem('items', props.color)
      localStorage.setItem('sizes', props.size)
    }

  }, [props.color])

  const postData = (data) => {
    axios.post(`${baseURL}/bag/add`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        console.log(res);
      }),
      (error) => {
        console.log(error);
      };
  };

  const onsubmit = e => {
    e.preventDefault();
    const form = {
      "bag_name": props.name,
      "bag_description": props.description,
      "imageUrl": props.imageUrl,
      "bag_color": values.color,
      "bag_size": values.size,
      "bag_price": props.price,
      "quantity": "1",
      "bag_type": wicart,
      "discount": props.discount
    }
    postData(form);
  }



  function isCotton(e) {
    if (e === true) {
      return (<h6>100% COTTON</h6>);
    }
  }
  // function inputColor(data) {
  //   const imgUri = colorOptions.find((e) => {
  //     if (e.clothId === id && e.color === data) {
  //       return e;
  //     }
  //   })
  //   setImgaeUrl(imgUri.image)
  // }

  const WishListHandle = () => {
    setHeart(() => {
      return (<i class="bi bi-suit-heart-fill"></i>)
    });
    setWC('wishlist');
    toast.success("Added To Wishlist ")
  }


  return (
    <div className="container">
      <div className='show-container'>
        <div className='image'>
          {<img src={props.imageUrl} alt="" />}
        </div>

        <div className="Info">
          <form onSubmit={onsubmit}>

            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <h3 className='card-title'>
              {props.price}{rupees}
            </h3>
            <p>inclusive of all taxes</p>

            {isCotton(props.cotton)}

            <div className='colorSelector'>
              <input type="text" className='d-none' name="clrOpt" />
              <p>Color Option:</p>
              <div className="color_inputs d-flex gap-2">

                <ColorBar setColor={setValues} values={values} color={props.color} />
               
              </div>
            </div>


            <div className='sizeSelector'>
              <span>Select Size:</span>
              <SizeBlock setSize={setValues} values={values} size={props.size} />
            </div>



            <div className="btn-container">
              <button type='submit' onClick={() => { setWC('cart'); toast.success("Added To Cart") }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0" />
                  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z" />
                </svg> Add To Cart
              </button>
              <button type='submit' onClick={() => WishListHandle()}>
                {heartChange}WishList

              </button>

            </div>

          </form>


          <div className="Info mt-3 pt-3 border-top">
            <div className="position-relative">
              <div className="d-flex gap-2 rating_box">
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
              </div>
              <div className="rating_bg d-flex gap-2 ">
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
                <FontAwesomeIcon name="star" />
              </div>
            </div>

            <div className="pincode">

              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
              </svg>
              <span className=' pintext1'>CHECK FOR DELIVERY DETAIL</span>



              <form action="/pincodeCheck" className='py-2'>
                <label htmlFor="pin" className='text-secondary'><small>Delivering all across India</small></label><br />
                <div className="d-flex pb-1">
                  <input className="form-control form-control-lg" type="number" placeholder="Enter Pincode" autoComplete='off' required id="pin" />
                  <Button btnName="check" type="submit" />
                </div>
              </form>

            </div>


            <Accordion />
            <hr />


            <div className="infoimg-container">
              <div className="info-img"><img src="https://images.bewakoof.com/web/trust-cart.svg" alt="" /><span>100% SECURE PAYMENTS</span></div>
              <div className="info-img"><img src="https://images.bewakoof.com/web/Easy-Returns.svg" alt="" /><span>EASY RETURN & EASY REFUND</span></div>
              <div className="info-img"><img src="https://images.bewakoof.com/web/original-icon.png" alt="" /><span>100% GENUINE PRODUCT</span></div>
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}