"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // This immediately moves the user to the login page
    router.replace("/login");
  }, [router]);

  return (
    // A blank screen or a simple loading spinner while redirecting
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  );
}