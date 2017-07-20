import express from 'express'
import compression from 'compression'
import bodyParser from 'body-parser'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'

import webpackConfig from '../../webpack.config'
import handleRender from './handleRender'

const app = express()

// Run Webpack dev server in development mode
if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
      colors: true,
      hash: false,
      version: false,
      timings: false,
      modules: false,
    },
  }))
  app.use(webpackHotMiddleware(compiler))
}

// Apply body Parser and server public assets and routes
app.use(compression())

// TODO: add ./public dir add favicon
// app.use(express.static(path.join(process.cwd(), 'public')))

app.use(bodyParser.json({limit: '20mb'}))
app.use(bodyParser.urlencoded({limit: '20mb', extended: false}))

// This is fired every time the server side receives a request
app.use(handleRender)

app.listen(process.env.NODE_PORT, () => {
  console.log(`Server started: http://localhost:${process.env.NODE_PORT}`) // eslint-disable-line no-console
})
