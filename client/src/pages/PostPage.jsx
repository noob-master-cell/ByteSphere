import { Button, Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import PostCard from "../components/PostCard";
import { useSelector } from "react-redux";

export default function PostPage() {
  const { postSlug } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [post, setPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState(null);

  const handleVote = async (postId, type) => {
    try {
      const res = await fetch(`/api/post/${type}/${postId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.message);
      }
      setPost(data);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/post/getposts?slug=${postSlug}`);
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        if (res.ok) {
          setPost(data.posts[0]);
          setLoading(false);
          setError(false);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPost();
  }, [postSlug]);

  useEffect(() => {
    try {
      const fetchRecentPosts = async () => {
        const res = await fetch(`/api/post/getposts?limit=4`);
        const data = await res.json();
        if (res.ok) {
          setRecentPosts(data.posts);
        }
      };
      fetchRecentPosts();
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <Spinner size="xl" />
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl text-red-500">
          An error occurred. Please try again later.
        </p>
      </div>
    );

  return (
    <main className="p-3 flex flex-col max-w-6xl mx-auto min-h-screen text-black dark:text-white">
      <h1 className="text-3xl mt-10 .p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl bg-gray-200 dark:bg-gray-800 rounded-lg p-4">
        {post && post.title}
      </h1>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <lable
          className="bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white my-4"
          style={{
            padding: "0.25em 0.75em",
            borderRadius: "9999px",
            fontSize: "0.75rem",
          }}
        >
          {post && post.category}
        </lable>
      </div>

      <img
        src={post && post.image}
        alt={post && post.title}
        className="mt-3 p-3 max-h-[600px] w-full object-cover rounded-lg shadow-lg"
      />
      <div className="flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs">
        <span>{post && new Date(post.createdAt).toLocaleDateString()}</span>
        <span className="italic">
          {post && (post.content.length / 1000).toFixed(0)} mins read
        </span>
      </div>
      <div
        className="p-3 max-w-2xl mx-auto w-full post-content"
        dangerouslySetInnerHTML={{ __html: post && post.content }}
      ></div>

      <div className="flex justify-between items-center max-w-2xl mx-auto my-5">
        <div className="flex items-center">
          <FaArrowUp
            className="cursor-pointer text-gray-400 hover:text-green-500"
            onClick={() => handleVote(post._id, "upvote")}
          />
          <span className="mx-2">{post && post.upvotes.length}</span>
          <FaArrowDown
            className="cursor-pointer text-gray-400 hover:text-red-500"
            onClick={() => handleVote(post._id, "downvote")}
          />
          <span className="mx-2">{post && post.downvotes.length}</span>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center mb-5">
        <h1 className="text-xl mt-5">Recent articles</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-5 justify-center">
          {recentPosts &&
            recentPosts.map((post) => <PostCard key={post._id} post={post} />)}
        </div>
      </div>
    </main>
  );
}
