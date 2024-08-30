const ShimmerCard = () => {
  return (
    <div className="p-2 m-2 bg-gray-500 w-60 h-60" data-testid="shimmer-box">
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
