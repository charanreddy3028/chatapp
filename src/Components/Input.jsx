import React from 'react'
import attach from '../Pages/assets/attach.png'
import img from '../Pages/assets/img.png'

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='Enter your text'/>
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
      
    </div>
  )
}

export default Input
