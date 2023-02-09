import React from 'react'
import '../App.css';

export default function  Individual
(props) {
  const mystylesComp=
  {
    marginLeft: '1%',
    backgroundColor:'rgba(172, 255, 47, 0.926)'
  }
  const mystylesPending=
  {
    marginLeft: '1%',
    backgroundColor:'red'
  }
  return (
    <div className='indivDiv1'>
      <div>
        <button className='btnIndiv' onClick={()=>{props.handleDelete(props.id)}}><strong>REMOVE</strong></button>
        <button className='btnIndiv' onClick={()=>{props.handleMarkDone(props.id)}}><strong>MARK AS DONE</strong></button>
        {props.item.done ?<button style={mystylesComp}>Completed</button>:<button style={mystylesPending}>Pending</button>}
      </div>
      <div>
        <p className='itemData'><strong>{props.item.data}</strong></p>
      </div>
    </div>
  )
}
