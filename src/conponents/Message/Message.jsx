import React from 'react'

const Message = ({author='Anonimous', message='message'}) => {
  return (
      <div>
          <p>Result:{22*3} </p>
          <p>Author: {author }</p>
         <p>{message}</p>
    </div>
  )
}

export default Message
