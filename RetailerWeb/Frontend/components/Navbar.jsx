import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart,
  Wallet,
  Newspaper,
  BellRing,
  Paperclip,
  Brush,
  Wrench,
} from "lucide-react";

export default function Navbar() {
  return (
    <aside className="flex h-screen w-64 flex-col overflow-y-auto border-r bg-black px-5 py-8">
      <div className="flex flex-row">
        <img
          src="../assets/images/company_logo.jpeg"
          className=" rounded-full w-20 h-20"
          alt="company name"
        />
        <img
          src="../assets/images/default_avatar.png"
          className=" ml-3 rounded-full w-20 h-20"
          alt="retailers company logo"
        />
      </div>
      <div className="mt-6 flex flex-1 flex-col justify-between">
        <nav className="-mx-3 space-y-6 ">
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              join
            </label>
            <Link
              id="loginbtn"
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              to={"/Login"}
            >
              <Wallet className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Login</span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              analytics
            </label>
            <Link
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-50 hover:text-gray-700"
              to={"/"}
            >
              <BarChart className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Dashboard</span>
            </Link>
          </div>
          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              content
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Newspaper className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Blogs</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <BellRing className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Notifications</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Paperclip className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Checklists</span>
            </a>
          </div>

          <div className="space-y-3 ">
            <label className="px-3 text-xs font-semibold uppercase text-white">
              Customization
            </label>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Brush className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Themes</span>
            </a>
            <a
              className="flex transform items-center rounded-lg px-3 py-2 text-gray-200 transition-colors duration-300 hover:bg-gray-100 hover:text-gray-700"
              href="#"
            >
              <Wrench className="h-5 w-5" aria-hidden="true" />
              <span className="mx-2 text-sm font-medium">Settings</span>
            </a>
          </div>
        </nav>
      </div>
    </aside>
  );
}
