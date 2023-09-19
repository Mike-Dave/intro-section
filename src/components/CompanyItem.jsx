function CompanyItem({ company }) {
  return (
    <div className="p-3 h-[2.188rem] w-[7.188rem]">
      <p>{company.company}</p>
    </div>
  );
}

export default CompanyItem;
