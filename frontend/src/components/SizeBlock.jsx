import React, { useRef } from 'react'

function SizeBlock({ size, setSize, values }) {
  const sizeSplit = size.includes(",") ? size.split(",") : [size];

  const inputSize = (e) => {
    setSize({ ...values, "size": e.target.value })
  }

  return (
    sizeSplit.map((e, key) => {
      return (

        <div className='sizes-input'>
          <input className='d-none sizes_input' type="radio" id={e} value={e} name="sizes" key={key} onChange={inputSize} />
          <label htmlFor={e} className="card size_label_name text-muted">{e}</label>
        </div>


      )
    })

  )
}

export default SizeBlock