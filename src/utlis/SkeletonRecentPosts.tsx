const SkeletonRecentPosts = ({ postsCount }: { postsCount: number }) => {
  return (
    <div className="space-y-4">
      {Array.from({ length: postsCount }).map((_, index) => (
        <div
          key={index}
          className="animate-pulse h-24 bg-gray-200 rounded-md"
        ></div>
      ))}
    </div>
  );
};

export default SkeletonRecentPosts;
