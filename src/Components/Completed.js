import React from 'react'

export default function Completed(props) {
  return (
    <div>
    { props.items.map((item,index)=> {
      return item.done && <div className='indivDiv2'> <strong>{item.data}</strong> </div>;})
    }
  </div>
  )
}
