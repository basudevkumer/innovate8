import NavLogo from "../assets/navlogo.png";
import Button from "./Button";
import { FaChevronDown } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="py-[18px]  bg-[#48409C] ">
      <div className="max-w-[1320px] mx-auto flex items-center">
        <div className="w-[25%] ">
          <img src={NavLogo} alt="NavLogo" className="w-[110px]" />
        </div>
        <div className="w-[75%]  flex justify-between items-center ">
          <div>
            <ul className="flex gap-x-[35px]">
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Home
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    About
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Service
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Portfolio
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Price
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className=" flex items-center font-openSans font-semibold text-[18px] text-[#EFF4FA]  "
                >
                  <span className="hover:text-third transition duration-300 ease-in-out">
                    Blog
                  </span>
                  <span className="pl-2">
                    <FaChevronDown className="" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <Button buttonName={"Contact Us"} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
