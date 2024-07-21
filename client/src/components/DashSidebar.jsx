import React, { useEffect, useState } from "react";

import { Link, useLocation } from "react-router-dom";
import { Sidebar } from "flowbite-react";
import {
  HiUser,
  HiArrowSmRight,
  HiDocumentText,
  HiOutlineUserGroup,
  HiChartPie,
} from "react-icons/hi";
import { signoutSuccess } from "../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";

const DashSidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const currentUser = useSelector((state) => state.user.currentUser);
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFormUrl = urlParams.get("tab");
    if (tabFormUrl) {
      setTab(tabFormUrl);
    }
  }, [location.search]);

  const handleSignout = async () => {
    try {
      const res = await fetch("/api/user/signout", {
        method: "POST",
      });
      const data = await res.json();
      if (!res.ok) {
        console.log(data.message);
      } else {
        dispatch(signoutSuccess());
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          {currentUser && currentUser.isAdmin && (
            <Sidebar.Item
              as={Link}
              to="/dashboard?tab=dash"
              active={tab === "dash" || !tab}
              icon={HiChartPie}
            >
              Dashboard
            </Sidebar.Item>
          )}
          <Sidebar.Item
            as={Link}
            to="/dashboard?tab=profile"
            active={tab === "profile"}
            icon={HiUser}
            label={currentUser.isAdmin ? "Admin" : "User"}
            labelColor="dark"
          >
            Profie
          </Sidebar.Item>
          {currentUser.isAdmin && (
            <Sidebar.Item
              as={Link}
              to="/dashboard?tab=posts"
              active={tab === "posts"}
              icon={HiDocumentText}
            >
              Posts
            </Sidebar.Item>
          )}
          {currentUser.isAdmin && (
            <Sidebar.Item
              as={Link}
              to="/dashboard?tab=users"
              active={tab === "users"}
              icon={HiOutlineUserGroup}
            >
              Users
            </Sidebar.Item>
          )}

          <Sidebar.Item
            icon={HiArrowSmRight}
            className="cursor-pointer"
            onClick={handleSignout}
          >
            Sign out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
};

export default DashSidebar;
