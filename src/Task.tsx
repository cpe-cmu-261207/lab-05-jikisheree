import { useState } from "react"

type notdone = {
    i: number;
    text: string;
    doneBtn: Function; 
    delBtn: Function; 
}

type done = {
    text: string; 
}

//แสดง Tasks
const Task = ({i,text,doneBtn,delBtn}: notdone) => {

    // ใช้ useState เมื่อชี้เม้าส์
    const [show, setShow] = useState<boolean>(false)
    const Enter= ()=> setShow(true)
    const Leave= ()=> setShow(false)
    
    return(
        <div
            className="flex justify-between h-8 items-center py-6 border-b" onMouseEnter={Enter} onMouseLeave={Leave}
          >
            <span className="text-2xl"> {text} </span>
            <div className="flex space-x-1 items-center">
            
            {/* ถ้า show === true แล้วสร้างปุ่มขึ้นมา */}
            {show?<button className="bg-green-400 w-24 text-2xl" onClick={() => doneBtn(i, text)} >Done</button>:null}
            {show?<button className="bg-red-400 w-24 text-2xl" onClick={() => delBtn(i, text)} >Delete</button>:null}
        
            </div>
          </div>
    )
    }

//แสดง done tasks
const  DoneTask = ({text}: done) => {
    return (
    <div className="flex justify-between h-8 items-center py-6 border-b">
        {/* done tast ขีดฆ่าตัวหนังสือ โดยใช้ style */}
        <span className="text-2xl" style = {{textDecorationLine: 'line-through'}}>{text}</span>
    </div>
    );
}

export default {Task ,DoneTask}