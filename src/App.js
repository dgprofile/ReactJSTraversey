import "./App.css";
import {useState} from 'react'
import Header from "./components/Header";
import Softwares from "./components/Softwares";
import Tasks from "./components/Tasks";
const name = "Brad";
const x = false;
function App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        taskName: "Scope define",
        owner: "Joseph"
      },
      {
        id: 2,
        taskName: "Create WBS",
        owner: "Rick"
      },
      {
        id: 3,
        taskName: "Produce Estimate",
        owner: "Soniya"
      },
      {
        id: 4,
        taskName: "Publish Budget",
        owner: "Risabh"
      },
      {
        id: 5,
        taskName: "Resource Planning",
        owner: "Keith"
      }
    ]
  )
  const deleteTask = (id) => {
    console.log('delete', id)
  }
  return (
    <div className="container">
      {name}
      <h1>Do you have a car? {x ? "Yes" : "No"}</h1>
      <Softwares></Softwares>
      <Tasks realTasks={tasks} onDelete={deleteTask}></Tasks>
      {/* <Header taskId={15} title={"Work on clearing the payments"}></Header> */}
    </div>
  );
}

export default App;
