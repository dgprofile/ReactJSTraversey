import {FaTimes} from 'react-icons/fa'
const Task = (props) =>{
    return(
        <div 
        onDoubleClick={()=>props.onDoubleClick(props.task.id)}
        className={`${props.task.reminder?'reminder':'started'}`}>
            <h1>
                {props.task.taskName} 
                 
                <FaTimes 
                style={{ color: 'red', cursor: 'pointer'}}
                onClick={()=> props.onDelete(props.task.id)}
                >
                </FaTimes>
            </h1>
            <h3>
                {props.task.status}
                <br></br>
                by {props.task.owner}
            </h3>
        </div>
    )
}

export default Task;