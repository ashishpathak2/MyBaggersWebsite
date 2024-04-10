import React, { useEffect } from 'react';
import axios from "axios";
import { useState } from 'react';
import { baseURL } from '../functions';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





function modal({ logged }) {

  const [user, setUser] = useState({});
  const [get, setGet] = useState(null)
  const [signup, setSignup] = useState(false)



  const Alert = (param) => {
    if (get === "signed") {
      toast.success("Signup Successful")
      return
    }
    else if (get === 'invalid') {
      toast.success("Invalid Credetials")
      return
    }
    if (get !== null && get.length > 0) {
      logged(get)
      toast.success("Login Successful")
      return
    }
  }


  const onInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const postData = (data) => {
    axios.post(`${baseURL}/users`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((res) => {
        if (res.data === true) { setGet("signed") }
      }),
      (error) => {
        console.log(error);
        res.data === false && setGet("error");
      }
  };

  const getData = (data) => {
    axios.get(`${baseURL}/users/login/${data.email}`)
      .then((res) => {
        if (res.data.length > 0) { setGet(res.data) }
        else { setGet("invalid") }
      }),
      (error) => {
        console.log(error);
      }
  }

  const onSub = (e) => {
    e.preventDefault();
    if (signup === true) {
      postData(user)
    }
    else {
      getData(user)
    }
  }
  const handleChange = (e) => {
    e.preventDefault();
    setSignup(!signup)
  }

  useEffect(() => {
    Alert(get)
  }, [get])

  return (
    <div className="random">
      <ToastContainer />
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <p className="modal-title" id="exampleModalLabel">
                Go to <a className='link-primary' href="" onClick={handleChange}>{signup === false ? "Sign Up" : "Login"}</a>
              </p>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="signup-container">
                <h2>{signup === true ? "Sign Up" : "Login"}</h2>
                <form onSubmit={(e) => onSub(e)}>

                  {signup === true ? <div className="form-group">
                    <input type="text" placeholder="Username" name="name" onChange={e => onInput(e)} required />
                  </div> : null}
                  <div className="form-group"><input type="email" placeholder="Email" name="email" onChange={e => onInput(e)} required /></div>
                  <div className="form-group">
                    <input
                      type="password"
                      placeholder="Password"
                      name="password"
                      onChange={e => onInput(e)}
                      required
                      autoComplete=''
                    />
                  </div>
                  <button className='signup-btn' type="submit" data-bs-dismiss="modal">Sign Up</button>
                </form >
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default modal