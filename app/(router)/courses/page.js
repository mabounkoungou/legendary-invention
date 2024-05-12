"use client"
import React from 'react'
import WelcomeBanner from './_components/WelcomeBanner'
import CourseList from './_components/CourseList'

function Courses() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
      {/**left container */}

    <div className='col-span-3'>
<WelcomeBanner />

<CourseList />
{/**Course list Section */}
    </div>

{/* Right container */}

    <div className='col-span-1'>
      Right Section
    </div>

    </div>
  )
}

export default Courses