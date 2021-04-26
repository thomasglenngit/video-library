import React, { forwardRef, useRef } from 'react'
import VideoItem from './VideoItem'


const VideoList = forwardRef(({ videos, onVideoSelect, onClick }, ref ) => {
  

  const renderedlist = videos.map(video => {
    return <VideoItem
      key={video.id.videoId}
      onVideoSelect={onVideoSelect}
      video={video} />
  })

  return (
    <div
    ref={ref}
       className="ui relaxed divided list">{renderedlist}
      </div>
  )
})

export default VideoList