/**
 * class for generate random number
 */
class RandomNumber {

    render(targetElm) {
        const lang = JSON.parse(localStorage.languageContent).randomNumber;

        document.querySelector(targetElm).innerHTML = this.getContent(lang);

        // form submit -> get random number
        document.querySelector('#randomNumberForm').onsubmit = event => this.generate(lang, event);

        document.querySelector('#info').onclick = () => document.querySelector('.alert').style.display = "inherit";
    }

    getContent(lang) {
        return `
            <div id="info"><i class="far fa-question-circle"></i></div>
            <div class="alert" onclick="this.style.display = 'none'">
              <strong>Info:</strong> ${lang.info}
            </div>
            <div class="container">
              <form id="randomNumberForm">
                <input type="number" name="min" placeholder="Min"/>
                <input type="number" name="max" placeholder="Max"/>
                <div class="error" id="randomNumberError"></div>
                <div id="randomNumber"></div>
                <button class="primary" id="randomNumberButton" type="submit">${lang.getNumber}</button>
              </form>
            </div>
        `;
    }

    generate(lang, event) {
        event.preventDefault();

        const form = document.querySelector('#randomNumberForm');
        const error = document.querySelector('#randomNumberError');
        const randomNumberElm = document.querySelector('#randomNumber');

        // clear
        error.innerText = "";
        randomNumberElm.innerText = "";

        // get numbers from input
        const min = parseInt(form.elements["min"].value);
        const max = parseInt(form.elements["max"].value);

        // check
        if (isNaN(min) || isNaN(max))
            error.innerText = `${lang.missingNumber}`;
        else if (min > max)
            error.innerText = `${lang.numberMishmash}`;
        else if (min.length > 19 || max.length > 19)
            error.innerText = `${lang.largeNumber}`;
        else if (min === max)
            error.innerText = `${lang.sameNumbers}`;
        else {
            // set random number
            console.log(min, max);
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            randomNumberElm.innerText = `${randomNumber}`;
        }
    }
}

export default new RandomNumber();