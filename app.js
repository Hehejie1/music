const Koa = require('koa')
const static = require('koa-static')
const views = require('koa-views')
const body = require('koa-body')
const Router = require('koa-router')
const compress = require('koa-compress')
const { join } = require('path')
const path = require("path");
const fs = require("fs");
const app = new Koa
const router = new Router
const pug = require('pug')

router.get('/', async ctx => {
    let pathName = "./public/music";
    let songs = []
    const files = fs.readdirSync(pathName,)
    files.forEach(function (item, index) {
        songs.push(item.split('.')[0])
    })
    await ctx.render('index.pug',{
        songs
    })
})

app.use(body())
app.use(static(join(__dirname, "public")))
app.use(views(join(__dirname, "view"),{
    extensions : 'pug'
}))

app.use(router.routes()).use(router.allowedMethods()).listen(8084, ()=> {
    console.log("listen 8084");
})
















