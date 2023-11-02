import React from 'react'
import cam from '../Pages/assets/cam.png'
import add from '../Pages/assets/add.png'
import more from '../Pages/assets/more.png'
import Messages from './Messages'
import Input from './Input'

const Chat = () => {
  return (
    <div className='chat'>
      <div className="chat-info">
        <span>Jane</span>
        <div className="chat-icons">
            <img src={cam} alt="" />
            <img src={add} alt="" />
            <img src={more} alt="" />
        </div>
      </div>
      <Messages/>
      <Input/>
      
    </div>
  )
}

export default Chat
