import { AiOutlineMail, AiOutlineMobile } from "react-icons/ai";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { ReactComponent as TrustLogo } from "../../assets/images/footer/trustPilotLogo.svg";
import SecuredBySectigo from "../../assets/images/footer/securedBySectigo.svg";
import BBBbusniess from "../../assets/images/footer/BBBbusniess.svg";

function Footer() {
  return (
    <footer className="">
      <div className="flex flex-row justify-between">
        <div className="w-6/12 bg-regal-gray-background">
          <div className="container pt-[44px] pr-[59px] pb-[80px] pl-[160px]">
            <div className="container mb-16">
              <div className="w-full">
                <h2 className="text-footer-heading-font font-basis_grotesque_probold text-regal-blue">
                  Buy, sell and{" "}
                  <span className="text-regal-orange">get financing</span> with
                  a click of a button!
                </h2>
              </div>
              <div className="mt-6 w-full">
                <p className="font-basis_grotesque_proregular text-regal-font-gray text-footer-typo-font tracking-wider font-normal">
                  Finance That is Canada&apos;s first peer-to-peer automotive
                  and powersport marketplace that connects buyers with sellers
                  and provide on spot financing.
                </p>
              </div>
            </div>
            <div className="container mb-12">
              <ul className="flex">
                <li className="inline-flex text-regal-blue text-footer-icon-font pr-[20px] m-0">
                  <span className="mr-2 bg-slate-200 w-[30px] h-[30px] text-center rounded-3xl flex justify-center align-middle pt-2">
                    <AiOutlineMobile />
                  </span>
                  1-844-354-5454
                </li>
                <li className="inline-flex text-regal-blue text-footer-icon-font p-0 m-0">
                  <span className="mr-2 bg-slate-200 w-[30px] h-[30px] text-center rounded-3xl flex justify-center align-middle pt-2">
                    <AiOutlineMail />
                  </span>
                  info@financethat.ca
                </li>
              </ul>
            </div>
            <div className="container mb-12">
              <ul className="flex flex-row">
                <li className="text-regal-blue text-footer-social-icon pr-[10px] m-0">
                  <span className="mr-2 bg-white w-[66px] h-[66px] text-center rounded-full inline-flex justify-center align-middle pt-5 hover:bg-regal-orange  hover:text-white">
                    <FaFacebookF className="transition-all delay-75 ease-in" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-social-icon pr-[10px] m-0">
                  <span className="mr-2 bg-white w-[66px] h-[66px] text-center rounded-full inline-flex justify-center align-middle pt-5 hover:bg-regal-orange  hover:text-white">
                    <FaInstagram className="transition-all delay-75 ease-in" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-social-icon pr-[10px] m-0">
                  <span className="mr-2 bg-white w-[66px] h-[66px] text-center rounded-full inline-flex justify-center align-middle pt-5 hover:bg-regal-orange  hover:text-white">
                    <FaTwitter className="transition-all delay-75 ease-in" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-icon-font p-0 m-0">
                  <span className="text-center w-[200px] h-[40px] inline-flex justify-center align-middle">
                    <TrustLogo />
                  </span>
                </li>
              </ul>
            </div>
            <div className="container mb-12">
              <ul className="flex flex-row flex-wrap">
                <li className="text-regal-blue text-footer-icon-font p-0 m-0">
                  <span className="text-center inline-flex justify-center">
                    <img src={SecuredBySectigo} alt="SecuredBySectigo" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-icon-font pt-2 ml-4">
                  <span className="text-center inline-flex justify-center">
                    <img src={BBBbusniess} alt="BBBbusniess" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-icon-font pt-2 ml-4">
                  <span className="text-center inline-flex justify-center">
                    <img
                      src="https://www.positivessl.com/images/seals/positivessl_trust_seal_lg_222x54.png"
                      alt="BBBbusniess"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/** Right Side Footer */}
        <div className="w-6/12 bg-white">
          <div className="container pt-[44px] pr-[59px] pb-[80px] pl-[160px]">
            <div className="container mb-16">
              <div className="w-full">
                <h2 className="text-footer-heading-font font-basis_grotesque_probold text-regal-blue">
                  Buy, sell and{" "}
                  <span className="text-regal-orange">get financing</span> with
                  a click of a button!
                </h2>
              </div>
              <div className="mt-6 w-full">
                <p className="font-basis_grotesque_proregular text-regal-font-gray text-footer-typo-font tracking-wider">
                  Finance That is Canada&apos;s first peer-to-peer automotive
                  and powersport marketplace that connects buyers with sellers
                  and provide on spot financing.
                </p>
              </div>
            </div>
            <div className="container mb-12">
              <ul className="flex">
                <li className="inline-flex text-regal-blue text-footer-icon-font pr-[20px] m-0">
                  <span className="mr-2 bg-slate-200 w-[30px] h-[30px] text-center rounded-3xl flex justify-center align-middle pt-2">
                    <AiOutlineMobile />
                  </span>
                  1-844-354-5454
                </li>
                <li className="inline-flex text-regal-blue text-footer-icon-font p-0 m-0">
                  <span className="mr-2 bg-slate-200 w-[30px] h-[30px] text-center rounded-3xl flex justify-center align-middle pt-2">
                    <AiOutlineMail />
                  </span>
                  info@financethat.ca
                </li>
              </ul>
            </div>
            <div className="container mb-12">
              <ul className="flex flex-row ">
                <li className="text-regal-blue text-footer-social-icon pr-[10px] m-0">
                  <span className="mr-2 bg-white w-[66px] h-[66px] text-center rounded-full flex justify-center align-middle pt-5 hover:bg-regal-orange  hover:text-white">
                    <FaFacebookF className="transition-all delay-75 ease-in" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-social-icon pr-[10px] m-0">
                  <span className="mr-2 bg-white w-[66px] h-[66px] text-center rounded-full flex justify-center align-middle pt-5 hover:bg-regal-orange  hover:text-white">
                    <FaInstagram className="transition-all delay-75 ease-in" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-social-icon pr-[10px] m-0">
                  <span className="mr-2 bg-white w-[66px] h-[66px] text-center rounded-full flex justify-center align-middle pt-5 hover:bg-regal-orange  hover:text-white">
                    <FaTwitter className="transition-all delay-75 ease-in" />
                  </span>
                </li>
                {/* <li className="text-regal-blue text-footer-icon-font p-0 m-0">
                  <span className="text-center w-[250px] h-[40px] flex justify-center align-middle">
                    <TrustLogo />
                  </span>
                </li> */}
              </ul>
            </div>
            <div className="container mb-12">
              <ul className="flex flex-row ">
                <li className="text-regal-blue text-footer-icon-font p-0 m-0">
                  <span className="text-center inline-flex justify-center">
                    <img src={SecuredBySectigo} alt="SecuredBySectigo" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-icon-font pt-2 ml-4">
                  <span className="text-center inline-flex justify-center">
                    <img src={BBBbusniess} alt="BBBbusniess" />
                  </span>
                </li>
                <li className="text-regal-blue text-footer-icon-font pt-2 ml-4">
                  <span className="text-center inline-flex justify-center">
                    <img
                      src="https://www.positivessl.com/images/seals/positivessl_trust_seal_lg_222x54.png"
                      alt="BBBbusniess"
                    />
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-lg font-basis_grotesque_proregular font-medium regal-blue pr-14 pl-14 w-full items-center h-[50px] flex justify-between bg-[#F5F7FA] shadow --tw-shadow: 0px 20px 60px rgba(38, 47, 86, 0.04);">
        2019 © Finance That. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
=