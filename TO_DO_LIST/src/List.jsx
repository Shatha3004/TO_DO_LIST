import React from 'react';
import { useState } from 'react';
function List() {

    const [task,settask] = useState([]);
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");

    function addTask() {
        if(name.trim==="" || description.trim()==="") {return}

        const newTask ={
            task_name:name,
            task_description:description
        }

        settask([...task,newTask]);
        setName("");    
        setDescription("");
    }

    function delete_task(index)
    {
        const tasks=task.filter((task,i)=>i!==index);
        settask(tasks);
    }   

  return (
    <div className='w-full  h-screen '>
      <h1 className='text-center pt-10 font-bold text-3xl'>To-Do List</h1>

      <div className='flex  items-center flex-col p-10 gap-4'>
        <input
          className='border-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-80 '
          type="text"
          value={name}
          placeholder="Enter a task Name"
          onChange={(e)=>setName(e.target.value)}
          />
           <textarea name="" id="" placeholder='Enter a task description'
           value={description}
           className='border-2 border-gray-400 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 w-80 '
           onChange={(e)=>setDescription(e.target.value)}
           ></textarea>
        <input
          type="button"
          value="Add"
          onClick={addTask}
          className='bg-purple-500 text-white px-6 py-2 rounded-md hover:bg-purple-600 transition cursor-pointer w-40'/>
      </div>
        <div>
            <table className='w-full border-collapse'>
                <tr>
                    <th>S No</th>
                    <th>Task Name</th>
                    <th>Task Description</th>
                    <th>Actions</th> 
                </tr>
                {
                    task.map((t,i)=> (
                        <tr key={i} className='text-center '>
                            <td className='p-5 w-1/4'>{i+1}</td>
                            <td className='p-5 w-1/4'>{t.task_name}</td>
                            <td className="p-5 max-w-xs break-words">{t.task_description}</td>
                            <td className='p-5 w-1/4'>
                                <button className='bg-red-600 text-white px-3 py-2 rounded-md cursor-pointer hover:bg-green-500'
                                onClick={()=>delete_task(i)}
                                >Delete</button>
                            </td>
                            <hr />
                        </tr>
                    ))
                }
            </table>
        </div>
    </div>
  );
}

export default List;
