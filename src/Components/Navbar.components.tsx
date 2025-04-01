'use client'
import React from "react";
import Link from "next/link";
import { FaTv, FaListOl, FaChartBar } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";
import { usePathname } from "next/navigation"; // Import usePathname from next/navigation

// Define Navigation Links
const NAV_LINKS = [
  { href: "/", label: "Live", icon: <FaTv className="text-lg" /> },
  { href: "/matches", label: "Matches", icon: <GiCricketBat className="text-lg" /> },
  { href: "/standing", label: "Standing", icon: <FaListOl className="text-lg" /> },
  { href: "/stats", label: "Stats", icon: <FaChartBar className="text-lg" /> },
];

const Navbar = () => {
  const pathname = usePathname(); // Use usePathname hook

  return (
    <nav className="bg-white shadow-md text-gray-800 p-2 px-4 w-full md:fixed md:top-0 md:left-0 md:z-50">
      {/* Desktop Navbar (Top) */}
      <div className="hidden md:flex justify-between items-center">
        <div className="text-lg font-bold text-blue-700">APL Scorecard</div>
        <ul className="flex space-x-6">
          {NAV_LINKS.map(({ href, label, icon }) => (
            <li
              key={href}
              className={`flex items-center justify-center space-x-2 cursor-pointer py-4 px-6 rounded-md ${
                pathname === href
                  ? "text-blue-700 border-b-4 border-blue-700 transition-all duration-300"
                  : "text-gray-600 hover:text-blue-500"
              }`}
            >
              <Link href={href} className="flex items-center space-x-2">
                <span
                  className={`${
                    pathname === href ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {icon}
                </span>
                <span
                  className={`${
                    pathname === href ? "text-blue-700" : "text-gray-600"
                  }`}
                >
                  {label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Navbar (Bottom) */}
      <div className="fixed bottom-0 left-0 w-full bg-white p-3 flex justify-around items-center md:hidden shadow-t-lg border-t-2 border-gray-200">
        {NAV_LINKS.map(({ href, label, icon }) => (
          <Link
            key={href}
            href={href}
            className={`flex flex-col items-center justify-center text-sm p-4 w-full text-center ${
              pathname === href
                ? "text-blue-700"
                : "text-gray-600 hover:text-blue-500"
            } transition-all duration-300 ease-in-out`}
          >
            <span
              className={`${
                pathname === href ? "text-blue-700" : "text-gray-600"
              }`}
            >
              {icon}
            </span>
            <span
              className={`${
                pathname === href ? "text-blue-700" : "text-gray-600"
              }`}
            >
              {label}
            </span>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
