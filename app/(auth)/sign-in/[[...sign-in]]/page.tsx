import { SignIn } from "@clerk/nextjs";
import React from "react";

export default function Page() {
  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center m-11" style={{ backgroundImage: "url('/login.jpg')" }}>
      <div className="flex-1 flex justify-center items-center bg-white bg-opacity-75 p-10 rounded-lg shadow-lg max-w-xl mx-auto">
        <SignIn />
      </div>
    </div>
  );
}
