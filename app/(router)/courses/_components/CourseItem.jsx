import Image from 'next/image'
import React from 'react'

function CourseItem({course}) {
  return (
    <div>
        <Image src={course?.banner?.url} 
        width={400}
        height={100}
        alt='banner'
        className='rounded-xl'/>
        <div>
            <h2 className='font-medium'>{course.name}</h2>
            <h2 className='text-[16px] text-gray-400'>{course.author}</h2>
            <div>
                <Image src="/youtube.png " 
                alt='youtube'
                width={20}
                height={20}/>
            </div>

        </div>
    </div>
  )
}

export default CourseItem