import { Search } from 'lucide-react'
import React from 'react'
import { Button } from '@/components/ui/button'
import { BellDot } from 'lucide-react'

function Header() {
  return (
    <div className='p-4 bg-white rounded-xl mt-3 flex justify-between'>
        <div className='flex gap-2 p-2 border rounded-xl placeholder-gray-600'>
            <Search />
            <input type="text" name="" id="" placeholder='Search for a course.....'
            className='outline-none '/>
                    </div>

            
<div className='flex items-center gap-4 ml-2 '>
<BellDot className='text-gray-500 hover:animate-bounce'/>

<Button className='hover:animate-bounce' >
    Get Started
</Button>


</div>
    </div>
  )
}

export default Header