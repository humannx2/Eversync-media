"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function useGetLocation() {
  const pathname = usePathname();
  const [location, setLocation] = useState<string>("");

  useEffect(() => {
    setLocation(pathname);
  }, [pathname]);

  return location;
}