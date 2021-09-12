/**
 * class for handling magic 8 ball
 */
class MagicBall {

    render(targetElm) {
        const lang = JSON.parse(localStorage.language).magicBall;

        document.querySelector(targetElm).innerHTML = this.getContent(lang);

        // submit -> generate answer
        document.querySelector('#magicBallForm').onsubmit = event => this.getAnswer(lang, event);

        document.querySelector('#info').onclick = () => document.querySelector('.alert').style.display = "inherit";
    }

    getContent(lang) {
        return `
            <div id="info"><i class="far fa-question-circle"></i></div>
            <div class="alert" onclick="this.style.display = 'none'">
              <strong>Info.</strong> ${lang.info}
            </div>
            <div class="container"> 
            <div id="magicBallImg"><span id="answer"></span></div>
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

        form.elements['question'].placeholder = question;

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