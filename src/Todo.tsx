import { useState } from "react"
import React from "react"
import Task from './Task'

type Tasks = {
    i: number;
    text: string;
}

let n: number = 0;

const Todo = () => {

    const[text,setText] = useState<string>('')
    const[taskarr,setTask] = useState<Tasks[]>([])
    const[donearr,setDone] =useState<Tasks[]>([])
    const[nulltext,setNull] = useState<string>('')

    const onKeyDownCallback = (ev: React.KeyboardEvent<HTMLInputElement>) => {
        // Enter ฟังก์ชัน
        if(ev.key==="Enter") 
            adding(text)
    }

    const onInputCallback = (ev: React.ChangeEvent<HTMLInputElement>) => {
        // value = nulltext
        // set เพื่อเข้า adding(text)
        setNull(ev.target.value)
        setText(ev.target.value)
    }

    const adding =(inputtask :string)=>{
        //ใช้ int n เก็บค่า i
        const index = n++;

        if(inputtask!==""){
            //add 
            const newadded = [{i: index, text: inputtask},...taskarr]
            setTask(newadded)
            //set ให้ช่อง input เป็น "" หลัง add
            setNull("")
            // กันไม่ให้ add ค่าเดิมเมื่อกด add ซ้ำ
            setText("")
        }else if(inputtask==="")
        // ถ้า input == "" ให้ alert
            alert("Task cannot be empty")
    }

    const delTask = (index : number) => {
        // filter ตัวอื่นออกมานอกจาก task นี้
        const newTasks = taskarr.filter(data => data.i !== index)
        setTask(newTasks)
    }

    const doneTask = (index : number, text:string) => {
        // filter ตัวอื่นออกมานอกจาก task นี้
        const newTasks = taskarr.filter(data => data.i !== index)
        setTask(newTasks)
        // add task ใน done array
        const newDone = [{i: index, text: text},...donearr]
        setDone(newDone)
    }


    return(
        <div className='mx-auto max-w-4xl'>

        {/* task input and add button */}
        <div className='flex space-x-1'>
            {/* กด Enter , เก็บค่า input, set input */}
          <input className='border border-gray-400 w-full text-2xl' onChange ={onInputCallback}
            onKeyDown={onKeyDownCallback} value={nulltext}></input>
            {/* คลิก+ แล้ว เรียก adding */}
          <button className='border border-gray-400 w-8 font-bold' onClick={() => adding(text)}>+</button>
        </div>

        {/* tasks section */}
        <div>
            {/* data ใน  task array นำไปสร้าง tasks */}
            {taskarr.map( data => <Task.Task i={data.i} text={data.text} doneBtn={doneTask} delBtn={delTask}/>)}
            {/* data ใน done array นำไปสร้าง done tasks */}
            {donearr.map(data => <Task.DoneTask text={data.text} />)}
        </div>
        </div>
    )
}

export default Todo