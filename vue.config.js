module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `
        @import "@/styles/_generic.scss";
        @import "@/styles/_variables.scss";
        `
      }
    }
  }
};
