import React from 'react'
import s from './Message.module.css'
import clsx from 'clsx'

const Message = ({ author = 'Anonimous', message = 'message' }) => {
  const isOnline = true;
  return (
      <div>
          {/* <p>Result:{22*3} </p> */}
      <p className={clsx(s.title, s.green, isOnline && s.online )}>
        Author: <span>{author}</span></p>
         <p>{message}</p>
    </div>
  )
}

export default Message
 