import React, { useRef } from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'


const Header = () => {

  return (
    <div id="header" >
      <p>One thing is clear, we can do a lot BETTER.</p>
      <p style={{ paddingLeft: '100px' }}>Join our mission.</p>
      <p style={{ paddingLeft: '250px' }}>Let's create a lasting energy TOGETHER.</p>
      <br></br>
      <p>
        Find inspiration here.
      </p>
      <div>
        <Link to="/pages/watch" className="watch-button">
          <button className="massive ui button orange">watch</button>
      </Link>
      </div>
    </div>
  )
}

export default Header
