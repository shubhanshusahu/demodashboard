import React, { ReactNode, useState } from 'react'
import './custom.css'
import { MenuItem, Select, SelectChangeEvent } from '@mui/material'
import { IoLogoAngular } from 'react-icons/io'
import * as Mdicons from 'react-icons/md'
import CustomLink from './CustomLink'
const CustomeLink = () => {
    function handleChange(event: SelectChangeEvent<any>, child: ReactNode): void {
      settext(event.target.value)
    }
    function handleChange2(event: SelectChangeEvent<any>, child: ReactNode): void {
        settext2(event.target.value)
      }
const [text, settext] = useState('ADFASDFasds')
const [text2, settext2] = useState('4934 4352 3452')

  return (
    <div className='CustomLink'>
      <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={text}
    label="Age"
    className='DropdownCustomlink'
    onChange={handleChange}
  >
    <MenuItem value={'ADFASDFasds'}><IoLogoAngular color='#E84142' /> Available</MenuItem>
    <MenuItem value={20}>History</MenuItem>
    <MenuItem value={30}>Cart</MenuItem>
  </Select>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={text2}
    label="Age"
    className='AccountDropDown DropdownCustomlink'
    onChange={handleChange2}
  >
    <MenuItem value={'4934 4352 3452'}><Mdicons.MdAccountBalanceWallet color='#3772FF'/> 4934 4352 3452</MenuItem>
    <MenuItem value={20}><Mdicons.MdAccountBalanceWallet color='#3772FF'/> 3423 5345 4345</MenuItem>
    <MenuItem value={30}><Mdicons.MdAccountBalanceWallet color='#3772FF'/> 5435 4352 7547</MenuItem>
  </Select>
  <CustomLink/>
    </div>
  )
}

export default CustomeLink
