import './VideoItem.css'
import React from 'react'
import { Typography } from '@material-ui/core'

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt={video.snippet.title} />
      <div className="content">
          <Typography>
          {video.snippet.title}
          </Typography>
      </div>
    </div>
  )
}

export default VideoItem