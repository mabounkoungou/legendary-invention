import React from 'react';
import { Skeleton } from "@/components/ui/skeleton"
import VideoPlayer from './VideoPlayer';
import CourseEnrollSection from './CourseEnrollSection';

function CourseVideoDescription({ courseInfo }) {
  // Check if courseInfo is defined before accessing its properties
  if (!courseInfo) {
    return (
        <div className="flex flex-col space-y-3">
          <Skeleton className="h-[125px] w-[250px] rounded-xl" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      );
  }

  return (
    <div className='rounded-xl'>
      <h2 className='text-[20px] font-bold'>{courseInfo.name}</h2>
      <h2 className='text-gray-400 text-[14px] mb-3 '>{courseInfo.author}</h2>

      {/* Render other course information */}
      <VideoPlayer videoUrl={courseInfo?.chapter[0]?.video?.url} />

      <h2 className='mt-5 text-[17px] font-semibold'>About This Course</h2>
      <div>
        
      </div>

      
    </div>
  );
}

export default CourseVideoDescription;
