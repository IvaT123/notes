import PropTypes from 'prop-types';

export default function EditMode (props) {

    return(
        <div className="modal">
            <div className="textarea-header">
                <span className="back" onClick={props.back}>
                    {props.startButtonValue}
                </span>
                <div>
                <span className={props.editButtonClass} onClick={props.update}>
                    {props.middleButtonValue}
                </span>
                <span className="save-delete" onClick={props.onEndClick}>
                    {props.endButtonValue}
                </span>
                </div>
            </div> 
            <textarea className="textarea" onChange={props.onChange} defaultValue={props.value}>

            </textarea>      
        </div>
    )
} 

EditMode.propTypes = {
    back: PropTypes.func.isRequired,
    startButtonValue: PropTypes.string.isRequired,
    editButtonClass: PropTypes.string,
    update:PropTypes.func,
    middleButtonValue: PropTypes.string,
    onEndClick: PropTypes.func,
    endButtonValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}