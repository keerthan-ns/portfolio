import React from 'react'
import "./Loader.css"

function Loader() {
  return (
    <>
        <div className="container">
            <div className="ring"></div>
            <div className="ring"></div>
            <div className="ring"></div>
        </div>
        <div className="glitch" data-text="LOADING...">LOADING...</div>
    </>
  )
}

export default Loader