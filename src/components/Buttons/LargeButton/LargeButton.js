import PropTypes from "prop-types";

function LargeButton({ name, onClick, className }) {
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

LargeButton.defaultProps = {
  name: "",
  className: "",
  onClick: () => {}
};
LargeButton.propTypes = {
  name: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

export default LargeButton;
