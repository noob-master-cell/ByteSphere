import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  HiArrowNarrowUp,
  HiDocumentText,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { Button, Table } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  FaUsers,
  FaThumbsUp,
  FaThumbsDown,
  FaRegFileAlt,
} from "react-icons/fa";

export default function DashboardComp() {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPosts, setTotalPosts] = useState(0);
  const [totalUpvotes, setTotalUpvotes] = useState(0);
  const [totalDownvotes, setTotalDownvotes] = useState(0);
  const [lastMonthUsers, setLastMonthUsers] = useState(0);
  const [lastMonthPosts, setLastMonthPosts] = useState(0);
  const [lastMonthUpvotes, setLastMonthUpvotes] = useState(0);
  const [lastMonthDownvotes, setLastMonthDownvotes] = useState(0);
  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("/api/user/getusers?limit=5");
        const data = await res.json();
        if (res.ok) {
          setUsers(data.users);
          setTotalUsers(data.totalUsers);
          setLastMonthUsers(data.lastMonthUsers);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    const fetchPosts = async () => {
      try {
        const res = await fetch("/api/post/getposts?limit=5");
        const data = await res.json();
        if (res.ok) {
          setPosts(data.posts);
          setTotalPosts(data.totalPosts);
          setLastMonthPosts(data.lastMonthPosts);

          const totalUpvotes = data.posts.reduce(
            (acc, post) => acc + post.upvotes.length,
            0
          );
          const totalDownvotes = data.posts.reduce(
            (acc, post) => acc + post.downvotes.length,
            0
          );
          setTotalUpvotes(totalUpvotes);
          setTotalDownvotes(totalDownvotes);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    if (currentUser.isAdmin) {
      fetchUsers();
      fetchPosts();
    }
  }, [currentUser]);

  return (
    <div className="p-3 md:mx-auto">
      <div className="flex-wrap flex gap-4 justify-center">
        <div className="flex flex-col p-4 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm uppercase">Total Users</h3>
              <p className="text-3xl font-semibold">{totalUsers}</p>
            </div>
            <FaUsers className="bg-teal-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthUsers}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-4 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm uppercase">Total Upvotes</h3>
              <p className="text-3xl font-semibold">{totalUpvotes}</p>
            </div>
            <FaThumbsUp className="bg-indigo-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthUpvotes}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-4 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm uppercase">
                Total Downvotes
              </h3>
              <p className="text-3xl font-semibold">{totalDownvotes}</p>
            </div>
            <FaThumbsDown className="bg-red-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthDownvotes}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
        <div className="flex flex-col p-4 dark:bg-slate-800 gap-4 md:w-72 w-full rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500 text-sm uppercase">Total Posts</h3>
              <p className="text-3xl font-semibold">{totalPosts}</p>
            </div>
            <FaRegFileAlt className="bg-lime-600 text-white rounded-full text-5xl p-3 shadow-lg" />
          </div>
          <div className="flex gap-2 text-sm">
            <span className="text-green-500 flex items-center">
              <HiArrowNarrowUp />
              {lastMonthPosts}
            </span>
            <div className="text-gray-500">Last month</div>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-4 py-4 mx-auto justify-center">
        <div className="flex flex-col w-full md:w-auto shadow-lg p-4 rounded-lg dark:bg-gray-800">
          <div className="flex justify-between items-center pb-3 text-sm font-semibold">
            <h1 className="text-lg p-2">Recent Users</h1>
            <Button
              outline
              className="bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white outline-none transition-transform transform hover:scale-105"
            >
              <Link to={"/dashboard?tab=users"}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>User Image</Table.HeadCell>
              <Table.HeadCell>Username</Table.HeadCell>
            </Table.Head>
            {users &&
              users.map((user) => (
                <Table.Body key={user._id} className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <img
                        src={user.profilePicture}
                        alt="user"
                        className="w-10 h-10 rounded-full bg-gray-500"
                      />
                    </Table.Cell>
                    <Table.Cell>{user.username}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
        <div className="flex flex-col w-full md:w-auto shadow-lg p-4 rounded-lg dark:bg-gray-800">
          <div className="flex justify-between items-center pb-3 text-sm font-semibold">
            <h1 className="text-lg p-2">Recent Posts</h1>
            <Button
              outline
              className="bg-gradient-to-r from-indigo-400 via-purple-350 to-violet-400 text-white outline-none transition-transform transform hover:scale-105"
            >
              <Link to={"/dashboard?tab=posts"}>See all</Link>
            </Button>
          </div>
          <Table hoverable>
            <Table.Head>
              <Table.HeadCell>Post Image</Table.HeadCell>
              <Table.HeadCell>Post Title</Table.HeadCell>
              <Table.HeadCell>Category</Table.HeadCell>
            </Table.Head>
            {posts &&
              posts.map((post) => (
                <Table.Body key={post._id} className="divide-y">
                  <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                    <Table.Cell>
                      <img
                        src={post.image}
                        alt="post"
                        className="w-14 h-10 rounded-md bg-gray-500"
                      />
                    </Table.Cell>
                    <Table.Cell className="w-96">{post.title}</Table.Cell>
                    <Table.Cell className="w-5">{post.category}</Table.Cell>
                  </Table.Row>
                </Table.Body>
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
}
