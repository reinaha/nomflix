const path = require("path");
const prodConfig = require("./webpack.prod");
const devConfig = require("./webpack.dev");

const MODE = process.env.npm_lifecycle_event;

const PATHS = {
    entry: path.resolve(__dirname,"../src/index.js")
};

const commonConfig = {
    entry: ["babel-polyfill", PATH.entry]
};

if(MODE === "dev"){
    module.exports = Object.assign({}, commonConfig, devConfig);
}else if(MODE === "build"){
    module.exports = Object.assign({}, commonConfig, prodConfig);
}

