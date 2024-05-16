import { Button } from '@/components/ui/button'
import React from 'react'

function CourseEnrollSection() {
    const membership = false;
  return (
    <div className='p-3 text-center rounded-xl bg-primary '>
        <h2 className='text-[20px] font-bold text-white cursor-pointer'>
            Enroll to this Course</h2>
            {membership?

            <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'> Enroll Now to start Learning</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-amber-950'>
                Enroll Now
            </Button>
            </div>
           : <div className='flex flex-col gap-3 mt-3'>
 <h2 className='text-white font-light'> Buy Monthly membership and Get Access to All Courses</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-amber-950'>
                Buy Membership $ 2.99
            </Button>
            </div>}
    </div>
  )
}

export default CourseEnrollSection
