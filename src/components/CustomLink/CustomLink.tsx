import { Button } from '@mui/material';
import React from 'react'
import * as IoIcons from 'react-icons/io';
import * as Faicons from 'react-icons/fa'
import * as Imicons from 'react-icons/im'

const CustomLink = () => {
  return (
    <div className='customform'>
        <div className="row"> <IoIcons.IoIosArrowRoundBack color='white' size={30}/>
    <div className='header'>
        Custom Link
    </div>
    </div>
    <label  className="label">
    https://www.figma.com/file/mTfiVo4npMPF
    </label>
    <input type='text' className='textbox' placeholder='ENTER'/>
    <div className="rowbetween">
    <Button variant="contained" 
    startIcon={<Faicons.FaExternalLinkAlt color="#fff" className='icon'/>}>
            Custom Link</Button>
            <Button variant="contained"  style={{backgroundColor:'white', color:'#000'}}
    startIcon={<Imicons.ImCancelCircle color="#000" className='icon'/>}>
           Cancel</Button>
           </div>
    </div>
  )
}

export default CustomLink
