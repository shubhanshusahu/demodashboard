import { Button } from '@mui/material'
import React from 'react'
import * as Faicons from 'react-icons/fa'
import * as Ioicons from 'react-icons/io'

import Tag from '../Tag'

const Referral = () => {

  return (
    <div className='RefferalCard'>
      <div className="Header">12.5 % of fee</div>
      <div className="roww">
       <div className='low'>Your Referral Link for xyz</div> 
     
      </div>
      <div className='copyLink'>
     https://mui.com/material-ui/
     <Faicons.FaCopy size={18} className='icon'/>
     </div>

      
    </div>
  )
}

export default Referral
