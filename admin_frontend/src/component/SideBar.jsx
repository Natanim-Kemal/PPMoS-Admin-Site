import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  const [openCategory, setOpenCategory] = useState(null);

  const categories = [
    {
      name: "Student",
      links: [
        { path: "/students", name: "Show Students" },
        { path: "/add-student", name: "Add Student" },
      ],
    },
    {
      name: "Advisor",
      links: [
        { path: "/advisors", name: "Show Advisors" },
        { path: "/add-advisor", name: "Add Advisor" },
      ],
    },
    {
      name: "PG Coordinator",
      links: [
        { path: "/pg-coordinators", name: "Show PG Coordinators" },
        { path: "/add-pg-coordinator", name: "Add PG Coordinator" },
      ],
    },
    {
      name: "Dean",
      links: [
        { path: "/deans", name: "Show Deans" },
        { path: "/add-dean", name: "Add Dean" },
      ],
    },
    {
      name: "Chair",
      links: [
        { path: "/chairs", name: "Show Chairs" },
        { path: "/add-chair", name: "Add Chair" },
      ],
    },
  ];

  const toggleCategory = (category) => {
    setOpenCategory((prev) => (prev === category ? null : category));
  };

  return (
    <div className="w-64 h-screen bg-gray-800 text-white shadow-lg fixed">
      <h2 className="text-2xl font-bold text-center py-4 border-b border-gray-700">
        Admin
      </h2>
      <div className="p-4">
        {categories.map((category, index) => (
          <div key={index} className="mb-4">
            {/* Category Header */}
            <button
              className="w-full text-left px-4 py-2 bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none"
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
            </button>
            {/* Sub-links */}
            {openCategory === category.name && (
              <ul className="mt-2 ml-4">
                {category.links.map((link, linkIndex) => (
                  <li key={linkIndex} className="mb-2">
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `block px-4 py-2 rounded-md ${
                          isActive ? "bg-blue-600" : "hover:bg-gray-600"
                        }`
                      }
                    >
                      {link.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
