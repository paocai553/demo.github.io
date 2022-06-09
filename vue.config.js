const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  devServer: {
    https: false,
    //  hotOnly: false,
    proxy: {
      "/api": {
        target: "http://liufusong.top:8899/api/private/v1/",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
