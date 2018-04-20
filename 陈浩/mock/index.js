var Mock=require("mockjs")
var Random = Mock.Random

module.exports=function(app){
  app.get("/api",function(req,res,next){
    var data = Mock.mock({
          'list|23-40': [{
              'image': Random.image('100x100', '#50B347', '#FFF', 'Mock.js'),
              "ctitle": Random.ctitle(15, 16),
              "price|100-999": 100,
              "csentence": "免运费",
              "head|0-99999": 100,
              "city": Random.city()
          }]
      })
    res.send(data)
  })
}