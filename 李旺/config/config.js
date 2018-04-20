var path=require("path")
var api=require("../mock/index")
module.exports={
  base:{
    entry:path.join(__dirname,"../src/main.js"),
    outputPath:path.join(__dirname,"../dist"),
    outputFileName:"[id]-[name]-[hash].js",
    templatePath:"./src/index.html",
    htmlMinify: {
      removeComments: true,
      collapseWhitespace: true,
      removeAttributeQuotes: true,
      removeEmptyAttributes:true
    }
   
  },
  dev:{
    host:"localhost",
    port:8080,
    browserOpen:true,
    devtool:"cheap-module-eval-source-map",
    proxy:{
      "/apis": {
        target: "http://localhost:3000",
        pathRewrite: {"^/apis" : "/api"},
        secure: false
      }
    },
    before:api
  },
  build:{
    uglifyJsSourceMap:false,
    devtool:false
  },
  babel:{
    presets: [
      "env"
    ]
  }
}