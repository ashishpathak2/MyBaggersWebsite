// import React, { useEffect, useState } from 'react'
// import axios from "axios";
// import { baseURL } from './functions';


//  const [data,setData] = useState([])
// const getData = ()=>{
//   axios.get(`${baseURL}/products`)
//  .then((res)=>{
//    const data = JSON.stringify(res.data);
//     console.log(data);
//  }),
//  (error) =>{
//   console.log(error);
//  }
// }

// // getData();
//  useEffect(()=>{
//   getData();
  
//  },[] );


// }




const colorOptions = [
  {
    id:'1',
    clothId:"1",
    color:"red",
    image:"https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg"
  },
  {
    id:'2',
    clothId:"1",
    color:"blue",
    image:"https://images.bewakoof.com/t320/men-s-black-friends-logo-t-shirt-234662-1659608737-4.jpg"
  },
  {
    id:'3',
    clothId:"1",
    color:"green",
    image:"https://images.bewakoof.com/t320/women-s-blue-round-in-bugs-graphic-printed-oversized-short-top-589789-1707221362-1.jpg"
  },
  {
    id:'4',
    clothId:"1",
    color:"black",
    image:"https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg"
  },
  {
    id:'1',
    clothId:"2",
    color:"red",
    image:"https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg"
  },
  {
    id:'2',
    clothId:"2",
    color:"blue",
    image:"https://images.bewakoof.com/t320/men-s-black-friends-logo-t-shirt-234662-1659608737-4.jpg"
  },
  {
    id:'3',
    clothId:"2",
    color:"green",
    image:"https://images.bewakoof.com/t320/women-s-blue-round-in-bugs-graphic-printed-oversized-short-top-589789-1707221362-1.jpg"
  },
  {
    id:'4',
    clothId:"2",
    color:"purple",
    image:"https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg"
  }

]
   const data = [
  {
    id: "1",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "499",
    imageUrl: "https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg",
    category: "hoodies",
    cotton: false,
    Size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green","black"]
  },
  {
    id: "2",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "49",
    imageUrl: "https://images.bewakoof.com/t320/men-s-black-friends-logo-t-shirt-234662-1659608737-4.jpg",
    category: "t-shirt",
    cotton: true,
    Size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green","purple"]
  },
  {
    id: "3",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "469",
    imageUrl: "https://images.bewakoof.com/t320/women-s-blue-round-in-bugs-graphic-printed-oversized-short-top-589789-1707221362-1.jpg",
    category: "trouser",
    cotton: true,
    Size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green","grey"]
  },
  {
    id: "4",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "499",
    imageUrl: "https://images.bewakoof.com/t320/women-s-black-boyfriend-t-shirt-103943-1655747757-5.jpg",
    
    category: "hoodies",
    cotton: true,
    Size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green"]
  },
  {
    id: "5",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "4",
    imageUrl: "https://images.bewakoof.com/t320/men-s-white-marvel-t-shirt-390747-1679048295-5.jpg",
    
    category: "hoodies",
    cotton: true,
    Size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green"],
  },
  {
    id: "6",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "499",
    imageUrl: "https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg",
    
    category: "trouser",
    cotton: false,
    Size: ["S", "M", "L", "XL"],
    color: ["red", "blue", "green","violet"]
  },
  {
    id: "7",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "409",
    imageUrl: "https://images.bewakoof.com/t320/men-s-black-batman-outline-logo-t-shirt-283889-1701423873-1.jpg",
    
    category: "shirt",
    cotton: true,
    Size: ["S", "M", "L", "XL", "XXL"],
    color: ["red", "blue", "green","black"]
  },
  {
    id: "8",
    name: "Cloth",
    description: "designer stylish Cloths",
    Price: "90",
    imageUrl: "https://images.bewakoof.com/t320/women-s-black-boyfriend-t-shirt-103943-1655747757-5.jpg",
    
    category: "t-shirt",
    cotton: false,
    Size: ["S", "M", "L"],
    color:["red", "blue", "green","black"]
  }
]


export const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    slidesToSlide: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export { data ,colorOptions }