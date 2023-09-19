function FeaturesItem({ features }) {
  return (
    <div className="flex gap-3 p-2 h-[2.188rem] w-[8.75rem]">
      <div>
        <img src={features.image} alt={features.feature} />
      </div>
      <p>{features.feature}</p>
    </div>
  );
}

export default FeaturesItem;
