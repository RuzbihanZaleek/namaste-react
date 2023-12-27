const ShimmerCards = () => {
  const count = 10;

  const shimmerCards = Array.from({ length: count }, (_, index) => (
    <ShimmerCard key={index} />
  ));
  return <div className="shimmer-container">{shimmerCards}</div>;
};

const ShimmerCard = () => {
  return <div className="shimmer-card" />;
};

export default ShimmerCards;
