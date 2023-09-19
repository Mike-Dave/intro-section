import todoList from "../images/icon-todo.svg";
import calendar from "../images/icon-calendar.svg";
import reminders from "../images/icon-reminders.svg";
import planning from "../images/icon-planning.svg";
import FeaturesItem from "./FeaturesItem";

const featuresData = [
  {
    feature: "Todo List",
    image: `${todoList}`,
    id: 1,
  },
  {
    feature: "Calendar",
    image: `${calendar}`,
    id: 2,
  },
  {
    feature: "Reminders",
    image: `${reminders}`,
    id: 3,
  },
  {
    feature: "Planning",
    image: `${planning}`,
    id: 4,
  },
];
function FeaturesDropDown() {
  return (
    <div className="md:absolute -left-12 top-14 bg-[#F1EFEF] md:bg-white py-1 rounded-md">
      {featuresData.map((features) => (
        <FeaturesItem features={features} key={features.id} />
      ))}
    </div>
  );
}
export default FeaturesDropDown;
