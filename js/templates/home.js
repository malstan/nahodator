/**
 * class for home page
 */
class Home {
    
    render(targetElm) {
        document.querySelector(targetElm).innerHTML = this.getContent(JSON.parse(localStorage.languageContent).home);
    }

    getContent(lang) {
        return `
            <div class="container">
              <h1>${lang.title}</h1>
              <p>${lang.info}</p>
              <p>${lang.warning}</p>
              <p class="iconContainer">
                <a class="link" href="https://github.com/stenllysb/nahodator"><i class="fab fa-lg fa-github"></i></a>
                <a class="link" href="./figures/app/nahodator-1.5.1.apk"><i class="fab fa-lg fa-android"></i></a>
              </p>
            </div>
        `;
    }
}

export default new Home();