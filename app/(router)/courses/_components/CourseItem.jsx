import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div className=' rounded-xl border mt-2 '>
        <Image src={course?.banner?.url} 
        width={500}
        height={150}
        alt='banner'
        className='rounded-t-xl'/>
        <div className='flex flex-col gap-1 p-2'>
            <h2 className='font-medium ml-1'>{course.name}</h2>
            <h2 className='text-[16px] text-gray-400 ml-1'>{course.author}</h2>
          {course?.chapter?.length == 0 ?<div className='flex gap-2'>
                <Image src="/youtube.png " 
                alt='youtube'
                width={20}
                height={20}
                className='hover:animate-bounce ml-1'/>
               <h2 className='text-[14px] text-gray-400' > Watch on YouTube </h2>
            </div>
            :<div className='flex gap-2'>
                <Image src="/chapter.png " 
                alt='chapter'
                width={20}
                height={20}
                className='hover:animate-bounce ml-1'/>
               <h2 className='text-[14px] text-gray-400' >Chapters </h2>
            </div>
            } 
            <h2 className='text-[15px] ml-1' style={{ color: course?.free? 'green' : 'red' }}>
                { course?.free? 'Free' : 'Paid' }
            </h2>
        </div>
    </div>
  )
}

export default CourseItem