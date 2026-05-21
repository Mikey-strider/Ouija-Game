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
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '_',
  ];

  const helloGoodbye = [
    'Hello', 'Good-Bye',
  ];


  // The Riddles:

  const theRiddles = [
    {
      riddle: 'I wear a dusty, faded victorian dress. My house is a chaotic, broken mess. I watch from the window but never go out, I am the reason the servants shout! What am I?',
      answer: 'GHOST',
    },
    {
      riddle: 'I do not have eyes, but once I did see. Once I had thoughts, but now I am white and empty. What am I?',
      answer: 'SKULL',
    },
  ];


   

      // Main Ouija game build. HTML section.

    mainOuijaPage.innerHTML = `
      <header id="rules" class="rules">
        <div class="ouija-timer" style="font-size: 35px;"></div>
          <h1 class="ouija-title">We Speak:</h1>
            <ul class="ouija-rule-main">
              <li class="ouija-rules">Rule 1: Beat the clock</li>
              <li class="ouija-rules">Rule 2: Find the Planchette</li>
              <li class="ouija-rules">Rule 3: Solve the riddles</li>
              <li class="ouija-rules">Rule 4: Answer the riddle using the Planchette</li>
              <li class="ouija-rules">Rule 5: Hello to submit, Good-Bye to restart</li>
            </ul>
        <div class="ouija-riddle-build">
          <div class="riddle-question">Riddle Questions Here</div>
          </div>
          </header>
          <button id="start-bttn" type="button">Start</button>
      <div id="ouija-build">
      <div id="planchette-glass"></div>
        <div class="ouija-board-build">
          <div class="board-image">
            <main>
              <div id="ouija-yes-no" type="button" style="display: flex; font-size: 70px; gap:300px; justify-content: center; align-items: center; margin-top: 20px; margin-right: 35px; margin-bottom: 15px;"></div>
              <br>
              <div id="ouija-a-m" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div id="ouija-n-z" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div id="ouija-1-0" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div id="ouija-sal" type="button" style="display: flex; gap:250px; font-size: 60px; justify-content: center; align-items: center; margin-left: 85px;"></div>
              <br>
              <div class="riddle-answer"></div>
            </main>
          </div>
        </div>
        <div class="planchette-wrapper" draggable="true">
        </div>
      </div>
      <section></section>
      <section></section>
      <section></section>
    `;
  


  
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
    const startBttn = document.getElementById('start-bttn');



    
    // Ouija Board game placement

    let agreeDiv = "";
    for (const agree of yesNo) {
    ouijaChoice.innerHTML = agreeDiv += `<div class="ouija-board-agree">${agree}</div>`
    };


    let alpha1Div = "";
    for (const letterAM of AToM) {
    ouijaAM.innerHTML =  alpha1Div += `<div class="ouija-board-alpha1Div">${letterAM}</div>`
    };
    

    let alpha2Div = "";
    for (const letterNZ of NToZ) {
    ouijaNZ.innerHTML = alpha2Div += `<div class="ouija-board-alpha2Div">${letterNZ}</div>`
    };
    

    let numbersDiv = "";
    for (const count of boardNum) {
    ouijaNum.innerHTML = numbersDiv += `<div class="ouija-board-numbersDiv">${count}</div>`
    };


    let saluDiv = "";
    for (const regard of helloGoodbye) {
    ouijaSalutation.innerHTML = saluDiv += `<div class="ouija-board-salutationP">${regard}</div>`
    };




    // Ouija buttons functionality
    
    ouijaChoice.addEventListener('click', (e) => {
      riddleAnswered.innerText += e.target.textContent;
    });

    ouijaAM.addEventListener('click', (e) => {
      riddleAnswered.innerText += e.target.textContent;
    });
    
    ouijaNZ.addEventListener('click', (e) => {
      riddleAnswered.innerText += e.target.textContent;
    });

    ouijaNum.addEventListener('click', (e) => {
      riddleAnswered.innerText += e.target.textContent;
    });

    ouijaSalutation.addEventListener('click', (e) => {
      if (e.target.textContent !== 'Good-Bye'){
        riddleAnswered.innerText = e.target.textContent;
      } else {
        riddleAnswered.textContent = '';
        riddleAnswered.focus();
      }
    });




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



        // Responsive styling
      
      const style = document.createElement("style");
      style.innerHTML = `
        
        @media screen and (width <= 750px) {
            .ouija-board-build { max-width: 100%; height: auto; }
        }

        @media (width >= 600px) {
            body { font-size: 14px }
            .board-image { max-width: 100%; height: auto; }
        }

      `;
      document.head.appendChild(style);




}
window.addEventListener('DOMContentLoaded', modifyContent);
