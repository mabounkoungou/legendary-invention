"use client"
import { Search } from 'lucide-react'
import React from 'react'
import { Button } from "../../components/ui/button";
import { BellDot } from 'lucide-react'
import { UserButton, useUser } from '@clerk/nextjs';
import Link from 'next/link';

function Header() {
  const { user , isLoaded} = useUser();
  return (
    <div class='p-4 bg-white rounded-xl mt-3 flex flex-col sm:flex-row justify-between sm:items-center sm:mr-2 sm:w-auto'>
    <div class='flex gap-2 p-2 border rounded-xl placeholder-gray-600 sm:w-auto'>
      <Search />
      <input type="text" name="" id="" placeholder='Search for a course.....' class='outline-none w-full'/>
    </div>

    <div class='flex items-center gap-4 mt-3 sm:mt-0'>
      <BellDot class='text-primary hover:animate-bounce' />

     {isLoaded && user? <UserButton fallbackRedirectUrl='/courses'/> :

     <Link href={"/sign-in"}>
      <Button class='hover:animate-bounce'>
        Get Started
      </Button>
     </Link>
    }
    </div>
</div>

  )
}

export default Header