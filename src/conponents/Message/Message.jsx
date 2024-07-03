import React from 'react'
import s from './Message.module.css'

const Message = ({author='Anonimous', message='message'}) => {
  return (
      <div>
          {/* <p>Result:{22*3} </p> */}
          <p className={`${s.title} ${s.green}`}>Author: <span>{author}</span></p>
         <p>{message}</p>
    </div>
  )
}

export default Message
 