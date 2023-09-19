import FeaturesDropDown from "../components/FeaturesDropDown";
import arrowDown from "../images/icon-arrow-down.svg";
import arrowUp from "../images/icon-arrow-up.svg";

function Features({ featureDetails, dispatch }) {
  return (
    <div className="flex flex-col md:flex-row relative cursor-pointer">
      <div
        className="flex items-center gap-4 pb-2 hover:text-almostBlack md:pb-0"
        onClick={() => dispatch({ type: "showFeatureDetails" })}
      >
        <p>Features</p>
        <div>
          {featureDetails ? (
            <img src={arrowUp} alt="arrow pointing upwards" />
          ) : (
            <img src={arrowDown} alt="arrow pointing downwards" />
          )}
        </div>
      </div>
      {featureDetails && <FeaturesDropDown />}
    </div>
  );
}

export default Features;
