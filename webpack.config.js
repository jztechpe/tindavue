module.exports = {
  configureWebpack: {
    output: {
      library: 'JuntozComponents', // Add this line to expose the library in the devServer
      libraryExport: 'default',
    }
  },
}