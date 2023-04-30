import { Button } from '@mui/material'
import React from 'react'
import * as Faicons from 'react-icons/fa'
import Tag from '../Tag'

const Rewards = () => {
    let tags=['$40 AVAX','$10 BNB', '$210 BTC']
  return (
    <div className='RewardCard'>
      <div className="Header">Your Rewards</div>
      <div className="roww">
       <h2 className='header'>$0.453495845</h2> 
        <Button variant="contained" startIcon={<Faicons.FaExternalLinkAlt color="#fff" className='icon'/>}>
            Custom Link</Button>
      </div>
    {
        tags.map(tag=><Tag text={tag}/>)
    }
      
    </div>
  )
}

export default Rewards
