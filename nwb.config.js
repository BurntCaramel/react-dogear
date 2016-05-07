module.exports = {
  type: 'react-component',
  build: {
    externals: {
      'react': 'React'
    },
    global: 'DogEar',
    jsNext: true,
    umd: true
  }
}
