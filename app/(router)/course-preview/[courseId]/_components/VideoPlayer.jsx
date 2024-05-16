import React from 'react'

function VideoPlayer({videoUrl}) {
  return (
      <video 
      width={1000}
      height={250}
      controls
      className='rounded-xl'>
        <source src={videoUrl} type='video/mp4'/>
      </video>
  )
}

export default VideoPlayer
