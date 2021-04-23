import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import useVideos from '../hooks/useVideos'
import ButtonAppBar from './AppBar'
import Conversation from './Conversation'

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videos, search] = useVideos('buildings')

  useEffect(() => {
    setSelectedVideo(videos[0])
  }, [videos])

  //    setSelectedVideo(response.data.items[0])



  // const onVideoSelect = (video) => { //moved to inline function
  //   setSelectedVideo(video)
  // }

  return (
    <div className="ui container">
      <ButtonAppBar />
      <Conversation className="ui container" />
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

export default App

// onTermSubmit = (term) => {
//   youtube.get("/search", {
//     params: {
//       q: term,
//       part: "snippet",
//       type: 'video',
//       maxResults: 5,
//       key: KEY
//     }
//   })
// }
// So says the custom hook: "If you give me a default search term, I will give you a video and a list of videos."
// 1. Identify each line of code related to some single purpose
// 2. Identify the inputs to that code
// 3. Identify the outputs to that code
// 4. Extract all of the code into a separate function, receiving the inputs as arguments, and returning the outputs.