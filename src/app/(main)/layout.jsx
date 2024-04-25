import React from "react";
import Sidebar from "../../components/sidebar.jsx";
import Playerbar from "../../components/musicplayer/index.jsx";
import Searchbar from "@/components/searchbar.jsx";
Searchbar;

const Layout = ({ children }) => {
  return (
    <div className="relative h-screen">
      <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-black">
          <Searchbar />
          <div className="px-6 h-[calc(100vh-4.5rem)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
            <div className="flex-1 h-fit">{children}</div>
          </div>
        </div>
      </div>
      <Playerbar />
    </div>
  );
};

export default Layout;
