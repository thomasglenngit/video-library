import React, { useState, useEffect } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
// import SearchBar from './SearchBar'
// import VideoList from './VideoList'
// import VideoDetail from './VideoDetail'
// import useVideos from '../hooks/useVideos'
import Header from './Header'
import ButtonAppBar from './AppBar'
import Conversation from './Conversation'
import VideoWatch from '../pages/VideoWatch'
import Footer from '../components/Footer'
import history from '../history';

const App = () => {
  // const [selectedVideo, setSelectedVideo] = useState(null)
  // const [videos, search] = useVideos('sustainable development')

  // useEffect(() => {
  //   setSelectedVideo(videos[0])
  // }, [videos])

  //    setSelectedVideo(response.data.items[0])

  // const onVideoSelect = (video) => { //moved to inline function
  //   setSelectedVideo(video)
  // }

  return (
    <div >
      <ButtonAppBar />
      <Router history={history}>
        <Header />
        <Route path="/" />
        <Route path="/pages/watch" exact component={VideoWatch} />
      </Router>
      <Conversation className="ui container" />
      <Footer/>
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