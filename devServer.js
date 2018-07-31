const path = require('path')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const express = require('express')

app = express()
const config = require('./webpack.config')
const compiler = webpack(config)

app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})


const PORT = 3000

app.listen(PORT, () => {
  console.log(`React-Redux app is listening on port ${PORT}`)
})