import React from 'react'
import { useParams } from 'react-router-dom'
import { useOutletContext } from 'react-router-dom';
import Filter from '../components/Filter';

function Product_show() {

  const { id } = useParams()
  const products = useOutletContext();

  return (
    <Filter {...products[id]} />
  )
}

export default Product_show