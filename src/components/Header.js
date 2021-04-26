import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/styles.css'


const Header = () => {

  return (
    <div id="header" >
      <p style={{ paddingLeft: '10%' }}>One thing is clear, we can do a lot BETTER.</p>
      <p style={{ paddingLeft: '20%' }}>Join our mission.</p>
      <p style={{ paddingLeft: '30%' }}>Let's create a lasting energy TOGETHER.</p>
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
