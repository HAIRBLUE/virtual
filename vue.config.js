const { defineConfig } = require('@vue/cli-service')
// const path = require("path");
// const resolve = function(dir) {
//   return path.join(__dirname, dir);
// };
module.exports = defineConfig({
  lintOnSave:false,
  transpileDependencies: true,
  publicPath: './'
})
