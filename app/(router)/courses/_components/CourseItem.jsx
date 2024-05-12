import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div>
        <Image src={course?.banner?.url} 
        width={200}
        height={200}
        alt='banner'
        className='rounded-xl mt-2'/>
        <div>
            <h2 className='font-medium'>{course.name}</h2>
            <h2 className='text-[16px] text-gray-400'>{course.author}</h2>
            <div className='flex gap-2'>
                <Image src="/youtube.png " 
                alt='youtube'
                width={20}
                height={20}
                className='hover:animate-bounce'/>
               <h2 className='text-[14px] text-gray-400' > Watch on YouTube </h2>
            </div>
            <h2>{ course?.free? 'Free':'Paid' }</h2>

        </div>
    </div>
  )
}

export default CourseItem