import React, { useState, useEffect } from 'react'
import SearchBar from '../components/SearchBar'
import VideoList from '../components/VideoList'
import VideoDetail from '../components/VideoDetail'
import useVideos from '../hooks/useVideos'

const VideoWatch = () => {

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('sustainable development')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  return (
    <div className="ui container">
      <p className="video-intro">Discover how business enterprises are moving to clean development: </p>
      <SearchBar onFormSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
            <VideoList
              // onVideoSelect={(video) => setSelectedVideo(video)}// or even better:
              onVideoSelect={setSelectedVideo}
              videos={videos}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default VideoWatch