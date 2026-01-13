// components/BootstrapClient.tsx
'use client'; // This directive marks the component and its imports as client-side only

import { useEffect } from 'react';

export default function BootstrapClient() {
  useEffect(() => {
    // Dynamically import the JS file within the client-side useEffect hook
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
      .catch(err => console.error("Failed to load Bootstrap JS", err));
  }, []); // Empty dependency array ensures this runs once after initial client render

  return null; // This component doesn't render anything itself
}
