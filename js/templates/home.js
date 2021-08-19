/**
 * class for home page
 */
class Home {
    
    render(targetElm) {
        document.querySelector(targetElm).innerHTML = this.getContent(JSON.parse(localStorage.language).home);
    }

    getContent(lang) {
        return `
            <div class="container">
              <h1>${lang.title}</h1>
              <p>${lang.info}</p>
              <p>${lang.warning}</p>
              <p><a class="link" href="#">Git</a></p>
            </div>
        `;
    }
}

export default new Home();