import Navbar from "./templates/navbar.js";
import Translate from "./language/translate.js";
import ParamHashRouter from "./paramHashRouter.js";
import Routes from "./routes.js";

Translate.init()
    .then(() => window.router = new ParamHashRouter(Routes))
    .then(() => Navbar.render())
    .then(() => window.scrollTo(0,1));
