import React from 'react'
import "./Loader.css"

function Loader() {
  return (
    <div className='loader-bg' id='loader-bg'>
        <div className="lcontainer">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
        </div>
        <div className="glitch " data-text="LOADING...">LOADING...</div>
    </div>
  )
}

export default Loader