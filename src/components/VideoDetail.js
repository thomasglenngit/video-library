import React from 'react'
import { Typography } from '@material-ui/core'

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <Typography 
        variant='h5'
        gutterbottom='true'
        >
          {video.snippet.title}
        </Typography>
        <Typography variant='subtitle1'>
          {video.snippet.description}
        </Typography>
        {/* <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p> */}
      </div>
    </div>
  )
}

export default VideoDetail