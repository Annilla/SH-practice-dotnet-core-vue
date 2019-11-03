module.exports = {
  outputDir: 'wwwroot',
  publicPath: "/",
  chainWebpack: config => {
    // https://github.com/vuejs/vue-cli/issues/3603#issuecomment-483913563
    // remove vue-cli-service's progress output
    config.plugins.delete('progress')
    // https://intellitect.com/quickly-configure-asp-net-core-api-to-work-with-vue-cli-3/
    // aspnet uses the other hmr so remove this one
    config.plugins.delete('hmr');
  }
}