"use client"
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import CourseVideoDescription from './_components/CourseVideoDescription'
import GlobalApi from '../../../_utils/GlobalApi' // Ensure the correct path to the GlobalApi file
import CourseEnrollSection from './_components/CourseEnrollSection'
import CourseContentSection from './_components/CourseContentSection'
import { useUser } from '@clerk/nextjs'

function CoursePreview({params}) {

  const {user} = useUser();
  const [courseInfo,setCourseInfo] = useState();
  const [isUserAlreadyEnrolled, setIsUserAlreadyEnrolled] = useState(false);

  useEffect(()=> {
    params && getCourseInfoById();
      }, [params])

      useEffect(()=>{
        courseInfo && user && checkUserEnrolledToCourse();
      },[courseInfo,user])

  const getCourseInfoById = () =>{
GlobalApi.getCourseById(params?.courseId).then(resp=>{
  
  setCourseInfo(resp?.courseList);
})
  }
  
  const checkUserEnrolledToCourse = () =>{
    GlobalApi.checkUserEnrolledToCourse(courseInfo.slug,user.primaryEmailAddress.emailAddress).then(resp=>{
      if (resp?.userEnrollCourses[0]?.id){
        console.log(resp)
        setIsUserAlreadyEnrolled(true);
      }
    })
  }
 
  return courseInfo &&  (
    <div className='grid grid-cols-1 md:grid-cols-3 p-5 gap-3'>
      <div className='col-span-2 bg-white p-3 rounded-xl'>
<CourseVideoDescription courseInfo={courseInfo} />
      </div>

      <div>
<CourseEnrollSection  courseInfo={courseInfo}/>
<CourseContentSection  
courseInfo={courseInfo}
isUserAlreadyEnrolled={isUserAlreadyEnrolled}
/>
      </div>

    </div>
  )
}

export default CoursePreview