import { Button } from '@mui/material'
import React from 'react'

const Card = () => {
  return (
    <div className='card'>
        <label className='close'>x</label>
        <span className='flexcol'>
      <label >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti iusto!</label>
      <Button variant='contained' style={{backgroundColor:'white', color:'#27224F', height:'25px'}}>Tutorial</Button>
      </span>
    <img className='imgBit'
     src='https://freepngimg.com/thumb/money/137142-money-bitcoin-free-download-image.png'/>
    </div>
  )
}

export default Card
