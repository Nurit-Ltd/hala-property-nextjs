"use client";
import { useState } from "react";
import { IoCartOutline, IoSchoolOutline } from "react-icons/io5";
import { MdOutlineDirectionsBus } from "react-icons/md";
import PlacesContent from "./PlacesContent";
import SchoolContent from "./SchoolContent";
import TransitContent from "./TransitContent";
const ExploreTabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 0,
      label: "Schools",
      icon: IoSchoolOutline,
      content: <SchoolContent />,
    },
    {
      id: 1,
      label: "Places",
      icon: IoCartOutline,
      content: <PlacesContent />,
    },
    {
      id: 2,
      label: "Transit",
      icon: MdOutlineDirectionsBus,
      content: <TransitContent />,
    },
  ];

  return (
    <div className="pb-3 md:pb-6">
      {/* Tab buttons */}
      <div className="flex items-center border-b border-grey400 gap-1.5 md:gap-2.5">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-2 md:px-4 py-[6.69px] md:py-2.5 flex items-center gap-[3px] md:gap-2 border-b-[1.5px] md:border-b-[2px] text-xs md:text-sm ${
              activeTab === tab.id
                ? "text-primary border-primary font-bold"
                : "text-grey700 border-transparent font-semibold"
            }`}
          >
            <tab.icon className="text-base md:text-2xl" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      <div className="mt-2.5 md:mt-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default ExploreTabs;
