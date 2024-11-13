import { cn } from "@/lib/utils";

const openClassNames = {
  right: "translate-x-0",
  left: "translate-x-0",
  top: "translate-y-0",
  bottom: "translate-y-0",
};

const closeClassNames = {
  right: "translate-x-full",
  left: "-translate-x-full",
  top: "-translate-y-full",
  bottom: "translate-y-full",
};

const classNames = {
  right: "inset-y-0 right-0",
  left: "inset-y-0 left-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

const FilterDrawer = ({ open, setOpen, side = "left", children }) => {
  return (
    <div
      id={`dialog-${side}`}
      className="relative z-[99]"
      aria-labelledby="slide-over"
      role="dialog"
      aria-modal="true"
      onClick={() => setOpen(!open)}
    >
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-gray-500 backdrop-blur-sm bg-opacity-75 transition-all",
          {
            "opacity-100 duration-500 ease-in-out visible": open,
            "opacity-0 duration-500 ease-in-out invisible": !open,
          }
        )}
      ></div>

      <div className={cn({ "fixed inset-0 overflow-hidden": open })}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              "pointer-events-none fixed max-w-full",
              classNames[side]
            )}
          >
            <div
              className={cn(
                "pointer-events-auto relative w-full h-full transform transition ease-in-out duration-500",
                { [closeClassNames[side]]: !open },
                { [openClassNames[side]]: open }
              )}
              onClick={(event) => {
                event.preventDefault();
                event.stopPropagation();
              }}
            >
              <div
                className={cn(
                  "h-full overflow-y-scroll custom-scrollbar bg-white p-4 shadow-xl w-[300px] md:w-[336px]"
                )}
              >
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
