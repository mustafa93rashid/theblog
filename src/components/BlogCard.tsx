import { Link } from "react-router-dom";
import type { Post } from "../types/Post";
import TagsSection from "./TagsSection";
import { GoArrowUpRight } from "react-icons/go";
import { scrollToTop } from "../utlis/scrollToTop";

interface BlogCardProps {
  blog: Post;
  cardContainerClass?: string;
  imgClass?: string;
  titleClass?: string;
  pargClass?: string;
  lineClamp?: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog, cardContainerClass, imgClass, titleClass, pargClass, lineClamp }) => {

  return (
    <div className={`${cardContainerClass} overflow-hidden`}>
      <img loading="lazy" src={blog.image} alt={blog.title}
        className={`transition duration-300 transform hover:scale-105 hover:brightness-110 hover:opacity-95 ${imgClass}`} />
      <div className={`flex flex-col gap-6 ${pargClass}`}>
        <div className="flex flex-col gap-3 ">
          <p className="text-sm font-semibold leading-5 text-purple01 flex"> <span className="hidden lg:block">{blog?.name}</span> {blog.date}</p>
          <div className="flex justify-between items-start ">
            <h4 className={`${titleClass} font-semibold tracking-wide `}>{blog.title}</h4>
            <Link to={`/theblog/${blog.id}`} className="group inline-flex items-center" onClick={scrollToTop}>
              <GoArrowUpRight className="w-6 h-6 transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>
          <p className={`leading-6 tracking-wide text-gray01 ${lineClamp}`}>{blog.description[0]}</p>
        </div>

        <TagsSection labels={blog.label} />
      </div>
    </div>
  );
};

export default BlogCard;
