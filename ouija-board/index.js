function modifyContent() {
  const mainOuijaPage = document.getElementById('main-ouija-page');

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
        <section class="ouija-board-build">
          <div class="board-image">
            <div id="ouija-yes-no"></div>
            <div id="ouija-a-m"></div>
            <div id="ouija-n-z"></div>
            <div id="ouija-1-0"></div>
            <div id="ouija-sal"></div>
          </div>
        </section>
        <div class="planchette-wrapper" draggable="true">
          </div>
        <section class="ouija-riddle-build">
          <div class="riddle-question">Riddle Questions Here</div>
          <div class="riddle-answer">Riddle Answered Here</div>
          <button type="button">Submit</button>
        </section>
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

    // Ouija Board game placement
    let ouijaDiv = "";
    for (const agree of yesNo) {
      console.log(agree);

    ouijaChoice.innerHTML = ouijaDiv += `<div class="ouija-board-salutation">${agree}</div>`
    };


    let alpha1 = "";
    for (const letter of AToM) {
      console.log(letter);

    ouijaAM.innerHTML =  alpha1 += `<div class="ouija-board-standard">${letter}</div>`
    };
    

    let alpha2 = "";
    for (const letterz of NToZ) {
      console.log(letterz);

    ouijaNZ.innerHTML = alpha2 += `<div class="ouija-board-standard">${letterz}</div>`
    };
    

    let numbers = "";
    for (const count of boardNum) {
      console.log(count);

    ouijaNum.innerHTML = numbers += `<div class="ouija-board-standard">${count}</div>`
    };


    let salu = "";
    for (const regard of helloGoodbye) {
      console.log(regard);

    ouijaSalutation.innerHTML = salu += `<div class="ouija-board-salutation">${regard}</div>`
    };


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

      
        //Planchette mouser
          const pointerImg = document.querySelector('.planchette-cursor');

            window.addEventListener('mousemove', e => {
                // Adjust -25 to center the image based on its size
                pointerImg.style.left = e.pageX - 25 + 'px';
                pointerImg.style.top = e.pageY - 25 + 'px';
            });

          



        // const img = document.querySelector('img');
        //   img.addEventListener('click', () => {
        //     img.style.cursor = 'planchette'; 
        //   });

      // Ouija board build

      

    // styling section

  //   const style = document.createElement("style");
  //   style.innerHTML = `
      



  // `
  // document.head.appendChild(style);
        

      

      
      







}
window.addEventListener('DOMContentLoaded', modifyContent);
