const express = require('express')

const bodyParser = require('body-parser')

const youtubeid = require('get-youtube-id')

const youtubeinfo = require('yt-scraper')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.set("view engine","ejs")

app.get("/",(req,res) => {
     res.render("index")
})

app.post('/',(req,res) => {
     var url = req.body.url
     console.log(url)

     var id = youtubeid(url)

     console.log(id)

     var data = youtubeinfo.videoInfo(url,
           options = { detailedChannelData: true })

           console.log(data)

           data.then(function(data){
                console.log(data)
                res.render("data",{data:data})
           })


})

app.listen(5000,() => {
     console.log("App is listening on Port 5000")
})