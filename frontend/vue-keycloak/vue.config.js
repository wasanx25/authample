module.exports = {
  devServer: {
    proxy: {
      '/sample': {
        target: 'http://localhost:8080'
      }
    }
  }
}
