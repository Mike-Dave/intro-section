import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";
import CompanyDropDown from "../components/CompanyDropDown";

function Company({ dispatch, companyDetails }) {
  return (
    <div className="flex flex-col md:flex-row relative cursor-pointer">
      <div
        className="flex items-center gap-4 pb-2 md:pb-0 hover:text-almostBlack"
        onClick={() => dispatch({ type: "showCompanyDetails" })}
      >
        <p>Company</p>
        <div>
          {companyDetails ? (
            <img src={arrowUp} alt="arrow pointing upwards" />
          ) : (
            <img src={arrowDown} alt="arrow pointing downwards" />
          )}
        </div>
      </div>
      {companyDetails && <CompanyDropDown />}
    </div>
  );
}

export default Company;
