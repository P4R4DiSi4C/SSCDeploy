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
                additionalData: `
                    @import "@/global.scss";
                    @import "~vue-ionicons/ionicons.scss";  
                `
            }
        }
    }
};
