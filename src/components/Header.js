import React from 'react'
import '../styles/styles.css'

const Header = () => {
  return (
    <div className="header">
      <p>One thing is clear, we can do a lot BETTER.</p>
      <p style={{ paddingLeft: '100px' }}>Join our mission.</p>
      <p style={{ paddingLeft: '250px' }}>Let's create a lasting energy TOGETHER.</p>
      <br></br>
      <p>
        Find inspiration here.
      </p>
      <button className="ui button green"><a href=""></a>watch</button>
      {/* <button className="ui button inverted green" window.location.href='#play-position'>Play</button> */}
      <button className="ui button olive" onclick="window.location.href='#watch'">watch</button>
      <button className="ui button inverted teal">watch</button>
    </div>

  )
}

export default Header