import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

export default function ViewMode(props) {

    return(
        <div className="modal">
            <div className="notes-header">
                <span className="back" onClick={props.back}>Back</span>
                <div className="update-buttons">
                    <span className="edit-update" onClick={props.edit}>Edit</span>
                    <span className="save-delete" onClick={props.delete}>Delete</span> 
                </div>
            </div> 
            <ReactMarkdown children={props.value}/>   
        </div>
    )
}
ViewMode.propTypes = {
    back: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    delete: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired
}