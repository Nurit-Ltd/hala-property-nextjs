import { OverlayView } from "@react-google-maps/api";

const CustomMarker = ({ position, text, onClick, markerSize = "full" }) => {
  return (
    <OverlayView position={position} mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}>
      <div
        className="flex flex-col items-center cursor-pointer text-center absolute animate-drop"
        onClick={onClick}
        style={{ transform: "translate(-50%, -100%)" }} // Center the marker
      >
        <img src="/pointer.png" alt="marker" style={{ width: markerSize === "full" ? "45px" : "22px", height: markerSize === "full" ? "65px" : "32px" }} />
        <div
          style={{
            width: "36px",
            height: "18px",
            backgroundColor: "#E03137",
            marginTop: "2px",
            borderRadius: "100px",
            fontSize: "10px",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {text}%
        </div>
      </div>
    </OverlayView>
  );
};

export default CustomMarker;
