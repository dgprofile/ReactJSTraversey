import { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [taskName, setTaskName] = useState('')
  const [owner, setOwner] = useState('')
  const [status, setStatus] = useState('')
  const [reminder, setReminder] = useState('')


  const submitTask = (e) =>{
      e.preventDefault()
      if(!taskName)
      {
          alert("Please enter a Task")
          return
      }
      onAdd({taskName, owner, status, reminder}) 
      setTaskName('')
      setOwner('')
      setStatus('')
      setReminder(false)
  }
  return (
    <form className='add-form' onSubmit = {submitTask}>
      <div className='form-control'>
        <label>Task Name</label>
        <input
          type='text'
          placeholder='Add Task'
          value={taskName} 
          onChange={(e)=>setTaskName(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Owener Name</label>
        <input
          type='text'
          placeholder='Owener name'
          value={owner} 
          onChange={(e)=>setOwner(e.target.value)}
        />
      </div>
      <div className='form-control'>
        <label>Task Status</label>
        <input
          type='text'
          placeholder='Enter Status'
          value={status} 
          onChange={(e)=>setStatus(e.target.value)}
             />
      </div>
      <div className='form-control form-control-check'>
        <label>Set Reminder</label>
        <input
          type='checkbox'
          checked={reminder}
          value={reminder} 
          onChange={(e)=>setReminder(e.currentTarget.checked)}
             />
      </div>

      <input type='submit' value='Save Task' 
      className='btn btn-block' />
    </form>
  )
}

export default AddTask