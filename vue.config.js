const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  pwa: {
    name: 'KS.Lab Scientific',
    themecolor: '#4DBA87',
    msTilecolor: '#000000',
    applemobileWebAppCapable: 'yes',
    applemobileWebAppStatusBarStyle: 'black',

    workboxPluginnMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'dev/sw.js',
    }
  }
})
