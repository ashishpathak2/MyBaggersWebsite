import React, { useState } from 'react'

function ColorBar({ color, setColor, values }) {
  const colorSplit = color.split(",");

  const inputColor = (e) => {
    setColor({ ...values, "color": e.target.value })
  }

  return (


    colorSplit.map((e, key) => {
      return (

        <div className='color-input '>
          <input className='d-none color_input' type="radio" id={e} value={e} name="color"
            onChange={inputColor} key={key} />
          <label htmlFor={e} className="rounded-circle color_label" >
            <div style={{ background: e }}></div>
          </label>
        </div>

      )
    })




  )
}

export default ColorBar