/**
 * class for generate random number
 */
class RandomNumber {

    render(targetElm) {
        const lang = JSON.parse(localStorage.language).randomNumber;

        document.querySelector(targetElm).innerHTML = this.getContent(lang);

        // form submit -> get random number
        document.querySelector('#randomNumberForm').onsubmit = event => this.generate(lang, event);
    }

    getContent(lang) {
        return `
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
        const min = form.elements["min"].value;
        const max = form.elements["max"].value;

        // check
        if (min === "" || max === "")
            error.innerText = `${lang.missingNumber}`;
        else if (parseInt(min) > parseInt(max))
            error.innerText = `${lang.numberMishmash}`;
        else if (min.length > 19 || max.length > 19)
            error.innerText = `${lang.largeNumber}`;
        else {
            // set random number
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            randomNumberElm.innerText = `${randomNumber}`;
        }
    }
}

export default new RandomNumber();