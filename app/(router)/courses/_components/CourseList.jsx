import React, { useEffect, useState } from 'react'
import GlobalApi from '@/app/_utils/GlobalApi';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import CourseItem from './CourseItem';
import Link from 'next/link';


function CourseList() {
const [courseList,setCourseList] = useState([])

    //Fetch Course List
    useEffect(()=>{
        getAllCourses();

    }, []);

    const getAllCourses = () =>{
        GlobalApi.getAllCourseList().then(resp => {
            setCourseList(resp?.courseLists);
        })
    }
  return (
    <div className='p-5 bg-white rounded-lg  mt-5 '>
      {/**Title and Filter Courses */}
      <div className='flex items-center justify-between'>
<h2 className='text-[20px] 
font-bold
 text-primary 
 hover:animate-bounce
 
 ' >All Courses</h2>
<Select className='border-primary '>
  <SelectTrigger className="w-[180px] border-primary">
    <SelectValue placeholder="Filter" className='border-primary hover:animate-bounce' />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="light"  >All</SelectItem>
    <SelectItem value="dark"  >Paid</SelectItem>
    <SelectItem value="system"  >Free</SelectItem>
  </SelectContent>
</Select>

      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 gap-3 mt-4'>
        {courseList?.length > 0? courseList?.map((item,index) =>(
          <Link href={'/course-preview/'+item.slug}>
          <div key={index}>
            <CourseItem course = {item} />
            </div>
            </Link>
        ))
      :
      
[1,2,3,4,5,6,7,8,9].map((item,index) => (
  <div key={index} className='w-full h-[240px]
  rounded-xl m-2 bg-primary animate-pulse
  skeleton-shimmer'>
    </div>
))


      }
      </div>
    </div>
  )
}

export default CourseList