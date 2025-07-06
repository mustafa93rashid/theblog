import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { fetchBlogDetails, fetchRecentBlogs } from "../redux/slice";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import HeaderSection from "../sections/BlogPageParts/HeaderSection";
import DescriptionSection from "../sections/BlogPageParts/DescriptionSection";
import DetailsSection from "../sections/BlogPageParts/DetailsSection";
import TagsSection from "../components/TagsSection";
import StoriesAndInterviews from "../sections/StoriesAndInterviews";
import ReadingTime from "../components/ReadingTime";
import RecentPosts from "../sections/RecentPosts";
import SpeechReader from "../utlis/SpeechReader";


const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch();

  const post = useSelector((state: RootState) => state.blogs.selectedPost);

  useEffect(() => {
    if (id) {
      dispatch(fetchBlogDetails({ id: parseInt(id) }));
    }
    dispatch(fetchRecentBlogs({ len: 9, id: id }));
  }, [id, dispatch]);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <div>
      <div className="container mx-auto flex flex-col-reverse md:flex-row gap-8 mt-8">
        <RecentPosts postsCount={9} isBlogDetails={false} />
        <div className="w-full md:w-[67.5%] flex flex-col gap-8 ">
          <SpeechReader post={post} />

          <ReadingTime details={post.details} />
          <HeaderSection blog={post} />
          <DescriptionSection description={post.description} />
          <DetailsSection details={post.details} />
          <TagsSection labels={post.label} />
          <div className="hidden lg:block">
            <StoriesAndInterviews pargraphSize={`lg:w-[100%]`} />
          </div>
        </div>
      </div>
      <div className=" md:block lg:hidden">
        <StoriesAndInterviews pargraphSize={`lg:w-[59%]`} />
      </div>
    </div>

  );
};

export default BlogDetails;
