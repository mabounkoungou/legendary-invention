import GlobalApi from '../../../_utils/GlobalApi';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function SideBanners() {

    const [sideBannerList, setSideBannerList] = useState([]);
    useEffect(()=>{
        getSideBanners();
    },[])
    const getSideBanners =()=>{
        GlobalApi.getSideBanner().then(resp =>{
            console.log(resp);
            setSideBannerList(resp.sideBanners)
        })
    }
  
    return (
        <div>
            {sideBannerList ? (
                sideBannerList.map((item,index)=>(
                    <div key={index}>
                        <Image src={item?.banner?.url}
                            alt='Banner'
                            width={500}
                            height={300}
                            onClick={()=>window.open(item?.url)}
                            className='rounded-xl mb-2
                            cursor-pointer'
                            
                        />
                    </div>
                ))
            ) : (
                <div>Loading...</div>
            )}
        </div>
    )
}

export default SideBanners;
