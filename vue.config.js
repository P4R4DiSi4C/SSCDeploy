module.exports = {
  lintOnSave: true,
  pluginOptions: {
    electronBuilder: {
      preload: "src/preload.js"
    }
  },
  css: {
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/global.scss";
            @import "~vue-ionicons/ionicons.scss";  
          `
      }
    }
  }
};
