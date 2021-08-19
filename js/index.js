import Navbar from "./templates/navbar.js";
import translate from "./language/translate.js";
import ParamHashRouter from "./paramHashRouter.js";
import Routes from "./routes.js";

translate('sk');

Navbar.render();

window.router = new ParamHashRouter(Routes);