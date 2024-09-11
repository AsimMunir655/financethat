import { Link } from "react-router-dom";
import CountryPhoneNumber from "@Components/Inputs/CountryPhoneNumber";
import MediumButton from "@Components/Buttons/MediumButton";
import SignImage from "../../../../assets/images/header/select-img-1.png";

// import Authfooter from "../../../../components/authfooter/authfooter";

function BuyerLogin() {
  return (
    <div className="flex">
      <div className="w-7/12 pl-10 pt-14">
        <p className="text-regal-blue text-2xl font-bold font-basis_grotesque_proregular pb-2">
          Sign in
        </p>
        <span className=" text-lg text-regal-blue font-basis_grotesque_proregular font-normal">
          Don&rsquo;t have an account?
          <Link className="font-bold" to="/">
            {" "}
            Sign Up
          </Link>
        </span>
        <p className=" pb-8 pt-8 text-lg text-regal-blue font-basis_grotesque_proregular tracking-wider">
          Please enter the phone number you used to register
          <br /> and we will send you a verification code via SMS.
        </p>
        <CountryPhoneNumber name="phoneNumber" className="mb-11" />
        <MediumButton name="Send Code" className="rounded-md w-36 h-12" />
      </div>

      <div className="w-5/12">
        <div className="absolute ml-12 mt-20 2xl:leading-10 text-white text-4xl  font-freightdispproblauploadedfile">
          Buy, sell and get financing
          <br /> with a click of a button.
        </div>
        <img className="" src={SignImage} alt="signa" />
      </div>
      {/* <Authfooter /> */}
    </div>
  );
}
export default BuyerLogin;
