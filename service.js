const express = require("express");
const app = express()

var allowCrossDomain = function(req, res, next) {
    // 自定义中间件，设置跨越使用的响应头
    res.header("Access-Control-Allow-Origin", "*"),
    next()
}
app.use(allowCrossDomain)   //运用跨域的中间件
app.get("./login",(req,res)=>  {
   let info = req.query;
   console.log(info);
   if(info.uname == "admin" && info.password == "111") {
       res.send({
           flag: "1"
       })
   } else {
       res.send({
           flag:"2"
       })
   }
})

app.listen(3001, () => {
    console.log("running------")
})
