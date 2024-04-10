import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from '../../functions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useOutletContext } from 'react-router-dom';



function View() {

  const [get, setGet] = useState();
  const product = useOutletContext();

  //Deleting Data from database 
  const deleteData = (data) => {
    axios.delete(`${baseURL}/products/${data}`)
      .then((res) => {
        if (res.data) {
          setGet("good")
        }
      }),
      (error) => {
        console.log(error);
      }
  }

  //handles onClick for Deletion of an Item
  const handleDelete = (id) => {
    toast.success(() => {
      return (
        <>
          Are you sure you want to delete?? <button className='btn btn-primary btn-sm' onClick={() => {
            deleteData(id)
            toast.dismiss()
          }}>Yes</button>
        </>
      )
    })
  }

  const Alert = (get) => {
    if (get === "good") {
      setGet();
      return
    };

  };

  useEffect(() => {
    Alert(get);
  }, [product, get])

  const rupees =
    <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-currency-rupee" viewBox="0 0 16 16">
      <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z" />
    </svg></span>


  return (
    <div className='container-fluid'>
      <Link className='admin_link container p-2 my-2' to="/admin/insert"> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-plus-fill" viewBox="0 0 16 16">
        <path d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M8.5 7v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 1 0" />
      </svg>Add Product</Link>
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Name</th>
            <th scope="col">Description</th>
            <th scope="col">Price</th>
            <th scope="col">ImageUrl</th>
            <th scope="col">Category</th>
            <th scope="col">Cotton</th>
            <th scope="col">Size</th>
            <th scope="col">Color</th>
            <th scope="col">Delete/Edit</th>
          </tr>
        </thead>
        <tbody>
          {product.length > 0 && product.map((e, key) => (


            <tr>
              <td>{e.id} </td>
              <td>{e.name}</td>
              <td>{e.description}</td>
              <td>{e.price}{rupees}</td>
              <td>{e.imageUrl}</td>
              <td>{e.category}</td>
              <td>{e.cotton.toString()}</td>
              <td>{e.size.toString()}</td>
              <td>{e.color.toString()}</td>
              <td> <button className='admin_link'
                value={e.id} onClick={e => { handleDelete(e.target.value) }}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>Delete</button>
                <br /> <Link to={`/admin/update/${key}`} className='admin_link'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16">
                  <path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9" />
                  <path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z" />
                </svg>Update</Link></td>
            </tr>

          ))}
        </tbody>
      </table>
      <ToastContainer />
    </div>
  )
}

export default View