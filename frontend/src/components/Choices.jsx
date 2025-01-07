import PropTypes from 'prop-types';

const Choices = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

Choices.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Choices;
