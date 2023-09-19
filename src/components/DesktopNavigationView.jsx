import { NavLink } from "react-router-dom";
import Company from "../pages/Company";
import Features from "../pages/Features";

function DesktopNavigationView({ featureDetails, companyDetails, dispatch }) {
  return (
    <div className="hidden font-epilogue text-mediumGray gap-x-[38rem] md:flex">
      <div className="flex gap-8">
        <Features dispatch={dispatch} featureDetails={featureDetails} />
        <Company dispatch={dispatch} companyDetails={companyDetails} />

        <ul className="flex items-center gap-8">
          <li className="hover:text-almostBlack">
            <NavLink to="/careers">Careers</NavLink>
          </li>
          <li className="hover:text-almostBlack">
            <NavLink to="/about">About</NavLink>
          </li>
        </ul>
      </div>

      <ul className="flex items-center gap-8">
        <li className="hover:text-almostBlack">
          <NavLink to="/login">Login</NavLink>
        </li>
        <li>
          <NavLink
            className="rounded-xl outline p-3 px-6 outline-2 hover:text-almostBlack"
            to="/register"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default DesktopNavigationView;
