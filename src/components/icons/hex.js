import React from 'react';

// Render a simple rectangle behind the logo to act as the cyan background.
// The SVG keeps the same viewBox so it scales consistently with existing CSS.
const IconHex = () => (
  <svg id="hex" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 84 96">
    <title>Background Rectangle</title>
    <rect x="3" y="8" width="78" height="80" rx="8" fill="currentColor" />
  </svg>
);

export default IconHex;
