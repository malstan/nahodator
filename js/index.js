import Navbar from "./templates/navbar.js";
import Translate from "./language/translate.js";
import ParamHashRouter from "./paramHashRouter.js";
import Routes from "./routes.js";

await Translate.init();

Navbar.render();
window.router = new ParamHashRouter(Routes);