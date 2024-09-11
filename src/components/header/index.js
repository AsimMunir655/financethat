import "./header.scss";
import { Link } from "react-router-dom";
import "react-phone-input-2/lib/style.css";
import Select from "react-select";
import { ReactComponent as FinanceThat } from "../../assets/images/footer/finance-that-logo-footer.svg";
import { ReactComponent as Automotive } from "../../assets/images/banner/hp-automotive-icon.svg";
import { ReactComponent as Powersport } from "../../assets/images/banner/hp-powersport-icon.svg";
import { ReactComponent as Rvicone } from "../../assets/images/banner/hp-rv-icon.svg";
import { ReactComponent as Equipment } from "../../assets/images/banner/hp-small-equipment-icon.svg";
import { ReactComponent as Boat } from "../../assets/images/banner/hp-boat-icon.svg";
import { ReactComponent as Motorcycle } from "../../assets/images/banner/hp-motorcycle-icon.svg";
import { ReactComponent as Traile } from "../../assets/images/banner/hp-trailer-icon.svg";

const index = () => (
  <>
    {" "}
    <div className=" shadow-2xl pr-14 pl-10 w-full items-center h-[70px] flex justify-between bg-white">
      <div className="page__logo ">
        <FinanceThat className="h-[50px]" />
      </div>
      <div className=" flex  items-center">
        <div className="pr-6">
          <p className=" font-basis_grotesque_proregular text-base text-regal-font-gray">
            Sign in
          </p>
        </div>
        <Link
          to="/"
          className="pt-[6px] text-center w-28 h-[40px] font-medium font-basis_grotesque_proregular bg-[#F9D9CC] rounded-[50px] inline-block  border-2 border-white text-regal-orange align-middle"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light">
          Sign Up
        </Link>
      </div>
    </div>
    <div className="bg-[url('/src/assets/banner/fin_that_winter_banner.jpg')] bg-cover h-[721px]">
      <div className="">
        <h1 className="text-[54px] text-center leading-tight text-white pt-[176px] font-BasisGrotesquePro_Black content-center">
          Buy and sell used vehicles
          <br /> with instant online financing!
        </h1>
        <div className="flex w-full justify-center mt-10 items-center">
          <button
            className="hover:bg-regal-blue rounded-md w-72 h-[75px] bg-regal-orange text-white font-basis_grotesque_probold text-2xl"
            type="button"
            aria-label="name">
            Browse All Vehicles
          </button>
          <span className="text-white font-basis_grotesque_probold text-2xl pl-4 pr-4">
            or
          </span>
          <button
            className="hover:bg-regal-blue rounded-md w-72 h-[75px] bg-regal-orange text-white font-basis_grotesque_probold text-2xl"
            type="button"
            aria-label="name">
            Get Financing
          </button>
        </div>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-md shadow-2xl bg-white pt-[15px] pr-[40px] pl-[40px] pb-[15px] w-[90%] ml-auto mr-auto -mt-10">
      <div className="w-[40.9%] search_form">
        <input
          className="w-full font-BasisGrotesquePro_Medium text-lg h-[60px] outline-none"
          type="text"
          name="search"
          placeholder="Search by make, model or keyword"
        />
      </div>
      <div className="w-[22%] text-lg">
        <Select
          placeholder="All Categories"
          isSearchable={false}
          className="banner-react-select-main w-full"
          classNamePrefix="banner-react-select"
          closeMenuOnSelect
          required
          name="vehicleCategory"
        />
      </div>
      <div className="w-[22%] bordergray pl-5">
        <input
          className=" font-BasisGrotesquePro_Medium text-lg w-full h-[60px] outline-none"
          type="text"
          name="search"
          placeholder="Add Location"
        />
      </div>
      <div>
        <button
          className="btn btn-primary hover:bg-regal-blue rounded-md w-[145px] h-[48px] bg-regal-orange text-white font-basis_grotesque_probold text-2xl"
          type="button"
          aria-label="name">
          Search
        </button>
      </div>
      <div>
        <button
          className=" absolute mt-[70px]  right-[132px] text-sm text-regal-blue font-basis_grotesque_probold"
          type="button"
          aria-label="name">
          Show More Filters
        </button>
      </div>
      {/* vehicle Budget */}
    </div>
    <div className="w-[90%] mr-auto ml-auto mt-16 bg-regal-light-gray-background">
      <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl">
        <div className=" text-regal-blue pt-8  text-center font-basis_grotesque_probold text-4xl">
          Vehicle budget calculator
        </div>
        <div className="flex w-full pl-20 pr-20">
          <div className="mt-8 mb-5 w-[52.8] float-left">
            <div className=" mr-4 text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Automotive className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">
                Automotive
              </span>
            </div>
            <div className="mr-4 text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Motorcycle className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">Motorcyle</span>
            </div>
            <div className="mr-4 text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Rvicone className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">Rv</span>
            </div>
            <div className=" text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Boat className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">
                Powersport
              </span>
            </div>

            <div className=" mr-5 text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Equipment className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">
                Small Equipment
              </span>
            </div>
            <div className=" mr-5 text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Powersport className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">ATV</span>
            </div>
            <div className=" mr-5 text-center pb-5 pt-5 bg-white w-[25%] float-left border border-gray-200 rounded-2xl  p-[0 8px 16px 8px]">
              <div className="">
                <Traile className="w-full" />
              </div>
              <span className=" font-BasisGrotesquePro_Medium ">Trailer</span>
            </div>
          </div>
          <div className="">
            <div className=" text-regal-blue font-basis_grotesque_proregular text-3xl">
              Your estimated budget is info-icon
            </div>
            <div className=" font-basis_grotesque_probold text-[66px] text-regal-blue">
              $14,963
            </div>
            <div className="bg-regal-orange w-[350px] h-[70px] text-center text-white pt-8 font-BasisGrotesquePro_Medium text-[20px]">
              See Boats in your Budget
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
);

export default index;
