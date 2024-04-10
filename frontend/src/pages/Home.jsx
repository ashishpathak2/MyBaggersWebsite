import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '/src/App.css'
import Carouselnew from '../components/Carousel'
import Cards from '../components/Cards'
import TrendingBar from '../components/TrendingBar'
import { responsive } from '../data';
import { Link } from 'react-router-dom';
import { useOutletContext } from 'react-router-dom';





function Home() {
  const product = useOutletContext();


  const newproduct = product.map((d, key) => (
    <div className="card-container py-3">
      <Cards imageUrl={d.imageUrl} name={d.name} price={d.price} description={d.description} id={key} />
    </div>
  ))



  return (
    <div>

      <Carouselnew />
      <div className="tb-text">
        <p> TRENDING CATEGORIES</p>
      </div>
      <div className="tb-container">
        <TrendingBar Url="/src/assets/trending-category1.jpg" name="Classic T-shirts" />
        <TrendingBar Url="/src/assets/trending-category2.jpg" name="Classic Shirts" />
        <TrendingBar Url="/src/assets/trending-category3.jpg" name="Oversized T-shirts" />
        <TrendingBar Url="/src/assets/trending-category4.jpg" name="Printed T-shirts" />
        <TrendingBar Url="/src/assets/trending-category5.jpg" name="Jeans" />
      </div>


      <div className="tb-text">
        <p> OUR COLLECTIONS</p>
      </div>
      <Carousel responsive={responsive}>
        {newproduct}
      </Carousel>
      <div className='py-3 bottom-text'><Link to="/products"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>Explore All</Link></div>

    </div>
  )
}

export default Home

