import Task from './Task'
 
const Tasks = ({realTasks, onDelete, onDoubleClick}) => {
  
  return (
    <>
      {realTasks.map((task) => (
      <Task 
        key={task.id} 
        task={task} 
        onDelete={onDelete}
        onDoubleClick={onDoubleClick}></Task> 
  ))}
    </>
  );
};

export default Tasks;
