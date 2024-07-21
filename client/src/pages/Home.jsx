import React, { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";
import { useSelector } from "react-redux";
import PostCard from "../components/PostCard";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const theme = useSelector((state) => state.theme);
  const location = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/post/getposts?order=desc");
        const data = await res.json();
        if (!res.ok) {
          setError(true);
          setLoading(false);
          return;
        }
        setAllPosts(data.posts);
        setFilteredPosts(data.posts);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get("search");
    if (searchTerm) {
      const filtered = allPosts.filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPosts(filtered);
    } else {
      setFilteredPosts(allPosts);
    }
  }, [location.search, allPosts]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === "All") {
      setFilteredPosts(allPosts);
    } else {
      setFilteredPosts(allPosts.filter((post) => post.category === category));
    }
  };

  const handleSort = (order) => {
    const sortedPosts = [...filteredPosts].sort((a, b) => {
      if (order === "newest") {
        return new Date(b.createdAt) - new Date(a.createdAt);
      } else {
        return new Date(a.createdAt) - new Date(b.createdAt);
      }
    });
    setFilteredPosts(sortedPosts);
    setIsDropdownOpen(false);
  };

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
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-gray-100 text-gray-900"
      }`}
    >
      <header
        className={`bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white p-10`}
      >
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            Welcome to ByteSphere
          </h1>
          <p className="text-xl mb-8">
            Unlocking the Code to Innovation. Dive Deep into Tech Insights and
            Master the Art of Development.
          </p>
          <button
            onClick={() => handleCategoryClick("All")}
            className="px-6 py-3 bg-white text-indigo-600 rounded-full shadow-lg hover:bg-gray-200 transition transform hover:scale-105"
          >
            View All Posts
          </button>
        </div>
      </header>

      <main className="container mx-auto p-6">
        <section className="mb-10">
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              "AI/ML",
              "Frameworks",
              "Cloud Computing",
              "Coding Language",
              "Career",
              "Other",
            ].map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className="px-4 py-2 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white rounded-full hover:scale-105 transition transform"
              >
                {category}
              </button>
            ))}
          </div>
        </section>
        <section className="mb-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-extrabold text-center flex-grow">
              Latest Posts
            </h2>
            <div className="relative z-50">
              <button
                className="px-4 py-2 bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white rounded-full hover:scale-105 transition transform"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Sort
              </button>
              {isDropdownOpen && (
                <div className="absolute mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg z-50">
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort("newest")}
                  >
                    Newest
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                    onClick={() => handleSort("oldest")}
                  >
                    Oldest
                  </button>
                </div>
              )}
            </div>
          </div>
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredPosts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-center text-xl text-red-500">
              No articles found with this title.
            </p>
          )}
        </section>
      </main>
    </div>
  );
};

export default Home;
