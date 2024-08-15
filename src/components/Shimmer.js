const ShimmerCard = () => {
  return (
    <div className="shimmer-container card">
      <div className="shimmer img"></div>
      <h2 className="shimmer name"></h2>
      <h3 className="shimmer cuisines"></h3>
      <h4 className="shimmer rating"></h4>
    </div>
  );
};

const Shimmer = () => {
  let shimmerBlockArr = Array(5);
   return shimmerBlockArr.fill().map((shimmer, index) => <ShimmerCard key={index}/>);
};
export default Shimmer;
