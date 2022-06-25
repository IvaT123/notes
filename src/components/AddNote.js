import PropTypes from 'prop-types';
export default function AddNote({value, onClick}) {
    return(
        <div className="note add-note" onClick={onClick}> 
            <span>{value}</span>
        </div>
    )
}

AddNote.propTypes = {
    value: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
}