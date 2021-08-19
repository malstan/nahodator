/**
 * class for handling magic 8 ball
 */
class MagicBall {

    render(targetElm) {
        const lang = JSON.parse(localStorage.language).magicBall;

        document.querySelector(targetElm).innerHTML = this.getContent(lang);

        document.querySelector('#magicBallForm').onsubmit = event => this.getAnswer(lang, event);
    }

    getContent(lang) {
        return `
            <div class="container"> 
            <div id="magicBallImg"><span id="answer"></span></div>
            <div id="question"></div>
              <form id="magicBallForm">
                <input type="text" name="question" placeholder="${lang.question}" autocomplete="off"/>
                <div class="error" id="magicBallError"></div>
                <button class="primary" id="magicBallButton" type="submit">${lang.ballButton}</button>
              </form>
            </div>
        `;
    }

    getAnswer(lang, event) {
        event.preventDefault();

        const form = document.querySelector('#magicBallForm');
        const image = document.querySelector('#magicBallImg');
        const error = document.querySelector('#magicBallError');
        const questionElm = document.querySelector('#question');
        const answerElm = document.querySelector('#answer');
        const answers = lang.answers;

        // clear
        error.innerText = "";

        // get question
        const question = form.elements['question'].value;

        // check
        if (question === "") {
            error.innerText = `${lang.question}`;
            return;
        }

        questionElm.innerText = question;

        // animation
        image.classList.add("shaking");

        setTimeout(() => {
                // generate answer
                const index = Math.floor(Math.random() * 19);
                answerElm.innerText = answers[index];
                // show answer
                answerElm.style.visibility = "visible";

                image.classList.remove("shaking");
        },
            1000);

        form.reset();
    }
}

export default new MagicBall();