import PropTypes from 'prop-types'
const Button = (props) =>{
    return(
        <button style={{backgroundColor: props.backgroundColor, color: props.color}}
        className="btn" onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}

Button.defaultProps = {
    backgroundColor: 'Green',
    color: 'lightGreen',
    btnText: 'Add'
}

Button.propTypes = {
    text:PropTypes.string,
    color:PropTypes.string,
    onClick: PropTypes.func
}

export default Button;