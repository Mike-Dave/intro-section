import { NavLink } from "react-router-dom";
import closeMenuIcon from "../images/icon-close-menu.svg";
// import MobileFeatures from "../pages/MobileFeatures";
import Features from "../pages/Features";
import Company from "../pages/Company";

function MobileNavigationView({
  dispatch,
  featureDetails,
  companyDetails,
  closeMenu,
}) {
  return (
    <div className="fixed top-0 bg-white z-10 h-[100%]  min-h-screen w-[62%] right-0 p-6 pt-5 font-epilogue text-mediumGray space-y-10  md:hidden">
      <ul className="flex flex-col gap-2 ">
        <div className="self-end">
          <img
            className="p- pb-4 md:hiddden"
            src={closeMenuIcon}
            alt="dbb"
            onClick={() => dispatch({ type: "closeMenu" })}
          />
        </div>
        <Features featureDetails={featureDetails} dispatch={dispatch} />
        <Company dispatch={dispatch} companyDetails={companyDetails} />

        <li>
          <NavLink to="/careers">Careers</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
      <ul className="fldex gap-8 text-center space-y-3">
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
        <li className="py-2">
          <NavLink
            className="rounded-xl outline p-3 px-16 outline-2 hover:text-almostBlack"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MobileNavigationView;
