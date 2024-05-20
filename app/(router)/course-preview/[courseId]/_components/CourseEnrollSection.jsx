"use client"
import { useUser } from '@clerk/nextjs';
import { Button } from '../../../../components/ui/button'
import React, { use, useEffect } from 'react'
import Link from 'next/link';
import GlobalApi from '../../../../_utils/GlobalApi';
import { useRouter } from 'next/navigation';
import { toast } from "sonner"


function CourseEnrollSection({ courseInfo ,isUserAlreadyEnrolled}) {
    const membership = false;
    const { user } = useUser();

    const router  = useRouter();
    useEffect(()=>{
      if(isUserAlreadyEnrolled){
        console.log("User Already Enrollwd to this Course")
      }
    }, [])
    const onEnrollCourse = () => {
        GlobalApi.enrollToCourse(courseInfo?.slug, user?.primaryEmailAddress?.emailAddress).then(resp =>{
console.log(resp);
if(resp){
  toast("User Enrolled Successfully", {
    description: "User Enrolled to this Course",
  })

  router.push('/watch-course/'+resp.createUserEnrollCourse.id)

}
        })
    }
  return (
    <div className='p-3 text-center rounded-xl bg-primary '>
        <h2 className='text-[20px] font-bold text-white cursor-pointer'>
            Enroll to this Course</h2>
            { user && (membership || courseInfo.free)?

            <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'> Enroll Now to start Learning</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-amber-950'
             onClick={() => onEnrollCourse()}
            >
                Enroll Now
            </Button>
            </div>

            :!user?
            <div className='flex flex-col gap-3 mt-3'>
            <h2 className='text-white font-light'> Enroll Now to start Learning</h2>
           <Link href={"/sign-in"}> <Button className='bg-white text-primary hover:bg-white hover:text-amber-950' >
                Enroll Now
            </Button> </Link>
            </div>

           :
            <div className='flex flex-col gap-3 mt-3'>
 <h2 className='text-white font-light'> Buy Monthly membership and Get Access to All Courses</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-amber-950'>
                Buy Membership $ 2.99
            </Button>
            </div>}

            <div className='flex flex-col gap-3 mt-3'>
 <h2 className='text-white font-light'> Buy Monthly membership and Get Access to All Courses</h2>
            <Button className='bg-white text-primary hover:bg-white hover:text-amber-950'>
                Buy Membership $ 2.99
            </Button>
            </div>

    </div>
  )
}

export default CourseEnrollSection
