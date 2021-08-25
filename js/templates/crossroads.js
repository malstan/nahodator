class Crossroads {

    render(targetElm) {
        const lang = JSON.parse(localStorage.language).crossroads;

        document.querySelector(targetElm).innerHTML = this.getContent(lang);

        document.querySelector('#crossroadsForm').onsubmit = event => this.handleCrossroads(lang, event);

        document.querySelector('#info').onclick = () => document.querySelector('.alert').style.display = "inherit";
    }

    getContent(lang) {
        return `
            <div id="info"><i class="far fa-question-circle"></i></div>
            <div class="alert" onclick="this.style.display = 'none'">
              <strong>Info.</strong> ${lang.info}
            </div>
            <div class="container">
              <div id="crossroadsContainer">
              
              </div>
              <form id="crossroadsForm">
                <div class="flexContainer">
                  <div class="numberInput">
                    <button class="minus" onclick="event.preventDefault();this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                    <input type="number" name="crossroads" value="2" min="2" max="8">
                    <button class="plus" onclick="event.preventDefault();this.parentNode.querySelector('input[type=number]').stepUp()"></button>
                  </div>
                
                  <button class="primary" type="submit"><i class="fas fa-sync-alt"></i></button>
                </div>
              </form>
            </div>
        `;
    }

    handleCrossroads(lang, event) {
        event.preventDefault();

        const form = document.querySelector('#crossroadsForm');

        const crossroads = parseInt(form.elements['crossroads'].value);

        this.generateCrossroads(crossroads)
    }

    generateCrossroads(crossroads) {
        const crossroadsContainer = document.querySelector('#crossroadsContainer');

        crossroadsContainer.innerHTML = "";

        if (crossroads%2 === 0)
            crossroadsContainer.style.transform = "rotate(-6.5deg)";
        else
            crossroadsContainer.style.transform = "rotate(0)";

        const road = Math.floor(Math.random() * crossroads);

        let rotate = 0;

        for (let i = 0; i < crossroads; i++) {
            const image = document.createElement("img");
            image.classList.add("arrow");

            if (i === road)
                image.src = "./figures/arrow_green.png";
            else
                image.src = "./figures/arrow.png";

            image.style.transform = `rotate(${rotate}deg)`;

            rotate *= -1;
            if(i%2 === 0)
                rotate +=13;

            crossroadsContainer.appendChild(image);
        }

    }
}

export default new Crossroads();