import { useState } from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import isearch from "../assets/search.png";
import iX from "../assets/iX.svg";
import icart from "../assets/cart.svg";
import isandwich from "../assets/sandwich.svg";
import inotification from "../assets/notification.svg";
import ichat from "../assets/chat-icon.svg";
import Logo from "./logo.component";
import "./navigation.styles.scss";

const NavPopUp = ({ effectOnClick }) => {
  return (
    <>
      <div className="absolute bg-white z-30 w-[90%] h-[75%] px-[2rem]">
        <div className="flex justify-between items-center py-[2rem]">
          <Logo />
          <img onClick={effectOnClick} alt="x-icon" src={iX} className="pb-1" />
        </div>
        <div
          className="flex flex-col justify-between font-[400] 
          text-[1.5rem] cursor-pointer mt-[1.5rem] h-[40%]"
          onClick={effectOnClick}
        >
          <Link to="/">
            {" "}
            <p className="px-2">Home</p>{" "}
          </Link>
          <Link to="/product">
            {" "}
            <p className="px-2">Marketplace</p>{" "}
          </Link>
          <Link to="/auction">
            {" "}
            <p className="px-2">Auctions</p>{" "}
          </Link>
          <Link to="/drop">
            {" "}
            <p className="px-2">Drop</p>{" "}
          </Link>
        </div>
        <div className="absolute bottom-[10%] right-[10%] border rounded-full p-5 bg-[#3341C1]">
          <img alt="chat-icon" src={ichat} className="" />
        </div>
      </div>
      <div className="absolute h-full w-full bg-black opacity-50 z-20"></div>
    </>
  );
};

export default function Navigation() {
  const [showNavPopUp, setShowNavPopUp] = useState(false);
  const { pathname } = useLocation();

  const handleNavPopUp = () => {
    setShowNavPopUp(!showNavPopUp);
  };

  const getFirstDir = (path) => {
    let base = "";
    if (path.length > 0) {
      for (let i = 1; i < path.length; i++) {
        if (path.charAt(i) === "/") {
          break;
        }
        base = base + path.charAt(i);
      }
      return base.toLocaleLowerCase();
    }
  };

  return (
    <>
      {showNavPopUp && <NavPopUp effectOnClick={handleNavPopUp} />}
      <div className="flex items-center max-sm1:items-start justify-between px-10 max-sm1:px-4 py-7 max-sm1:mt-[1rem] text-gray lg1:px-[8rem]">
        <div className="hidden max-sm1:block max-sm1:w-[33%]">
          <img
            alt="sandwich-icon"
            className="nav-icon px-3 py-1"
            src={isandwich}
            onClick={handleNavPopUp}
          />
        </div>
        <div className="max-sm1:w-[33%] flex justify-center items-end">
          <Link to="/">
            {" "}
            <Logo />{" "}
          </Link>
        </div>
        <div
          className="flex justify-between max-sm1:hidden font-satoshi font-[400] 
          text-base cursor-pointer "
        >
          <Link to="/">
            {" "}
            <p className={`px-2 ${pathname === "/" ? "underline" : ""}`}>
              Home
            </p>{" "}
          </Link>
          <Link to="/product">
            {" "}
            <p
              className={`px-2 ${
                getFirstDir(pathname) === "product" ? "underline" : ""
              }`}
            >
              Marketplace
            </p>{" "}
          </Link>
          <Link to="/auction">
            {" "}
            <p
              className={`px-2 ${
                getFirstDir(pathname) === "auction" ? "underline" : ""
              }`}
            >
              Auctions
            </p>{" "}
          </Link>
          <Link to="/drop">
            {" "}
            <p
              className={`px-2 ${
                getFirstDir(pathname) === "drop" ? "underline" : ""
              }`}
            >
              Drop
            </p>{" "}
          </Link>
        </div>
        <div className="flex justify-end cursor-pointer max-sm1:w-[33%]">
          <div>
            <img
              alt="search-icon"
              className="nav-icon px-3 py-1"
              src={isearch}
            />
          </div>
          <div className="notif">
            <img alt="cart-icon" className="nav-icon px-3 py-1" src={icart} />
          </div>
          <div className="notif max-sm1:hidden">
            <img
              alt="notif-icon"
              className="nav-icon px-3 py-1"
              src={inotification}
            />
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
