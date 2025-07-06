import AllPosts from "../sections/AllPosts";
import RecentPosts from "../sections/RecentPosts";
import Hero from "../sections/Hero";

const Blog = () => {

  return (
    <div className=" container mx-auto mt-[130px] md:mt-[250px] lg:mt-0">
      <Hero />
      <RecentPosts postsCount={4} isBlogDetails={true} />
      <AllPosts postsToShow={6} showPagination={true} customCardProps={false} />
    </div>
  );
};

export default Blog;
