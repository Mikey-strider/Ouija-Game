function modifyContent() {
  const mainOuijaPage = document.getElementById('main-ouija-page');

    mainOuijaPage.innerHTML = `
      <header id="wrapper" class="wrapper">
        <div class="ouija-timer">timer</div>
          <h1 class="ouija-title">We Speak</h1>
            <ul class="ouija-rules">
              <li id="ouija-rule1">Rule 1: Beat the clock</li>
              <li id="ouija-rule2">Rule 2: Find the glass</li>
              <li id="ouija-rule3">Rule 3: Solve the riddles</li>
              <li id="ouija-rule4">Rule 4: Answer the riddle using the glass</li>
              <li id="ouija-rule5">Rule 5: Hello to submit, Good-Bye to restart</li>
            </ul>
      </header>
      <div id="ouija-build">
          <section class="ouija-board-build">
          <div id="absinthe-glass">Absinthe Glass</div>
          <div id="ouija-sun-moon">Sun and Moon</div>
          <div id="ouija-yes-no">Yes and No</div>
          <div id="ouija-a-m">A,B,C,...M</div>
          <div id="ouija-n-z">N,O,P,...Z</div>
          <div id="ouija-sal">Hello and Good-Bye</div>
        </section>
        <section class="ouija-riddle-build">
          <div class="riddle-question">Riddle Questions Here</div>
          <div class="riddle-answer">Riddle Answered Here</div>
        </section>
      </div>
      `
      







}
window.addEventListener('DOMContentLoaded', modifyContent);
