"use client"
import { useUser } from '@clerk/nextjs'
import {  BadgeIcon, BookOpen, GraduationCap, GroupIcon, LayoutGrid, Newspaper } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect } from 'react'

function SideNav() {
  const {user} = useUser();
    const menu = [
        {
            id:1,
            name:"Dashboard",
            Icon:LayoutGrid,
            path:"/dashboard",
            auth:user
        },
        {
          id:2,
          name:"All Courses",
          Icon:BookOpen,
          path:"/courses",
          auth:true
      },
        {
            id:3,
            name:"MemberShip",
            Icon:BadgeIcon,
            path:"/membership",
            auth:true
        },
        {
            id:4,
            name:"Tutor",
            Icon:GraduationCap,
            path:"/tutor",
            auth:true
        },
        {
            id:5,
            name:"Newsletter",
            Icon:Newspaper,
            path:"/newsletter",
            auth:true
        },
        {
            id:6,
            name:"Platform",
            Icon:GroupIcon,
            path:"/platform",
            auth:true
        }
    ]
    const path = usePathname();
    useEffect(()=>{
      console.log("path",path)
    },[])
    
  return (
    <div className='p-5 bg-white 
    rounded-xl h-screen ml-2 mr-2 '>
            <img src="/logo.svg" alt="logo" height={170} width={80} 
            className='hover:animate-bounce mb-2 items-center ml-2'/>

            <hr className='mt-6'></hr>
            <div className='mt-8'>
            {menu.map((item,index) => item.auth && (
                <Link href={item.path}>
                <div key={index} className={`group flex gap-3 
                mt-2 p-3 text-[20px] 
                items-center text-gray-500 
                cursor-pointer hover:bg-primary
                 hover:text-white
                  hover:rounded-lg 
                  transition-all ease-in-out duration-300 ${path.includes(item.path) &&
                     ' rounded-lg bg-primary text-white'}`}
                  >
                <item.Icon className='group-hover:animate-bounce'/>
                <h2>{item.name}</h2>
                </div>
                </Link>
              )  )}
            </div>
    </div>
  )
}

export default SideNav