import React from 'react'
import "./styles/NavBar.css"

import { IoPodiumOutline, IoHelpCircleOutline } from 'react-icons/io5'

const NavBar = (props) => {
  return (
    <div className="container">
      <IoPodiumOutline/>
      <p>{props.score}</p>
      <IoHelpCircleOutline onClick={()=>props.setOpen(true)}/>
    </div>
  )
}

export default NavBar