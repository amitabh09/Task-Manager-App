import React from 'react'
import Individual from './Individual';

export default function All(props) {
  return (
    <div>
    { props.items.map((item,index)=> {
      //console.log();
      return <Individual item={item} 
      handleDelete={props.handleDelete}
      handleMarkDone={props.handleMarkDone}
      key={index}
      id={index}
      />;})
    }
  </div>
  )
}
