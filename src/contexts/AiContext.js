"use client";
// src/contexts/AiContext.js
import React, { createContext, useState, useContext } from "react";

// Create the context
const AiContext = createContext();

// Create a provider component
export const AiProvider = ({ children }) => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [signInPopUpShow, setSignInPopUpShow] = useState(false);

  return <AiContext.Provider value={{ isAiOpen, setIsAiOpen, signInPopUpShow, setSignInPopUpShow }}>{children}</AiContext.Provider>;
};

// Custom hook to use the AiContext
export const useAiContext = () => {
  const context = useContext(AiContext);
  if (!context) {
    throw new Error("useAiContext must be used within an AiProvider");
  }
  return context;
};
