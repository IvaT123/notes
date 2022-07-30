import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';

export default function Notes ({value, onClick}) {
  const notes= [];
    for (var i = 0; i < value?.length; i += 1) {
      notes.push(
      <div id={i} className="note" key={i} onClick={onClick}>
        <ReactMarkdown children={value[i]} />
      </div>);
    };
    return (notes)
}

Notes.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func.isRequired
}