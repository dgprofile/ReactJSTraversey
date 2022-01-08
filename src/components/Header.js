import PropTypes from 'prop-types'
import Button from './Button.js'
const Header = (props) => {
    const submitClicked = () =>{
        console.log("submit btn Clicked")
    }
    const cancelClicked = () =>{
        console.log("cancel btn Clicked")
    }
    return (
        <header>
            {/* <h1 style={{color: 'red', backgroundColor:'black'}}>Task item id: {props.taskId}</h1> */}
            <h1 style={headerStyle}>Task item id: {props.taskId}</h1>
            
            <section className="tasks">
                <h1>Task item title: {props.title}</h1>
                <Button btnText="Submit" backgroundColor="blue" color="white" 
                    onClick={submitClicked}></Button>
                <Button btnText="Cancel" backgroundColor="red" color="white" 
                    onClick={cancelClicked}></Button>
                <Button></Button>
            </section>
            
        </header>
    )
}

Header.defaultProps = {
    taskId: "hello",
    title: "Handle shopping orders"
}

Header.propTypes ={
    taskId: PropTypes.number.isRequired,
    title: PropTypes.string
}

const headerStyle = {
    color: 'red', 
    backgroundColor:'yellow',
    border: 'green 5px solid' 
}
export default Header