import "./App.css";
import {useState, useEffect} from 'react'
import Header from "./components/Header";
import Softwares from "./components/Softwares";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
import ShowHideAddTask from "./components/ShowHideAddTask";


const name = "Brad";
const x = false;
function App() {
  const [tasks, setTasks] = useState([])
  const [showAddTask, setShowAddTask] = useState(true);

  // Fetch Tasks
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
    return data
  }

  // Fetch Task
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

  //READ-GET
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])

  //ADD-POST 
  const addTask = async (task) =>{
    const res = await fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(task),
    })

    const data = await res.json()

    setTasks([...tasks, data])


    // const id = Math.floor(Math.random() * 1000) + 1
    // const newTask = {id, ...task}

    // console.log(newTask)
    // setTasks([...tasks, newTask])
  }

  //DELETE-DELETE 
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
    //We should control the response status to decide if we will change the state or not.
    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
    // console.log('delete', id);
    // setTasks(tasks.filter((task)=>task.id!==id));
  }

  //UPDATE-PUT
  const toggleTask = async (id) =>{
    console.log('TEST TOGGLE')
    const taskToToggle = await fetchTask(id)
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
    console.log('updTask: '+updTask.reminder)
    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(updTask),
    })

    const data = await res.json()
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    )
    // console.log('toggle', id);
    // setTasks(tasks.map((task)=>task.id===id ? 
    // {...task, status:"completed"}:task))
  }
  return (
    <div className="container">
     
      <ShowHideAddTask 
      onShowHide={()=>setShowAddTask(!showAddTask)}
      showText={showAddTask}>
      </ShowHideAddTask>
      {showAddTask && <Addtask onAdd={addTask}></Addtask>}
     
      {tasks.length>0 ? 
      <Tasks 
        realTasks={tasks} 
        onDelete={deleteTask}
        onDoubleClick={toggleTask}></Tasks>
        : 'No more tasks found'
      }
       <Header 
      taskId={15} 
      title={"Work on clearing the payments"}></Header>
      <h1>Do you have a new car? {x ? "Yes" : "No"}</h1>
      <Softwares></Softwares>
    </div>
  );
}

export default App;
