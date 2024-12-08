import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="h-12 w-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
}
