import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from "../functions";
import Modal from './Modal';

export default function Cart() {

    const [product, setProduct] = useState();
    const [bagitems, setBagitems] = useState();
    const [wishlist, setWishlist] = useState();
    let totalPrice = 0;
    let TotaldiscountedPrice = 0;

    const rupees = <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
        <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
    </svg></span>

    //Fetching Data from database of all products
    const getData = () => {
        axios.get(`${baseURL}/bag`)
            .then((res) => {
                setProduct(res.data);
            }),
            (error) => {
                console.log(error);
            }
    }

    useEffect(() => {
        if (product) {
            setItms()
        }
    }, [product])

    const setItms = () => {
        setBagitems(product.filter(bgType))
        setWishlist(product.filter(bgTypeWish))
    }

    function bgType(data) {
        if (data.bag_type === "cart") return data.bag_type;
    }

    function bgTypeWish(data) {
        if (data.bag_type === "wishlist") return data.bag_type;
    }

    const addtocart = (e) => {

        const bagType = { "bag_type": "cart" }
        const updateData = (data) => {
            axios.put(`${baseURL}/bag/update/${e}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then((res) => {
                    console.log(res.data);



                }),
                (error) => {
                    console.log(error);
                };
        };

        updateData(bagType);

    }

    const removeItem = (e) => {
        const deleteData = (data) => {
            axios.delete(`${baseURL}/bag/delete/${data}`)
                .then((res) => {
                    console.log(res.data);
                }),
                (error) => {
                    console.log(error);
                }
        }
        deleteData(e)

    }

    const quantityUpdate = (e, id) => {
        const quantity = { "quantity": e.target.value }

        const updateData = (data) => {
            axios.put(`${baseURL}/bag/quantity/${id}`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
                .then((res) => {
                    console.log(res.data);



                }),
                (error) => {
                    console.log(error);
                };
        };
        updateData(quantity);


    }

    useEffect(() => {
        getData();
    }, [product])


    return (
        <div className="container py-5">

            <h4 className="fw-bold">My bag <span className='fw-semibold'>({bagitems ? bagitems.length : 0} item)</span></h4>
            <div className="row">
                <div className="col-lg-9">

                    {bagitems && bagitems.map((e, index) => {
                        TotaldiscountedPrice += e.discount? parseInt(e.discount) : 0 * parseInt(e.quantity)
                        totalPrice += parseInt(e.bag_price) * parseInt(e.quantity)
                        return (
                            <div className="card p-3 my-bag-card position-relative mb-3" key={index}>
                                <div className="d-grid myBagProduct gap-3">
                                    <img src={e.imageUrl} alt="" className="card-img align-self-center" />
                                    <div className="card-body p-0">
                                        <div className="card-title fw-semibold">{e.bag_name}</div>
                                        <div className="card-text description text-muted mb-2">{e.bag_description}</div>

                                        <div className="d-flex justify-content-between">

                                            <select name="Qty" id="" className='form-select align-self-start' onChange={ev => quantityUpdate(ev, e.id)}>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>

                                            <div>
                                                <div className="price fs-5">
                                                    {e.discount ? (e.bag_price - e.discount) * e.quantity : e.bag_price}{rupees} &nbsp;&nbsp;
                                                    {parseInt(e.discount) > 0 &&
                                                        <span className="text-muted text-decoration-line-through fs-6">{e.bag_price * e.quantity}{rupees}</span>
                                                    }
                                                </div>
                                                {parseInt(e.discount) > 0 &&
                                                    <div className="text-success">You saved this much {e.discount? e.discount : 1 * e.quantity}{rupees}</div>
                                                }
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <button className="cancel-cart" onClick={() => removeItem(e.id)}><i className="bi bi-x"></i></button>
                            </div>
                        )
                    })
                    }
                </div>
                <div className="col-lg-3">
                    <div className="card payment_card p-3 mb-5">
                        <div className="card-title fs-3 fw-semibold">Payment Details</div>

                        <div className='pay_details d-flex flex-column gap-3 mb-2 pt-3'>

                            <div className="text-muted">Total MRP (Incl. of taxes)<span>₹{totalPrice}</span></div>

                            {TotaldiscountedPrice > 0 &&
                                <div className="text-muted">Discount on MRP <span className='text-success'>-₹{TotaldiscountedPrice}</span></div>
                            }
                            <div className="text-muted">Delivery Fee <span className='text-success'>Free</span></div>
                            <hr />
                            <div className="fw-bold">Subtotal<span>₹{totalPrice - TotaldiscountedPrice}</span></div>


                        </div>

                        <button className="btn btn-warning"> Proceed</button>


                    </div>



                    <div className="text-start">
                        <h4 className="fw-bold">My wishlist <span className='fw-semibold'>({wishlist ? wishlist.length : 0} item)</span></h4>
                        {wishlist && wishlist.map((e, index) => {
                            return (
                                <div className="card p-3 position-relative mb-3" key={index}>
                                    <div className="d-grid myBagProduct gap-3">
                                        <img src={e.imageUrl} alt="" className="card-img align-self-center" />
                                        <div className="card-body p-0 d-flex flex-column justify-content-between">
                                            <div className="card-title fw-semibold">{e.bag_name}</div>
                                            <div className="card-title description fw-regular">{e.bag_description}</div>
                                            <button className='btn btn-warning' onClick={() => addtocart(e.id)} >Add to cart</button>
                                        </div>
                                    </div>
                                    <button className="cancel-cart" onClick={() => removeItem(e.id)} ><i className="bi bi-x"></i></button>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Modal />
        </div>
    )


}
