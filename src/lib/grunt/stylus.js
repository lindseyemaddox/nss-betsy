module.exports = {
  compile: {
    options: {
      paths: ["../stylus/*.styl"],
      relativeDest: "../../public/stylesheets"
    },
    files: {
      "../stylesheets/compiled.css": ["../stylus/*.styl"] // compile and concat into single file
    }
  }
}