import React from 'react'

function Button({ btnName, bs_target, bs_toggle, img, type }) {
  return (
    <button type={type} className="btn" data-bs-toggle={bs_toggle} data-bs-target={bs_target}>
      <img src={img} alt="" />{btnName}
    </button>
  )
}



export default Button