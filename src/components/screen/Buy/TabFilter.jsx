"use client";
import {
  DiamondIcon,
  NewIcon,
  RatingIcon,
  RentalIcon,
  RoIcon,
} from "@/components/shared/SVG";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState(1);

  // Define an array of tab objects
  const tabs = [
    { id: 1, label: "In Demand", icon: <DiamondIcon /> },
    { id: 2, label: "ROI", icon: <RoIcon /> },
    { id: 3, label: "Project Rating", icon: <RatingIcon /> },
    { id: 4, label: "New", icon: <NewIcon /> },
    { id: 5, label: "Rental Yield", icon: <RentalIcon /> },
  ];

  return (
    <div className="mt-6 mb-8 flex items-center justify-between gap-2 w-full">
      <div>
        <Button
          variant="outline"
          className="rounded-full bg-[#F6F5F1] border-grey400 py-2.5 px-4 gap-2"
        >
          <SlidersHorizontal /> Filters
        </Button>
      </div>
      <div className="flex items-center gap-4">
        {tabs.map((tab) => (
          <Button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            variant="outline"
            className={cn(
              "rounded-full bg-[#F6F5F1] text-[#323B49] border-grey400 py-2.5 px-4 gap-2",
              activeTab === tab.id &&
                "bg-primary/5 text-primary border border-primary"
            )}
          >
            {tab.icon} {tab.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TabFilter;
