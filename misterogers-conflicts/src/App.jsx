import { useState } from 'react'
import mrnConflicts from './assets/mrn-conflict.mp4'
import mrnConflicts2 from './assets/mrn-conflict2.mp4'
import mrnConflicts3 from './assets/mrn-conflict3.mp4'
import mrnConflicts4 from './assets/mrn-conflict2.mp4'
import mrnConflicts5 from './assets/mrn-conflict2.mp4'
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

      <main>
        <section class="card">
          <header>Southwood's Acting Strange...</header>
          <br/>
          <video controls width="100%" className="videoPlayer" src={mrnConflicts}></video>

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

          <h5>NOTE: This was found on YouTube. It was cut and trimmed with the help of Clideo.</h5>
  </section>

  <section class="card">
    <header>Make-Believe On High Alert</header>
      <video controls width="100%" className="videoPlayer" src={mrnConflicts2}></video>

      <br/>

        <p>Mister Rogers shows a quarter and a nickel that he has in a small coin purse -- the coins were made in the same year he was born (1928). Viewers are invited along with Mister Rogers as he visits a place that manufactures coins and is given a tour of the facility.
          
          <br/> <br/>

          In the Neighborhood of Make-Believe, King Friday and Miss Paulificate are making phone calls to ask others what the King should do about the possibility that Southwood is making bombs. When Corney is asked if his piece might be part of a bomb, he replies, "Well, of course it might be. But I doubt that it is. I mean why would anybody want to order that many bombs? I'm making a million of those parts."

            <br/> <br/>

          Alarmed at the possibility that Southwood is making a million bombs, King Friday orders Handyman Negri to have Corney make a million of the same parts for the Neighborhood of Make-Believe and to enlist everyone in the Neighborhood to help put the bombs together. Although uncomfortable with the idea of bombs himself, Handyman Negri follows the King's orders.
            
            <br/> <br/>

          King Friday learns that Corney is manufacturing some "things" for Southwood and orders Handyman Negri to buy one of the parts from Corney for further inspection. Handyman Negri questions the high cost of the item but Corney says that the people of Southwood have been willing to pay that price.
            
            <br/> <br/>

          Everyone assembles at the castle to put the bombs together and Henrietta Pussycat becomes upset at the idea of fighting.
                      
            <br/> <br/>

          Back at the house, Mister Rogers sings "What Do You Do With the Mad That You Feel."</p>

        </section>

        <section class="card">
          <header>Preparation For Trouble</header>
          <br/>
          <video controls width="100%" className="videoPlayer" src={mrnConflicts3}></video>

          <p>Mister Rogers brings a Braille writing machine with him and demonstrates how it works. He then takes viewers with him as he visits with Jim Swauger in a cave where he see the petroglyphs of an early civilization.
          
          <br/> <br/>

          On the way back to the house, Mister Rogers stops by Negri's Music Shop to see Don Liuzzi practice the marimba and a few other percussion instruments.

            <br/> <br/>

          In the Neighborhood of Make-Believe, Lady Elaine and Lady Aberlin resist King Friday's bomb-building efforts as they seek to prove that Southwood is a peaceful place. Bob Dog has been appointed as a spy for the "war" with Southwood.
            
            <br/> <br/>

          In the school, the children learn about using gas masks and air-raid shelters.
            
            <br/> <br/>

          At the castle, the appointed generals have been armed with the recently-constructed "bombs."
                      
            <br/> <br/>

          Back at the house, Mister Rogers sings "I'm Proud of You". He concludes by saying, "I'm very glad that you're a part of the world. Because you can help to make it a better and better place for people to live so that people won't have to be so scared of other people."</p>
        </section>

        <section class="card">
          <header>The Truth About Southwood's Plan</header>
          <br/>
          <video controls width="100%" className="videoPlayer" src={'https:www.dailymotion.com/video/x5qqid9'}></video>

          <p>Mister Rogers brings with him a box full of colored blocks. He takes them to the kitchen were he uses them to build a bridge. He also has with him a handful of marbles which he shows before watching films on how people use and make marbles.

            <br/> <br/>

          In the Neighborhood of Make-Believe, Lady Elaine and Lady Aberlin take Bob Dog with them to Southwood to find out what exactly is going on.
            
            <br/> <br/>

          Upon their arrival, they learn that the parts Corney made have been used to build a bridge, not for building bombs.
            
            <br/> <br/>

          While they are there, Keith, the Southwood carpenter, sings What Do You Do With the Mad That You Feel. King Friday is embarrassed when he learns that there are no bombs in Southwood and declares that his generals are not "generals of peace."
                      
            <br/> <br/>

          Mister Rogers concludes this episode with a few interesting comments about rules: "Rules are very, very important. Not just for games but for all things. Even big things like countries. Countries have to have rules to protect people, too. And someday you'll be helping to make the rules for your country. I trust that you'll make the best kind you know how."</p>
        </section>

        <section class="card">
          <header>Peace Restored</header>
          <br/>
          <video controls width="100%" className="videoPlayer" src={'https:www.dailymotion.com/video/x5qqid9'}></video>

          <p>Mister Rogers arrives with a record player which he demonstrates in the kitchen. The record he plays is a 45 RPM recording of Everybody's Fancy. He then shows a film about how people make record players.

            <br/> <br/>

          In the Neighborhood of Make-Believe, everyone is preparing for a celebration of peace. The citizens of Southwood are invited to the celebration by Queen Sara.
            
            <br/> <br/>

          The children of the Neighborhood are working with Lady Elaine Fairchilde as they sing "Peace and Quiet" while Lady Aberlin goes throughout the Neighborhood asking everyone what they think about peace. Keith, the carpenter from Southwood, helps the Neighborhood school by using Corney's parts to make a record player.
            
            <br/> <br/>

          Back at the house, Mister Rogers sings You Are Special before a very unique ending to the week's visits. Mister Rogers talks to viewers about the week's topics before he steps onto the porch and sings Peace and Quiet. His song is followed by the text of Isaiah 2:4 appearing on the screen before the credits begin:

          "And they shall beat their swords into plowshares,
          And their spears into pruning forks;
          Nation shall not lift up sword against nation,
          Neither shall they learn war any more." </p>
        </section>
</main>

      <main>
        <section class="card">
          <header>Mister Rogers Talks About Conflicts</header>
          <br/>
          <video controls width="100%" className="videoPlayer" src={'https:www.dailymotion.com/video/x5qqid9'}></video>

          <p>The video is a 'marathon' of the five episodes of the "Conflicts" arc.</p>
        </section>
</main>

<h1> ABOUT </h1>
      <p>The "Conflict" arc in Mister Rogers' Neighborhood, a five-episode series from the 14th season, directly addresses the concept of conflict and war, particularly in response to the heightened tensions of the Cold War era. The arc, debuting in November 1983, uses the Neighborhood of Make-Believe to explore how misunderstandings and assumptions can escalate into conflict, even without physical violence. </p>

      <br/>

      <p>Due to the sensitive nature of the topic and concerns about the potential impact on young viewers, the "Conflict" episodes were removed from regular rotation and TV. </p>
      <footer>
        <p>Website &copy; 2025 Alexander Egerev. All Rights Reserved.</p>
        <p>Mister Rogers' Neighborhood &copy; 1968-2001, 2025 The Fred Rogers Company/Fred Rogers Productions. All Rights Reserved.</p>
      </footer>
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
