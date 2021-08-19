import Home from "./templates/home.js";
import Coin from "./templates/coin.js";
import RandomNumber from "./templates/randomNumber.js";
import MagicBall from "./templates/magicBall.js";
import Match from "./templates/match.js";
import Crossroads from "./templates/crossroads.js";

export default [
    {
        hash: "home",
        target: "#main",
        getTemplate: targetElm => Home.render(targetElm)
    },
    {
        hash: "coin",
        target: "#main",
        getTemplate: targetElm => Coin.render(targetElm)
    },
    {
        hash: "random",
        target: "#main",
        getTemplate: targetElm => RandomNumber.render(targetElm)
    },
    {
        hash: "ball",
        target: "#main",
        getTemplate: targetElm => MagicBall.render(targetElm)
    },
    {
        hash: "match",
        target: "#main",
        getTemplate: targetElm => Match.render(targetElm)
    },
    {
        hash: "crossroads",
        target: "#main",
        getTemplate:targetElm => Crossroads.render(targetElm)
    }
];