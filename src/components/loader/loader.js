import React from 'react'
import "./Loader.css"

function Loader() {
  return (
    <>
        <div class="container">
            <div class="ring"></div>
            <div class="ring"></div>
            <div class="ring"></div>
        </div>
        <div class="glitch" data-text="LOADING...">LOADING...</div>
    </>
  )
}

export default Loader