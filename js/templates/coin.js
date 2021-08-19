/**
 * class for coin toss handling
 */
class Coin {

    render(targetElm) {
        document.querySelector(targetElm).innerHTML = this.getContent(JSON.parse(localStorage.language).coin);

        // button click -> flip coin
        document.querySelector('#coinTrigger').onclick = this.flip;
    }

    getContent(lang) {
        return `
            <div class="container">
              <div id="coin">
                <div class="side front"></div>
                <div class="side back"></div>
              </div>
              <button class="primary" id="coinTrigger">${lang.button}</button>
            </div>
        `;
    }

    flip() {
        const coin = document.querySelector('#coin');
        const button = document.querySelector('#coinTrigger');

        const result = Math.floor(Math.random() * 2);

        let className;
        result === 1 ? className = "flipFront" : className = "flipBack";

        // set class for animation
        if (coin.className === className) {
            coin.className = "";
            void coin.offsetWidth; // refresh
            coin.className = className;
        } else
            coin.className = className;

        // disable button while animation is running
        button.disabled = true;
        setTimeout(() => button.disabled = false, 2000);
    }
}

export default new Coin();