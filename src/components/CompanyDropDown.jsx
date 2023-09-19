import CompanyItem from "./CompanyItem";
const companyData = [
  {
    company: "History",
    id: 1,
  },
  {
    company: "Our Team",
    id: 2,
  },
  {
    company: "Blog",
    id: 3,
  },
];
function CompanyDropDown() {
  return (
    <div className="md:absolute left-2 top-14 bg-[#F1EFEF] md:bg-white py-1 rounded-md">
      {companyData.map((company) => (
        <CompanyItem company={company} key={company.id} />
      ))}
    </div>
  );
}

export default CompanyDropDown;
