module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/**/*.{png,jpg,jpeg,gif,svg,ico,webp}");
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
