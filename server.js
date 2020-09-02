const devServer = require('./build/dev-server');
const express = require('express');
const app = express();
const vueRenderer = require('vue-server-renderer')
const path = require('path');

app.get('*', async (req, res) => {


  res.status(200);
  res.setHeader('Content-Type', 'text/html;charset=utf-8;');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.setHeader('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');

  devServer(function(serverBundle,clientBundle,template){
    let renderer = vueRenderer.createBundleRenderer(serverBundle,{
      template,
      clientManifest: clientBundle.data,
      runInNewContext: false
    })

    renderer.renderToString({ url: req.url }).then((html) => {
      res.end(html)
    }).catch(err => console.log(err))
  })

})

app.listen(5000, () => {
  console.log(process.env.NODE_ENV);
  console.log(`启动成功：http://localhost:5000`)
})
