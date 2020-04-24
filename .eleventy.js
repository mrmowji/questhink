module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/browserconfig.xml");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");
  eleventyConfig.addPassthroughCopy("src/manifest.json");
  eleventyConfig.addPassthroughCopy("src/CNAME");
  eleventyConfig.addPassthroughCopy("src/google2c4932720a20e47e.html");

  eleventyConfig.setTemplateFormats("md,njk");

  eleventyConfig.addFilter("isoDate", function (value) {
    return value.toISOString();
    //return value.toLocaleDateString('fa-IR');
  });

  eleventyConfig.addFilter("number", function (value) {
    return +value;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
