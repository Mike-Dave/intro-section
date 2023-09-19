import Logo from "../pages/Logo";
import openMenuIcon from "../images/icon-menu.svg";
import { useReducer } from "react";
import DesktopNavigationView from "./DesktopNavigationView";
import MobileNavigationView from "./MobileNavigationView";

const initialState = {
  menuClick: false,
  featureDetails: false,
  companyDetails: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "openMenu":
      return {
        ...state,
        menuClick: !state.menuClick,
      };
    case "showFeatureDetails":
      return {
        ...state,
        featureDetails: !state.featureDetails,
      };
    case "showCompanyDetails":
      return {
        ...state,
        companyDetails: !state.companyDetails,
      };
    case "closeMenu":
      return initialState;
    default:
      throw new Error("Command not found");
  }
}
function PageNav() {
  const [{ featureDetails, companyDetails, menuClick, closeMenu }, dispatch] =
    useReducer(reducer, initialState);
  return (
    <nav>
      <div className="flex justify-between gap-16 md:justify-start">
        <Logo />
        <img
          className="p-4 pt-6 md:hidden"
          src={openMenuIcon}
          alt="hamburger menu"
          onClick={() => dispatch({ type: "openMenu" })}
        />
        <DesktopNavigationView
          dispatch={dispatch}
          featureDetails={featureDetails}
          companyDetails={companyDetails}
        />
      </div>
      {menuClick && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => dispatch({ type: "menuClicked" })}
        ></div>
      )}
      {menuClick && (
        <MobileNavigationView
          featureDetails={featureDetails}
          dispatch={dispatch}
          companyDetails={companyDetails}
          closeMenu={closeMenu}
        />
      )}
    </nav>
  );
}

export default PageNav;
