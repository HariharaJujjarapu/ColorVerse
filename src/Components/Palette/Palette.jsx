import React from 'react'
import './Palette.css'
import Card from './Card/Card'

function Palette() {
  return (
    <div>
      <h2 className='m-5'>Monochromatic Colors</h2>
      {/* <div className="component m-5">
        <div className="component-1">Color-1</div>
        <div className="component-1">Color-2</div>
        <div className="component-1">Color-3</div>
        <div className="component-1">Color-4</div> 
      </div> */}
      <Card />
    </div>
  )
}

export default Palette
