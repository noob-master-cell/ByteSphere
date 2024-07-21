import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div className="group relative w-full border-indigo-400  hover:border-2 h-[400px] overflow-hidden rounded-lg transition-all text-black dark:text-white dark:border-indigo-400">
      <Link to={`/post/${post.slug}`}>
        <img
          src={post.image}
          alt="post cover"
          className="h-[260px] w-full object-cover group-hover:h-[200px] transition-all duration-300 z-20 rounded-t-lg"
        />
      </Link>
      <div className="p-3 flex flex-col gap-2">
        <p className="text-lg font-semibold line-clamp-2">{post.title}</p>
        <div className="flex justify-between text-sm italic text-gray-500 dark:text-gray-400">
          <span>{post.category}</span>
          <span>
            {new Date(post.updatedAt || post.createdAt).toLocaleDateString()}
          </span>
        </div>
        <Link
          to={`/post/${post.slug}`}
          className="z-10 group-hover:bottom-0 absolute bottom-[-200px] left-0 right-0 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white hover:bg-white hover:text-white border border-white dark:border-indigo-400 transition-all duration-300 text-center py-2 rounded-lg  m-2"
        >
          Read article
        </Link>
      </div>
    </div>
  );
}
