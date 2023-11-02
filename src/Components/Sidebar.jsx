import React from 'react'
import '../Pages/Home/Home.css'
import Navbar from './Navbar'
import Search from './Search'
import Chats from './Chats'

const Sidebar = () => {
  return (
    <div className='side-bar'>
      <Navbar/>
      <Search/>
      <Chats/>
    </div>
  )
}

export default Sidebar
