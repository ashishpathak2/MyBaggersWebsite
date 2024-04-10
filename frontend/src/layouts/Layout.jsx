import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import axios from 'axios'
import { baseURL } from "../functions";



function layout() {
  const [product, setProduct] = useState([])

  //Fetching Data from database of all products
  const getData = () => {
    axios.get(`${baseURL}/products`)
      .then((res) => {
        setProduct(res.data);
      }),
      (error) => {
        console.log(error);
      }
  }


  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <Navbar />
      <Outlet context={product} />
      <Footer />
    </>
  )
}

export default layout