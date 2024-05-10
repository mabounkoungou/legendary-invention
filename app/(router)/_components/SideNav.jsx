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
            name:"Become a Tutor",
            Icon:GraduationCap
        }
    ]
  return (
    <div className='p-5 bg-white 
    rounded-xl h-screen m-3 '>
            <img src="/logo.svg" alt="logo" height={170} width={80}/>
            <div>
            {menu.map((item,index) => (
                <div key={index} className='flex gap-3'>
                <item.Icon/>
                <h2>{item.name}</h2>
                </div>
              )  )}
            </div>
    </div>
  )
}

export default SideNav