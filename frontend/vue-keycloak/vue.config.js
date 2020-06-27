module.exports = {
  devServer: {
    proxy: {
      '/authample': {
        target: 'http://localhost:8080'
      }
    }
  }
}
