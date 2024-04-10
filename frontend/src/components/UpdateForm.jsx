import axios from 'axios';
import React, { useRef, useState } from 'react'
import { baseURL } from '../functions';
import { useNavigate } from 'react-router-dom';



export default function UpdateForm(props) {


    const id = props.id;
    const navigate = useNavigate();
    const name = useRef();
    const description = useRef();
    const price = useRef();
    const imageUrl = useRef();
    const category = useRef();
    const cotton = useRef();
    const size = useRef();
    const color = useRef();


    const updateData = (data) => {
        axios.put(`${baseURL}/products/${id}`, data, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        })
            .then((res) => {
                console.log(res.data);
                navigate("/admin/view")


            }),
            (error) => {
                console.log(error);
            };
    };



    const onSubmit = (e) => {
        e.preventDefault();
        const formdata = {
            "name": name.current.value,
            "description": description.current.value,
            "price": price.current.value,
            "imageUrl": imageUrl.current.value,
            "category": category.current.value,
            "cotton": cotton.current.value,
            "size": size.current.value,
            "color": color.current.value
        }

        updateData(formdata);

    };


    return (
        <form onSubmit={(e) => onSubmit(e)} >
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Product Name"
                    name="name"
                    defaultValue={props.name}
                    ref={name}

                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Description"
                    name="description"
                    defaultValue={props.description}
                    ref={description}

                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Price"
                    name="price"
                    defaultValue={props.price}
                    ref={price}

                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="ImageUrl"
                    name="imageUrl"
                    defaultValue={props.imageUrl}
                    ref={imageUrl}

                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Category"
                    name="category"
                    defaultValue={props.category}
                    ref={category}

                />
            </div>
            <div className="form-group">
                <label htmlFor="cotton">Cotton: </label> &nbsp;
                <label htmlFor="true">True</label>
                <input
                    type="radio"
                    placeholder="Cotton"
                    name="cotton"
                    value={true}
                    ref={cotton}

                    defaultChecked={props.cotton === true && "true"}
                />
                &nbsp;&nbsp;
                <label htmlFor="cotton_false">false</label>
                <input
                    type="radio"
                    placeholder="Cotton"
                    name="cotton"
                    value={false}
                    ref={cotton}

                    defaultChecked={props.cotton === false && "true"}
                />
            </div>

            <div className="form-group">
                <input
                    type="text"
                    placeholder="Size"
                    name="size"
                    defaultValue={props.size}
                    ref={size}

                />
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Color"
                    name="color"
                    defaultValue={props.color}
                    ref={color}

                />
            </div>

            <button className='signup-btn' type="submit">Update Product</button>

        </form >

    )
}
