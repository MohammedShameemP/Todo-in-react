import  React,{useState,useEffect} from 'react';
import './Todo.css'
import {Button,Row,Col,Container,InputGroup,FormControl} from 'react-bootstrap'
import EmptyTodo from './EmptyTodo'
import DateNow from './Date'
import Loading from './Loading/Loading';
export default function Todo() {


const [text,setText ] = useState('')
const [store,setStore] = useState([])
const [done,setDone] = useState([])
const [loading, setLoading] = useState(true)

//useEffect
useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, 1000);
}, [])



// adding to store
const submitHandler =(e)=>{
  e.preventDefault()
  if(text!=''){
    setStore([...store,{value:text,status:false,id:Date.now()}])
    setText('')
  }
}


//deleting todo
const deleteTodo = key =>{
  console.log(key,'key');
  setStore(store.filter((data,i)=>i!==key))
 
  // store.splice(key,1)
  // setStore([...store])

}


//status Activation
const statusActivation = datas =>{
  console.log(datas,'datas');
 setStore(store.filter((data,i)=>{
  if(data.id===datas.id){ 
    data.status = true
  }
  return datas
  
 }))
}

//adding to taskdone state
const taskDone =(datas)=>{
console.log(datas,'datas');
setDone([...done,datas])
setStore(store.filter((data,i)=>data.id!==datas.id))
}

return (
  <div className='todo-container text-align-center'>
     
     {
      loading ? <Loading/>
      : <>
       <h5><DateNow/></h5>
    <h1 > TODO APP</h1>
   <form className='input-section' onSubmit={submitHandler}>
    <input value={text} onChange={(e)=>{setText(e.target.value)}} type="text" placeholder='Enter items...'/>
   </form>
  
    <ul style={{padding:0}}>
      { 
       store.length ?  store.map((data,i)=>{
            return(
              <div>
            <li className="d-flex align-items-center ">
              {data.value}
            <span className='ms-auto justify-content-center'>  <span onClick={(e)=>{e.preventDefault();statusActivation(data)}} id='active'>Active</span> <i onClick={()=>{deleteTodo(i)}} class="fa-solid fa-trash-can"></i></span>
             </li>
             </div>
          )
        })
        : <EmptyTodo/>
      }
   </ul>
     
              <h5 id='activeTasks' >ACTIVE TASKS</h5>
      <ul style={{padding:0}}>
      {
        store.map((data,i)=>{
          if(data.status){
            return <li className='d-flex justify-content-between'>{data.value} <span id='done' onClick={(e)=>{e.preventDefault();taskDone(data)}} >Done</span></li>
          }
          return null
       
        })
      }
     </ul>

  
  <div className='mt-0'>
  <button type="button"  id='doneTasks' data-bs-toggle="modal" data-bs-target="#exampleModal">
 Done Tasks
</button>
  </div>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">

        <h5 className="modal-title" id="exampleModalLabel">Tasks</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        {
          done.map((data,i)=>{
           return <h5>{data ? <del>{data.value}</del> :'No Done Tasks'}</h5>
          })
        }
      </div>
     
    </div>
  </div>
</div>
      </>
     }

  </div>
  );
}
