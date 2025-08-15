"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function ClientBody({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  // Remove any extension-added classes during hydration
  useEffect(() => {
    // This runs only on the client after hydration
    document.body.className = `antialiased ${className || ""}`;
  }, [className]);

  return (
    <body suppressHydrationWarning className={`antialiased ${className || ""}`}>
      <Script
        crossOrigin="anonymous"
        src="//unpkg.com/same-runtime/dist/index.global.js"
      />
      {children}
    </body>
  );
}
