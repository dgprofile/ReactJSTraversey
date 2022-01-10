import "./App.css";
import {useState} from 'react'
import Header from "./components/Header";
import Softwares from "./components/Softwares";
import Tasks from "./components/Tasks";
import Addtask from "./components/Addtask";
const name = "Brad";
const x = false;
function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        taskName: "Scope define",
        owner: "Joseph",
        status: "started",
        reminder: false
      },
      {
        id: 2,
        taskName: "Create WBS",
        owner: "Rick",
        status: "started",
        reminder: true
      },
      {
        id: 3,
        taskName: "Produce Estimate",
        owner: "Soniya",
        status: "started",
        reminder: false
      },
      {
        id: 4,
        taskName: "Publish Budget",
        owner: "Risabh",
        status: "started",
        reminder: false
      },
      {
        id: 5,
        taskName: "Resource Planning",
        owner: "Keith",
        status: "started",
        reminder: true
      }
    ]
  )
  const addTask = (task) =>{
    
    const id = Math.floor(Math.random() * 1000) + 1
    const newTask = {id, ...task}

    console.log(newTask)
    setTasks([...tasks, newTask])

  }
  const deleteTask = (id) => {
    console.log('delete', id);
    setTasks(tasks.filter((task)=>task.id!==id));
  }
  const toggleTask = (id) =>{
    console.log('toggle', id);
    setTasks(tasks.map((task)=>task.id===id ? 
    {...task, status:"completed"}:task))
  }
  return (
    <div className="container">
      <Addtask onAdd={addTask}></Addtask>
      <h1>Do you have a new car? {x ? "Yes" : "No"}</h1>
      <Softwares></Softwares>
      {tasks.length>0 ? 
      <Tasks 
        realTasks={tasks} 
        onDelete={deleteTask}
        onDoubleClick={toggleTask}></Tasks>
        : 'No more tasks found'
      }
      {/* <Header taskId={15} title={"Work on clearing the payments"}></Header> */}
    </div>
  );
}

export default App;
