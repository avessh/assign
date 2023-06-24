import React from 'react'

function Sidebar() {
  return (
    <div id='sidebar'>
      <ul id='sidebarLi' style={{textDecoration:'none'}}>
        <a href={'/'}><li style={{marginTop:"50px"}}>home</li></a>
        <a href={'contact'}><li style={{marginTop:"50px"}}>contact</li></a>
        <a href={'information'} ><li style={{marginTop:"50px"}}>information</li></a>
        <a href={'guide'}><li style={{marginTop:"50px"}}>guide</li></a>
      </ul>
    </div>
  )
}

export default Sidebar
