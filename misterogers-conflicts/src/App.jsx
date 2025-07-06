import { useState } from 'react'
import mrnConflicts from './assets/mrn-conflict.mp4'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <> 
        <header class="main-header">
          <h1>Mister Rogers Talks About Conflict</h1>
          <h2>By sheer luck, we have all 5 episodes of the "Conflict Arc" of "Mister Rogers' Neighborhood". This is not seen anywhere else, so consider yourselves lucky!</h2> 
          <p>Want to see behind-the-scenes of the project? You can do so <a href="https://github.com/aegerev/misterogers-on-demand">here.</a></p>
        </header>

        <section class="card">
          <header>Southwood's Acting Strange...</header>
          <video controls width="70%" className="videoPlayer" src={mrnConflicts}></video>

          <p>Mister Rogers arrives with a wooden puzzle where specific shapes must be matched to their corresponding holes. After playing with the puzzle for a moment, Mister Rogers sings You've Got to Do It.
          
          <br/> <br/>

            Mr. McFeely stops by with a coin bank before he and Mister Rogers visit Negri's Music Shop where a collection of toy banks is on display.

            <br/> <br/>

            In the Neighborhood of Make-Believe, King Friday plans to purchase a record player for the Neighborhood school but he becomes distracted when a curious delivery is made to Corney's factory.
            
            <br/> <br/>

            King Friday learns that Corney is manufacturing some "things" for Southwood and orders Handyman Negri to buy one of the parts from Corney for further inspection. Handyman Negri questions the high cost of the item but Corney says that the people of Southwood have been willing to pay that price.
            
            <br/> <br/>

            Prince Tuesday returns from school where he has been learning about countries and wars. When he asks King Friday if there has ever been a war in the Neighborhood of Make-Believe, his father assures him that for generations there has been nothing but peace in the Neighborhood. King Friday recalls a song which his forefathers had taught him about solving problems and sings a small portion of the song (the song is exactly the same as "Many Ways to Say I Love You" but the words have been changed to "many ways to solve a problem"). With war fresh on their minds, King Friday and Prince Tuesday begin to wonder if the pieces being made for Southwood are bomb parts.
            
            <br/> <br/>

            Back at the house, Mister Rogers sings a line from King Friday's song before he plays a game by dropping coins onto a piece of paper with shapes drawn on it. Lastly, Mister Rogers shows a film called "Food Drop" which shows food being dropped from a military aircraft.</p>

  </section>

    </>

    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
