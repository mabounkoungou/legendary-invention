import {  BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'
import React from 'react'

function SideNav() {
    const menu = [
        {
            id:1,
            name:"All Courses",
            Icon:BookOpen
        },
        {
            id:2,
            name:"MemberShip",
            Icon:BadgeIcon
        },
        {
            id:3,
            name:"Tutor",
            Icon:GraduationCap
        }
    ]
  return (
    <div className='p-5 bg-white 
    rounded-xl h-screen m-3 '>
            <img src="/logo.svg" alt="logo" height={170} width={80} 
            className='hover:animate-bounce mb-2 items-center ml-2'/>

            <hr className='mt-6'></hr>
            <div className='mt-8'>
            {menu.map((item,index) => (
                <div key={index} className='group flex gap-3 
                mt-2 p-3 text-[20px] 
                items-center text-gray-500 
                cursor-pointer hover:bg-primary
                 hover:text-white
                  hover:rounded-lg 
                  transition-all ease-in-out duration-300
                  '>
                <item.Icon className='group-hover:animate-bounce'/>
                <h2>{item.name}</h2>
                </div>
              )  )}
            </div>
    </div>
  )
}

export default SideNav