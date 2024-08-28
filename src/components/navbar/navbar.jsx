import React from 'react'
import "./navbar.css"
import Divider from '@mui/material/Divider'

const Menu = () => (
  <>
  <p><a href='#page'>Calorie Calculator</a></p>
  <Divider aria-hidden="true" sx={{bgcolor: "beige"}} orientation="vertical" flexItem />
  <p><a href='#macro'>Macro Calculator</a></p>
  </>
)

//BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className='portfolio__navbar'>
      <div className='portfolio__navbar-links'>
        <div className='portfolio__navbar-links_container'>
          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar