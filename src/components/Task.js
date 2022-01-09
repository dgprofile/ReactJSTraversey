import {FaTimes} from 'react-icons/fa'
const Task = (props) =>{
    return(
        <>
            <h1>
                {props.task.taskName} 
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer'}}
                onClick={()=> props.onDelete(props.task.id)}>
                </FaTimes>
            </h1>
            <h3>
                by {props.task.owner}
            </h3>
        </>
    )
}

export default Task;