import React from "react";
import { BallTriangle } from  'react-loader-spinner'
import bootstrap from 'react-bootstrap'
// import emoji from '../../public/logo121.png'
import './EmptyTodo.css'
function EmptyTodo(){

    return(
        <div id="EmptyTodo">

<img id="img"  style={{width: 200, height: 200}} src="logo121.png"  />
<h1 id="NoTasks" className="mt-5" >No tasks</h1>

   

  </div>
    )

}
export default EmptyTodo