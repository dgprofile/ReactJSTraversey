import Task from './Task'
 
const Tasks = ({realTasks, onDelete}) => {
  
  return (
    <>
      {realTasks.map((task) => (
      <Task key={task.id} task={task} onDelete={onDelete}></Task> 
  ))}
    </>
  );
};

export default Tasks;
