import React, { useState } from 'react'
import '../App.css';
import All from './All';
import Completed from './Completed';
import Pending from './Pending';

export default function List()
{
    const[text,setText]=useState('')
    const handleOnChange= (event) =>
    {
        setText(event.target.value);
        //console.log(text);
    }
    const[items,setItems]=useState([])
    const adding=()=>
    {
        if(text!=='')
        {
          const txt={
            data:text,
            done: false
          }
          items.push(txt)
          setItems((old)=>{
            console.log(old);
            return old
            })
          setText('')

        }
    }
    const handleDelete = (id) =>
    {
      setItems((old)=>{return old.filter((arrE,index)=>{
        return index !== id;
      })})
    }
    const handleMarkDone = (id) =>
    {
      items[id].done=true;
      //console.log(items);
      setItems((old)=>{
        return old.map((it,index)=>{
          if(index===id){
            const nIt={data:it.data,
            done:true}
            return nIt; 
          }
          else return it
        })
      })
    }
    const[curr,setCurr]=useState('ALL')
    const handleAll=()=>{
      setCurr('ALL')
    }
    const handleComp=()=>{
      setCurr('COMPLETED')
    }
    const handlePending=()=>{
      setCurr('PENDING')
    }

  return (
    <>
    <div className='div1'>
      <h1> TASK MANAGER </h1>
    </div>
    <div className='div2'>
        <h1>Add New Task</h1>
      <div>
        <input value={text} placeholder='Enter new tak here' className='inputField' type='text' onChange={handleOnChange}/ >
        <button className='btn' onClick={adding}><b>+</b></button>
        
      </div>
      <br />
      <div  className='box'>
        <div className='navSelect' onClick={handleAll}><b>ALL</b></div>
        <div className='navSelect' onClick={handleComp}><b>COMPLETED</b></div>
        <div className='navSelect' onClick={handlePending}><b>PENDING</b></div>
      </div>
      
      {curr==='ALL' && <All items={items} handleDelete={handleDelete} handleMarkDone={handleMarkDone}/>}
      {curr==='COMPLETED' && <Completed items={items} handleDelete={handleDelete} handleMarkDone={handleMarkDone}/>}
      {curr==='PENDING' && <Pending items={items} handleDelete={handleDelete} handleMarkDone={handleMarkDone}/>}
      <br />
    </div>
    </>
  )
}
