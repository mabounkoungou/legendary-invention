import { Lock, Play } from 'lucide-react'
import React, { useState } from 'react'

function CourseContentSection({courseInfo}) {

    const [activeIndex, setActiveIndex] = useState(0);

  return (

    <div className='p-3 bg-white rounded-xl mt-3 items-center'>

      <h2 className="content items-center">
Content
      </h2>
      {courseInfo.chapter.map((item,index)=>(

        <div key={index} className='p-3 bg-white rounded-xl'>

          <h2 className={`p-2 text-[14px]

           flex justify-between 

           items-center border rounded-xl px-4 cursor-pointer

           m-2 hover:bg-gray-200 hover:text-gray-500

           ${ activeIndex==index && 'bg-primary text-white'}` } > 
           {index+1}. {item.name}
           {activeIndex == index?
           <Play className='h-4 w-4'/>:

          <Lock className='h-4 w-4'/>
        }


          </h2>
          
            </div>

          ))}

        </div>
  )

}

export default CourseContentSection
