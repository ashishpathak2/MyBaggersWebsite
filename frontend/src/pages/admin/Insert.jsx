import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { baseURL } from '../../functions';
import { toast, ToastContainer } from 'react-toastify';


function Insert() {
  const [product, setProduct] = useState();
  const [get, setGet] = useState();

  const postData = (data) => {
    axios.post(`${baseURL}/products`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data) {
          setGet("good")
        };
      }),
      (error) => {
        console.log(error);
      };
  };

  const Alert = (param) => {
    if (get === "good") {
      toast.success("Product Inserted");
      setGet();
      return
    };

  };




  const onSubmit = (e) => {
    e.preventDefault();
    postData(product);
  };

  const onInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  useEffect((e) => {
    Alert(get);
  }, [get]);



  return (
    <div className='container'>

      <form onSubmit={(e) => onSubmit(e)} >
        <div className="form-group">
          <input
            type="text"
            placeholder="Product Name"
            name="name"
            onChange={e => onInput(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Description"
            name="description"
            onChange={e => onInput(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Price"
            name="price"
            onChange={e => onInput(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Image Url"
            name="imageUrl"
            onChange={e => onInput(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Category"
            name="category"
            onChange={e => onInput(e)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cotton">Cotton:</label> &nbsp;
          <label htmlFor="true">True</label>
          <input
            type="radio"
            placeholder="Cotton"
            name="cotton"
            value={true}
            onChange={e => onInput(e)}
            required
          />
          &nbsp;&nbsp;
          <label htmlFor="cotton_false">false</label>
          <input
            type="radio"
            placeholder="Cotton"
            name="cotton"
            value={false}
            onChange={e => onInput(e)}
            required
          />
        </div>

        <div className="form-group">
          <input
            type="text"
            placeholder="Size"
            name="size"
            onChange={e => onInput(e)}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Color"
            name="color"
            onChange={e => onInput(e)}
            required
          />
        </div>

        <button className='signup-btn' type="submit"> + Add Product</button>
        <ToastContainer />
      </form >
    </div>
  )
}

export default Insert