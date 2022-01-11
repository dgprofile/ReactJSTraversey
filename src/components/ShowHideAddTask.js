import Button from "./Button.js";
const ShowHideAddTask = ({onShowHide, showText}) => {
    return(
        <>
            <Button
                type="button"
                btnText={showText? 'Hide':'Show'}
                onClick={onShowHide} 
                color={showText? 'yellow':'white'}
                backgroundColor = {showText? 'red':'green'}
            />
        </>
    )
}

export default ShowHideAddTask;