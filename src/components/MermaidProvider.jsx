// MermaidProvider.js

import React, { useState } from 'react';
import MermaidContext from './MermaidContext';

const MermaidProvider = ({ children }) => {
  const [mermaidValue, setMermaidValue] = useState("");

  // the value prop is where you provide the state and the updater function to the context
  return (
    <MermaidContext.Provider value={{ mermaidValue, setMermaidValue }}>
      {children}
    </MermaidContext.Provider>
  );
};

export default MermaidProvider;
