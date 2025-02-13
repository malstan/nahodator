const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: "./",
  transpileDependencies: true,
  pwa: {
    name: "Náhodator",
    themeColor: "#0b6e11",
    msTileColor: "#292524",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#292524",
    iconPaths: {
      faviconSVG: "img/icons/favicon.svg",
      favicon32: "img/icons/favicon-32x32.png",
      favicon16: "img/icons/favicon-16x16.png",
      appleTouchIcon: "img/icons/apple-touch-icon-152x152.png",
      maskIcon: "img/icons/safari-pinned-tab.svg",
      msTileImage: "img/icons/mstile-150x150.png",
      androidChrome192: "img/icons/android-chrome-192x192.png",
    },
  },
});
