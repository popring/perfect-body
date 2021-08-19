var ghpages = require('gh-pages')
const path = require('path')

const dir = path.resolve(__dirname, '../dist')

ghpages.publish(dir, function (err) {
  if (err) {
    console.log('err :>> ', err)
  } else {
    console.log('publish gh-pages success')
  }
})
