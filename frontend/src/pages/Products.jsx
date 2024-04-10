import React, { useState, useEffect } from 'react'
import Cards from '../components/Cards'
import { useOutletContext, useParams, useSearchParams } from 'react-router-dom';



function Products() {
  const data = useOutletContext();
  const [search] = useSearchParams();
  const [newdata, setnewdata] = useState(data)
  let categories = new Set(data.map(e => {
    return e.category
  }))
  let allCategories = Array.from(categories)



  useEffect(() => {
    if (newdata.length === 0) setnewdata(data)
    sortCardByPrice
  }, [newdata, sortCardByPrice, setnewdata]);

  useEffect(() => {

    if (search.get("search") !== null) {

      const finalResult = data.filter((item) => {
        const itemName = item.name.toLowerCase();
        return itemName.includes(search.get("search").toLowerCase());
      });
      setnewdata(finalResult)
    }
    if (search.get("search") === "") {
      setnewdata(data)
    }
  }, [search])





  const CategoryFilter = (categoryItem) => {
    if (categoryItem == "All") {
      setnewdata(data)
    }
    else {
      const finalResult = data.filter((item) => {
        return item.category === categoryItem;
      });
      setnewdata(finalResult)
    }
  }


  function sortCardByPrice(e) {

    if (e.target.value == "default") {
      setnewdata([...data.sort((a, b) => { return a.id - b.id })])
    }


    if (e.target.value === "low to high") {
      setnewdata([...data.sort((a, b) => { return a.price - b.price })]);
    }

    if (e.target.value === "high to low") {
      setnewdata([...data.sort((a, b) => { return b.price - a.price })]);
    }

  }


  const products = newdata.map((d, key) => (
    <Cards imageUrl={d.imageUrl} name={d.name} price={d.price} description={d.description} id={key} />
  ))




  return (
    <div>
      <div className='filter-container mt-2'>
        <h2 className='me-5'>Filters</h2>
        <div className="d-flex align-items-center gap-2">
          <h5 className='text-nowrap m-0'>Category</h5>
          <select onChange={(e) => CategoryFilter(e.target.value)} name="category" className='form-select'>
            <option value="All">All</option>
            {allCategories.map(e => { return <option value={e}>{e}</option> })}
          </select>
          <h5 className='text-nowrap m-0 ms-5'>Sort By</h5>
          <select onChange={(e) => sortCardByPrice(e)} name="price" className='form-select'>
            <option value="">default</option>
            <option value="low to high">low to high</option>
            <option value="high to low">high to low</option>
          </select>



        </div>

      </div>
      <div className='product-container'>
        <div className="product-list">{products}</div>
      </div>
    </div>
  )
}

export default Products
