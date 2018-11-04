module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'ReactTasks',
      externals: {
        react: 'React'
      }
    }
  }
}
