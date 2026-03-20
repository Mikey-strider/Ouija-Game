function modifyContent() {
  const mainOuijaPage = document.getElementById('main-ouija-page');


    mainOuijaPage.innerHTML = `
      <header id="wrapper" class="wrapper">
        <div class="ouija-timer"></div>
          <h1 class="ouija-title">We Speak</h1>
            <ul class="ouija-rule-main">
              <li class="ouija-rules">Rule 1: Beat the clock</li>
              <li class="ouija-rules">Rule 2: Find the glass</li>
              <li class="ouija-rules">Rule 3: Solve the riddles</li>
              <li class="ouija-rules">Rule 4: Answer the riddle using the glass</li>
              <li class="ouija-rules">Rule 5: Hello to submit, Good-Bye to restart</li>
            </ul>
      </header>
      <div id="ouija-build">
      <div id="absinthe-glass">Absinthe Glass</div>
        <section class="ouija-board-build">
          <div id="ouija-sun-moon">Sun and Moon</div>
          <div id="ouija-yes-no">Yes and No</div>
          <div id="ouija-a-m">A,B,C,...M</div>
          <div id="ouija-n-z">N,O,P,...Z</div>
          <div id="ouija-sal">Hello and Good-Bye</div>
        </section>
        <section class="ouija-riddle-build">
          <div class="riddle-question">Riddle Questions Here</div>
          <div class="riddle-answer">Riddle Answered Here</div>
          <button type="button">Submit</button>
        </section>
      </div>
      `

    const ouijaTimer = document.querySelector('.ouija-timer');
    const ouijaRuleMain = document.querySelector('.ouija-rule-main');
    const ouijaRules = document.querySelector('.ouija-rules');
    const absinthe = document.querySelector('#absinthe-glass');
    const ouijaBuild = document.querySelector('#ouija-build');
    const ouijaBoardBuild = document.querySelector('.ouija-board-build');
    const ouijaRiddleBuild = document.querySelector('.ouija-riddle-build');
    const riddleQuestion = document.querySelector('.riddle-question');
    const riddleAnswered = document.querySelector('.riddle-answer');


    // Ouija timer section.  Freezes page once time runs out.
    
      let seconds_left = 10;

      const interval = setInterval(() =>{
        ouijaTimer.innerHTML = formatTime(seconds_left);
        seconds_left--;
        if (seconds_left < 0) {
          clearInterval(interval);
          const freezePage = (() => {
        if (mainOuijaPage) {
          document.body.style.pointerEvents = 'none';
          ouijaTimer.innerHTML = "<h1>Time Expired</h1>";
        }
      })
      const freezeDelay = interval;
      setTimeout(freezePage, freezeDelay);
        }
      }, 1000);

      function formatTime(totalSeconds) {
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
        const formattedSeconds = seconds < 60 ?  seconds : minutes;
        
        return formattedMinutes + ":" + formattedSeconds;
      }

      

      
      







}
window.addEventListener('DOMContentLoaded', modifyContent);
