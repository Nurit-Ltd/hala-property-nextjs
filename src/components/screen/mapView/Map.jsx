"use client";
import { useState, useEffect } from "react";
import { useJsApiLoader, GoogleMap } from "@react-google-maps/api";
import CustomMarker from "./CustomMarker";

const allMarkers = [
  {
    id: 1,
    name: "Ghadeer Al Tair",
    image: "icon.png",
    position: { lat: 25.159734, lng: 55.26152 },
    price: "5.8",
    category: ["InDemand", "ROI"],
  },
  {
    id: 2,
    name: "Al Quoz 4",
    image: "icon.png",
    position: { lat: 25.155073, lng: 55.261348 },
    price: "6.9",
    category: ["InDemand", "ROI"],
  },
  {
    id: 3,
    name: "Minerva Ridge",
    image: "icon.png",
    position: { lat: 25.143887, lng: 55.220408 },
    price: "5.7",
    category: ["ProjectRating", "InDemand", "ROI"],
  },
  {
    id: 4,
    name: "Konopelski Street",
    image: "icon.png",
    price: "5.9",
    position: { lat: 25.175848, lng: 55.244868 },
    category: ["ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 5,
    name: "Rosina Groves",
    image: "icon.png",
    price: "5.9",
    position: { lat: 25.25086, lng: 55.267694 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 6,
    name: "Haag Turnpike",
    image: "icon.png",
    price: "5.9",
    position: { lat: 25.226645, lng: 55.285378 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 7,
    name: "Al Quoz 1",
    image: "icon.png",
    price: "4.9",
    position: { lat: 25.172631, lng: 55.260493 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 8,
    name: "Al Waisha St.",
    image: "icon.png",
    price: "4.9",
    position: { lat: 25.162766, lng: 55.248646 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 9,
    name: "Sheikh Zayed Rd.",
    image: "icon.png",
    price: "7.9",
    position: { lat: 25.191277, lng: 55.259947 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 10,
    name: "Al Warqa",
    image: "icon.png",
    price: "4.9",
    position: { lat: 25.190494, lng: 55.400232 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 11,
    name: "Warsan 2",
    image: "icon.png",
    price: "4.9",
    position: { lat: 25.161465, lng: 55.43963 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
  {
    id: 12,
    name: "Nad Al Sheba",
    image: "icon.png",
    price: "7.9",
    position: { lat: 25.158756, lng: 55.373797 },
    category: ["RentalYield", "ProjectRating", "InDemand", "ROI", "New"],
  },
];

// Define custom map styles
const mapStyles = [
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#FFA967" }], // Red for roads
  },
  // F6E29B
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#75CFF0" }], // Blue for water
  },
  {
    featureType: "road.arterial",
    elementType: "geometry.fill",
    stylers: [
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },

  {
    featureType: "poi",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },

  {
    featureType: "landscape",
    elementType: "all",
    stylers: [
      {
        color: "#f9f5ed",
      },
    ],
  },
  // {
  //   featureType: "transit",
  //   elementType: "all",
  //   stylers: [
  //     {
  //       visibility: "off",
  //     },
  //   ],
  // },
  {
    featureType: "administrative.country",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.province",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "all",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  // {
  //   featureType: "administrative.neighborhood",
  //   elementType: "all",
  //   stylers: [
  //     {
  //       visibility: "off",
  //     },
  //   ],
  // },
  {
    featureType: "administrative.land_parcel",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
];

const Center = {
  // 25.136615, 55.317752
  lat: 25.136615,
  lng: 55.317752,
  // 25.158676, 55.319732
  // lat: 25.158676,
  // lng: 55.319732,
};

function CustomMap({ center = Center, category = "all", zoom = 13, minHeight = "90vh", mapTypeControl = false, zoomControl = true, markerSize = "full" }) {
  const [mapInstance, setMapInstance] = useState(null);
  const [markers, setMarkers] = useState(allMarkers);
  const [mapType, setMapType] = useState("roadmap");
  const [activeMarker, setActiveMarker] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
  });

  const handleActiveMarker = (marker) => {
    if (marker === activeMarker) return;
    setActiveMarker(marker);
  };

  const filterMarkers = (category) => {
    if (!category || category === "all") {
      setMarkers(allMarkers);
      return;
    }
    // const filteredMarkers = allMarkers.filter((marker) => marker.category === category);

    const filteredMarkers = allMarkers.filter((marker) => marker.category.includes(category));
    setMarkers(filteredMarkers);
  };

  useEffect(() => {
    filterMarkers(category);
  }, [category]);

  return isLoaded ? (
    <>
      <GoogleMap center={center} zoom={zoom} mapContainerStyle={{ width: "100%", height: "100%", minHeight: minHeight }} mapTypeId={mapType} onClick={() => setActiveMarker(null)} onLoad={(map) => setMapInstance(map)} options={{ styles: mapStyles, mapTypeControl: mapTypeControl, zoomControl: zoomControl, fullscreenControl: false, streetViewControl: false }}>
        {markers.map(({ id, price, position }) => (
          <CustomMarker key={id} position={position} text={price} onClick={() => handleActiveMarker(id)} markerSize={markerSize} />
        ))}
      </GoogleMap>
    </>
  ) : null;
}

export default CustomMap;
