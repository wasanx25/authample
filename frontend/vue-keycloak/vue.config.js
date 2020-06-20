module.exports = {
  devServer: {
    proxy: {
      '/authsample': {
        target: 'http://localhost:8080'
      }
    }
  }
}
