module.exports = function (eleventyConfig) {
  return {
    dir: {
      input: 'src',
      output: '_site',
      includes: '_includes',
      layouts: '_includes/layouts',
      data: '_data',
    },
    templateFormats: ['njk', 'html', 'md'],
    htmlTemplateEngine: 'njk',
  };
};
