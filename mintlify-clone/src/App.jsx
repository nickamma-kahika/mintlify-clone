import { useState } from 'react'
import reactLogo from './assets/react.svg'
import arrowSign from './assets/arrow.svg'
import './App.css'



function App() {

  return (
    <>
      <body>
        <header>
          <div id="navbarContainer" >
            <logo>
              <img src={reactLogo} alt="logo" />
            </logo>
            <nav id="navbar">
              <ul>
                <li>Resources</li>
                <li>Documentation</li>
                <li>Customers</li>
                <li>Blog</li>
                <li>Pricing</li>
              </ul>
            </nav>
          </div>
          <div id="authButtons">
            <a class="navbarButtons login">Contact Sales</a>
            <a class="navbarButtons signup">Start for free</a>
          </div>
        </header>
        <main>

          <a href="" class="belowNav">
            <span>NEW</span>
            <p>Self-updating docs with agent suggestions</p>
            <img width="15px" src={arrowSign} alt="arrow" />
          </a>

          <div class="pageHeadings">
            <h1 class="pageHeading">The Intelligent Knowledge Platform</h1>
            <p class="secondaryHeading">Helping teams create and maintain world-class documentation built for both humans and AI</p>
            <form class="headingsForm" action="">
              <input type="email" placeholder="Email address" />
              <button class="startNow">Start Now</button>
            </form>
          </div>

          <div>
            <img class="mainBodypicture" src="https://www.mintlify.com/hero/hero-image-light.svg" alt="" />
          </div>


        </main>
      </body>
    </>
  )
}

export default App
