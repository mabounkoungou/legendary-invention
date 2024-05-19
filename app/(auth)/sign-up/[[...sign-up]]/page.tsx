import { SignUp } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

export default function Page() {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex-1 bg-gray-200 p-10">
        {/* Add your image here */}
        <Image src="/login.jpg" 
        width={600}
        height={900}
        alt="Image" className="w-full h-full object-cover" />
      </div>
      <div className="flex-1 p-10">
        <SignUp />
      </div>
    </div>
  );
}