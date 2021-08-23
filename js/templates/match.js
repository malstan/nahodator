class Match {

    render(targetElm) {
        const lang = JSON.parse(localStorage.language).matches;

        document.querySelector(targetElm).innerHTML = this.getContent(lang);

        document.querySelector('#matchForm').onsubmit = event => this.handleMatches(lang, event);
    }

    getContent(lang) {
        return `
            <div class="container">
              <div id="matchContainer">
              
              </div>
              <form id="matchForm">
                <div class="flexContainer">
                  <div class="matchInputContainer">
                    <span><img src="./figures/matchnoburned.png" alt="no burned match"></span>
                    <div class="numberInput">
                      <button class="minus" onclick="event.preventDefault();this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                      <input type="number" name="noBurned" value="1" min="1" max="9">
                      <button class="plus" onclick="event.preventDefault();this.parentNode.querySelector('input[type=number]').stepUp()"></button>
                    </div> 

                    <span><img src="./figures/matchburned.png" alt="burned match"></span>
                    <div class="numberInput">
                      <button class="minus" onclick="event.preventDefault();this.parentNode.querySelector('input[type=number]').stepDown()"></button>
                      <input type="number" name="burned" value="1" min="1" max="9">
                      <button class="plus" onclick="event.preventDefault();this.parentNode.querySelector('input[type=number]').stepUp()"></button>
                    </div>
                  </div>
                  
                  <button class="primary" type="submit"><i class="fas fa-sync-alt"></i></button>
                </div>
                
                <div class="error" id="matchError"></div>
              </form>
            </div>
        `;
    }

    handleMatches(lang, event) {
        event.preventDefault();

        const form = document.querySelector('#matchForm');
        const error = document.querySelector('#matchError');

        error.innerText = "";

        const noBurned = form.elements['noBurned'].value;
        const burned = form.elements['burned'].value;

        if (parseInt(noBurned) + parseInt(burned) > 10) {
            error.innerText = `${lang.oversize}`;
            return;
        }

        this.generateMatches(noBurned, burned);
    }

    generateMatches(noBurned, burned) {
        const matchContainer = document.querySelector('#matchContainer');
        const matches = parseInt(noBurned) + parseInt(burned);

        matchContainer.innerHTML = "";

        let burned_indexes = [burned];
        burned_indexes.fill(-1);

        let randomIndex;
        for (let i = 0; i < burned; i++) {
            do {
                randomIndex = Math.floor(Math.random() * matches);
            } while (burned_indexes.includes(randomIndex));
            burned_indexes[i] = randomIndex;
        }

        for (let i = 0; i < matches; i++) {
            const image = document.createElement("img");
            image.classList.add("hiddenMatch");

            if (burned_indexes.includes(i))
                image.src = "./figures/matchburned.png";
            else
                image.src = "./figures/matchnoburned.png";

            image.onclick = () => image.style.transform = "translateX(0)";
            matchContainer.appendChild(image);
        }
    }
}

export default new Match();