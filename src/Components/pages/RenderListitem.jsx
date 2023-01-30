import React from 'react'

const RenderListitem = ({item:{welcome,title,author:{firstname,lastname}}}) => {
  return (
    <>
      <div>{welcome}</div>
      <div>{title}</div>
      <div>{firstname}</div>
      <div>{lastname}</div>
    </>
  )
}

export default RenderListitem
