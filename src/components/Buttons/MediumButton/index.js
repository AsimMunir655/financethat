import PropTypes from "prop-types";

function MediumButton({ name, onClick, className }) {
  return (
    <button
      className={`bg-regal-orange text-base font-basis_grotesque_probold font-bold text-white hover:bg-regal-blue ${className}`}
      type="button"
      aria-label={name}
      onClick={onClick}>
      {name}
    </button>
  );
}

MediumButton.defaultProps = {
  name: "",
  className: "",
  onClick: () => {}
};
MediumButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default MediumButton;
