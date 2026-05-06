function modifyContent() {
  const mainOuijaPage = document.getElementById('main-ouija-page');

  // Ouija number and letters array

  const yesNo = [
    'Yes', 'No',
  ];

  const AToM = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  ];

  const NToZ = [
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  ];

  const boardNum = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0,
  ];

  const helloGoodbye = [
    'Hello', 'Good-Bye',
  ];

      // Main Ouija game build. HTML section.

    mainOuijaPage.innerHTML = `
      <header id="rules" class="rules">
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
      <div id="planchette-glass"></div>
        <div class="ouija-board-build">
          <div class="board-image">
          <div>
            <div id="ouija-yes-no" type="button" onclick="alert('Clicked!')" style="display: flex; gap:300px; justify-content: center; align-items: center;"></div>
            <br>
            <div id="ouija-a-m" type="button" onclick="alert('Clicked!')" style="display: flex; gap:50px; justify-content: center; align-items: center;"></div>
            <br>
            <div id="ouija-n-z" type="button" onclick="alert('Clicked!')" style="display: flex; gap:50px; justify-content: center; align-items: center;"></div>
            <br>
            <div id="ouija-1-0" type="button" onclick="alert('Clicked!')" style="display: flex; gap:50px; justify-content: center; align-items: center;"></div>
            <br>
            <div id="ouija-sal" type="button" onclick="alert('Clicked!')" style="display: flex; gap:250px; justify-content: center; align-items: center;"></div>
            <br>
          </div>
          </div>
        </div>
        <div class="planchette-wrapper" draggable="true">
          </div>
        <div class="ouija-riddle-build">
          <div class="riddle-question">Riddle Questions Here</div>
          <div class="riddle-answer">Riddle Answered Here</div>
          <button id="startBttn" type="button">Start</button>
        </div>
      </div>
      `
      // Ouija main game play functionaltiy. 
    
    const ouijaTimer = document.querySelector('.ouija-timer');
    const ouijaRuleMain = document.querySelector('.ouija-rule-main');
    const ouijaRules = document.querySelector('.ouija-rules');

    const ouijaBuild = document.querySelector('#ouija-build');
    const ouijaBoardBuild = document.querySelector('.ouija-board-build');
    
    const ouijaChoice = document.querySelector('#ouija-yes-no');
    const ouijaAM = document.querySelector('#ouija-a-m');
    const ouijaNZ = document.querySelector('#ouija-n-z');
    const ouijaNum = document.querySelector('#ouija-1-0');
    const ouijaSalutation = document.querySelector('#ouija-sal');
    
    
    const planchette = document.querySelector('#planchette-glass');
    
    const ouijaRiddleBuild = document.querySelector('.ouija-riddle-build');
    const riddleQuestion = document.querySelector('.riddle-question');
    const riddleAnswered = document.querySelector('.riddle-answer');
    const startBttn = document.getElementById('startBttn');

    // Ouija Board game placement

    let agreeDiv = "";
    for (const agree of yesNo) {
      console.log(agree);

    ouijaChoice.innerHTML = agreeDiv += `<div class="ouija-board-agree">${agree}</div>`
    };


    let alpha1Div = "";
    for (const letter of AToM) {
      console.log(letter);

    ouijaAM.innerHTML =  alpha1Div += `<div class="ouija-board-alpha1Div">${letter}</div>`
    };
    

    let alpha2Div = "";
    for (const letterz of NToZ) {
      console.log(letterz);

    ouijaNZ.innerHTML = alpha2Div += `<div class="ouija-board-alpha2Div">${letterz}</div>`
    };
    

    let numbersDiv = "";
    for (const count of boardNum) {
      console.log(count);

    ouijaNum.innerHTML = numbersDiv += `<div class="ouija-board-numbersDiv">${count}</div>`
    };


    let saluDiv = "";
    for (const regard of helloGoodbye) {
      console.log(regard);

    ouijaSalutation.innerHTML = saluDiv += `<div class="ouija-board-salutationP">${regard}</div>`
    };


      // Ouija timer section. Freezes page once time runs out.

     startBttn.addEventListener('click', () => {
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
      };
     });

      
        //Planchette mouser
          const pointerImg = document.querySelector('.planchette-cursor');

            window.addEventListener('mousemove', e => {
                // Adjust -25 to center the image based on its size
                pointerImg.style.left = e.pageX - 25 + 'px';
                pointerImg.style.top = e.pageY - 25 + 'px';
            });




}
window.addEventListener('DOMContentLoaded', modifyContent);
