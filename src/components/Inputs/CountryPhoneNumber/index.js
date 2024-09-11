import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PropTypes from "prop-types";

function CountryPhoneNumber({ className, name, value, onChange }) {
  return (
    <PhoneInput
      className={className}
      name={name}
      inputExtraProps={{
        name: { name },
        required: false,
        autoFocus: false,
        placeholder: "#####"
      }}
      value={value}
      country="ca"
      onlyCountries={["ca"]}
      disableDropdown
      onChange={onChange}
    />
  );
}

// Specifies the default values for props:
CountryPhoneNumber.defaultProps = {
  className: "",
  name: "",
  value: "",
  onChange: () => {}
};
CountryPhoneNumber.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};
export default CountryPhoneNumber;
