import { useState } from "react"
import TodoCards from "../TodoCards"

function CreateTask() {
  const [title, setTitle] = useState()
  const [tasks, setTasks] = useState([])

  const AddTask = (e) => {
    const value = e.target.value
    
    setTitle(value)
  }

  const CreateTask = (e) => {
    e.preventDefault()

    const newTask = {
      id: crypto.randomUUID(),
      title: title,
      completed: false
    }

    const temp = [...tasks]
    temp.unshift(newTask)
    setTasks(temp)

    setTitle('')
    form.reset()
  }

  function DeleteTask(id){
    const temp = tasks.filter((item) => item.id !== id)

    setTasks(temp)
  }


  return (
    <div className="flex flex-col items-center mt-10">
      <form className="flex" id="form" onSubmit={CreateTask}>
        <input className="w-[250px] border-2 border-[#E0BBE4] rounded-md py-2 px-5" onChange={AddTask} type="text" placeholder="Describir una tarea..."/>
        <input className="ml-2 w-[75px] border-2 border-[#E0BBE4] py-2 px-2 rounded-md hover:bg-gradient-to-r from-[#FEC8D8] to-[#D291BC] hover:text-white hover:cursor-pointer hover:border-0" onSubmit={CreateTask} type="submit" value="Agregar"/>
      </form>

      <div>
        {
          tasks.map(item => (
            <TodoCards item={item} key={item.id} onDelete={DeleteTask}/>
          ))
        }
      </div>
    </div>
  )
}

export default CreateTask