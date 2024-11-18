"use client";
import FilterDrawer from "@/components/shared/FilterDrawer";
import AiDrawer from "@/components/shared/AiDrawer/AiDrawer";
import { DiamondIcon, NewIcon, RatingIcon, RentalIcon, RoIcon } from "@/components/shared/SVG";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import FilterContent from "./FilterContent";

import { useAiContext } from "@/contexts/AiContext";

const TabFilter = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const { isAiOpen, setIsAiOpen } = useAiContext();

  // Define an array of tab objects
  const tabs = [
    { id: 1, label: "In Demand", icon: <DiamondIcon /> },
    { id: 2, label: "ROI", icon: <RoIcon /> },
    { id: 3, label: "Project Rating", icon: <RatingIcon /> },
    { id: 4, label: "New", icon: <NewIcon /> },
    { id: 5, label: "Rental Yield", icon: <RentalIcon /> },
  ];

  return (
    <div className=" ">
      <div className="mt-6 mb-8 flex items-center justify-between gap-2 w-full overflow-y-scroll custom-scrollbar-tab">
        <div>
          <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className="rounded-full bg-[#F6F5F1] border-grey400 py-2.5 px-4 gap-2 hover:bg-primary/5 hover:text-primary   hover:border-primary">
            <SlidersHorizontal /> Filters
          </Button>
        </div>
        <div className="flex items-center gap-4">
          {tabs.map((tab) => (
            <Button key={tab.id} onClick={() => setActiveTab(tab.id)} variant="outline" className={cn("rounded-full bg-[#F6F5F1] text-[#323B49] border-grey400 py-2.5 px-4 gap-2 hover:bg-primary/5 hover:text-primary   hover:border-primary", activeTab === tab.id && "bg-primary/5 text-primary border border-primary")}>
              {tab.icon} {tab.label}
            </Button>
          ))}
        </div>
      </div>
      {isOpen && (
        <FilterDrawer side="left" open={isOpen} setOpen={setIsOpen}>
          <FilterContent setOpen={setIsOpen} />
        </FilterDrawer>
      )}
      {/* isAiOpen, setIsAiOpen */}
      {isAiOpen && <AiDrawer side="left" open={isAiOpen} setOpen={setIsAiOpen} />}
    </div>
  );
};

export default TabFilter;
