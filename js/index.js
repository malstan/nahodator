import Navbar from "./templates/navbar.js";
import Translate from "./language/translate.js";
import ParamHashRouter from "./paramHashRouter.js";
import Routes from "./routes.js";

await Translate.init();

window.router = new ParamHashRouter(Routes);

Navbar.render();

window.addEventListener("load",function() {
    // Set a timeout...
    setTimeout(function(){
        // Hide the address bar!
        window.scrollTo(0, 1);
    }, 0);
});