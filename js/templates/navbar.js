/**
 * class for navbar
 */
class Navbar {

    render() {
        document.querySelector('#header').innerHTML = this.getContent(JSON.parse(localStorage.language));

        const circle = document.querySelector('.material-btn');
        const content = document.querySelector('.material-content');
        const link = document.querySelector('.material-content').querySelectorAll('li');
        const hamburger = document.querySelector('.material-hamburger');
        const main = document.querySelector('main');

        // button click -> show menu / close menu
        circle.addEventListener(
            'click',
            event => {
                circle.classList.toggle('active');
                content.classList.toggle('active');
                hamburger.classList.toggle('material-close');
                main.classList.toggle('active');

                for (const item of link)
                    item.classList.toggle('active');

                event.preventDefault();
                event.stopImmediatePropagation();
            },
            false
        );

        // click somewhere -> close menu
        window.addEventListener(
            'click',
             () => {
                 if (circle.classList.contains('active')) {

                     for (const item of link )
                         item.classList.toggle('active');

                     setTimeout(() => {
                         circle.classList.remove('active');
                         hamburger.classList.remove('material-close');
                         main.classList.remove('active');
                         content.classList.remove('active');
                     },
                         700);
                 }},
            false
        );
    }

    getContent(lang) {
        return `
            <div class="material-menu-wrapper">
              <div class="material-menu">
                <div class="material-btn">
                  <div class="material-hamburger">
                    <div class="material-patty"></div>
                    <div class="material-patty"></div>
                    <div class="material-patty"></div>
                  </div>
                </div>
                <div class="material-content">
                  <nav>
                    <ul>
                      <li><a href="#home">${lang.home.menu}</a></li>
                      <li><a href="#coin">${lang.coin.menu}</a></li>
                      <li><a href="#random">${lang.randomNumber.menu}</a></li>
                      <li><a href="#ball">${lang.magicBall.menu}</a></li>
                      <li><a href="#match">${lang.matches.menu}</a></li>
                      <li><a href="#crossroads">${lang.crossroads.menu}</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>    
        `
    }
}

export default new Navbar();