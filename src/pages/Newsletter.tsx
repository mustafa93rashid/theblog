import AllPosts from "../sections/AllPosts";
import StoriesAndInterviews from "../sections/StoriesAndInterviews"

const Newsletter = () => {
  return (
    <div className="container mx-auto">
      <StoriesAndInterviews pargraphSize={`lg:w-[59%]`} />
      <AllPosts postsToShow={3} showPagination={false} customCardProps={true} />
    </div>
  );
};

export default Newsletter;