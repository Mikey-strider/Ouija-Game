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
      answers: 'GHOST',
    },
    {
      riddle: 'I do not have eyes, but once I did see. Once I had thoughts, but now I am white and empty. What am I?',
      answers: 'SKULL',
    },
    {
      riddle: 'I\’m the final framework for a fleeting art, with a permanent grin but no beating heart. What am I?',
      answers: 'SKELETON',
    },
    {
      riddle: 'I am the shell the specter shed, and the feast on which the ghouls are fed. What am I?',
      answers: 'BODY',
    },
    {
      riddle: 'I am right behind you and creep on the ground. I follow you everywhere, yet I cannot make a single sound. If you turn on the light, I will abandon you immediately. What am I?',
      answers: 'SHADOW',
    },
    {
      riddle: 'My future is scraped from my insides to clear the way, For a brief, bright soul to hold darkness at bay. What am I?',
      answers: 'PUMPKIN',
    },
    {
      riddle: 'I\’m a ghost of a whisper, a phantom you keep, Speak of me once and I\’m buried six feet deep. What am I?',
      answers: 'SECRET',
    },
    {
      riddle: 'I wear a face but have no soul to fright, And swallow strangers whole on horror\’s night. What am I?',
      answers: 'HOUSE',
    },
    {
      riddle: 'I am a door through which all footsteps fall, A final silence that will answer every call. What am I?',
      answers: 'DEATH',
    },
  ];



  const trivia = [
    {
      triviaQuestion: 'How many times was Tony Todd stung by bees while making Candyman?',
      multipleChoice: {
        a: 25,
        b: 27,
        c: 17,
      },
      triviaAnswer: 'B',
    },
    {
      triviaQuestion: 'What was the biggest clue in Scream, telling you which killer was who?',
      multipleChoice: {
        a: 'The Phone Calls',
        b: 'The mask',
        c: 'The way they held their knives',
      },
      triviaAnswer: 'C',
    },
    {
      triviaQuestion: 'What fueled Robert Englund\'s performance the most in the first "A Nightmare on Elm Street" movie?',
      multipleChoice: {
        a: 'How much he hated being in the make up chair for long periods of time.',
        b: 'He wasn\'t allowed to interact much the cast and felt isolated.',
        c: 'He was jealous of how much less screen time he had compared to his co stars.',
      },
      triviaAnswer: 'A',
    },
    {
      triviaQuestion: 'In The Shining, Jack Nicholson had a particular form of training, that caused the set crew to keep making thicker doors for the "Here\'s Johnny" scene.',
      multipleChoice: {
        a: 'He had been training to for a triathalon.',
        b: 'He was a volunteer Marshall.',
        c: 'He had been strength training.',
      },
      triviaAnswer: 'B',
    },
    {
      triviaQuestion: 'In the first Resident Evil movie, the SFX artist had a weird issues with the dogs. What was it?',
      multipleChoice: {
        a: 'They kept being too excited to see everyone.',
        b: 'They kept licking the meat and fake blood off of themselves.',
        c: 'They kept being too aggresive with the team.',
      },
      triviaAnswer: 'B',
    },
    {
      triviaQuestion: 'Which movie did the term "Groovy!" come from?',
      multipleChoice: {
        a: 'Army of Darkness',
        b: 'They Live',
        c: 'Evil Dead 2',
      },
      triviaAnswer: 'C',
    },
  ];

  const truthOrDare = [];


   

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
              <li class="ouija-rules">Rule 5: Hello to submit, Good-Bye to clear</li>
            </ul>
        <div class="ouija-riddle-build">
          <section class="riddle-question" hidden>
            <div class="riddled"></div>
          </section>
        </div>
          </header>
          <button id="start-bttn" type="button">Start</button>
      <div id="ouija-build">
      <div id="planchette-glass"></div>
        <div class="ouija-board-build">
          <div class="board-image">
            <main>
              <div class="ouija-function" id="ouija-yes-no" type="button" style="display: flex; font-size: 70px; gap:300px; justify-content: center; align-items: center; margin-top: 20px; margin-right: 35px; margin-bottom: 15px;"></div>
              <br>
              <div class="ouija-function" id="ouija-a-m" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="ouija-function" id="ouija-n-z" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="ouija-function" id="ouija-1-0" type="button" style="display: flex; font-size: 45px; gap:50px; justify-content: center; align-items: center;"></div>
              <br>
              <div class="ouija-function" id="ouija-sal" type="button" style="display: flex; gap:250px; font-size: 60px; justify-content: center; align-items: center; margin-left: 85px;"></div>
              <br>
              <div class="riddle-answer"></div>
            </main>
          </div>
        </div>
        <div class="planchette-wrapper" draggable="true">
        </div>
      </div>
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
    ouijaChoice.innerHTML = agreeDiv += `<div class="ouija-board-agree">${agree}</div>`;
    };


    let alpha1Div = "";
    for (const letterAM of AToM) {
    ouijaAM.innerHTML =  alpha1Div += `<div class="ouija-board-alpha1Div">${letterAM}</div>`;
    };
    

    let alpha2Div = "";
    for (const letterNZ of NToZ) {
    ouijaNZ.innerHTML = alpha2Div += `<div class="ouija-board-alpha2Div">${letterNZ}</div>`;
    };
    

    let numbersDiv = "";
    for (const count of boardNum) {
    ouijaNum.innerHTML = numbersDiv += `<div class="ouija-board-numbersDiv">${count}</div>`;
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




    // Riddle question and answer section:

    let nextRiddle = 0;

    const riddling = () => {
      riddleQuestion.innerText = theRiddles[nextRiddle].riddle;
      nextRiddle = nextRiddle + 1;
    };

    
    let answering = 0;

    ouijaSalutation.addEventListener('click', (e) => {
      if (e.target.textContent !== 'Good-Bye'){
          if (riddleAnswered.textContent === theRiddles[answering].answers) {
              riddling();
              riddleAnswered.textContent = '';
              riddleAnswered.focus();
              answering = answering + 1;
            } else {
              riddleAnswered.innerText = 'Wrong Answer!';
            }
      } else {
        riddleAnswered.textContent = '';
        riddleAnswered.focus();
      }
    });




      // Ouija timer section. Beings game and freezes page once time runs out.

     startBttn.addEventListener('click', () => {
      riddleQuestion.removeAttribute('hidden');
      riddling();

       let seconds_left = 300;

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
            pointerImg.style.left = e.pageX - 40 + 'px';
            pointerImg.style.top = e.pageY - 70 + 'px';
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
