import PropTypes from 'prop-types';

const Choices = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className='border p-2 m-2 focus:outline-none hover:bg-gray-200'
    >
      {text}
    </button>
  );
};

Choices.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Choices;
